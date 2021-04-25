package qube.server.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import qube.server.model.Question;
import qube.server.repository.QuestionRepository;

@Slf4j
@RestController
public class QuestionBankService {

    @Autowired
    private QuestionRepository questionRepository;

    // fetches all questions
    @RequestMapping("/questions")
    public Page<Question> getAllQuestions() {
        return questionRepository.findAll(PageRequest.of(0, 10));
    }

    // fetches questions per course
    @RequestMapping(path = "/questions", params = "course")
    public Page<Question> getAllQuestionsForCourse(@RequestParam String course) {
        log.debug("Course queried : {}", course);
        return questionRepository.findByCourse(course, PageRequest.of(0, 10));
    }

    // fetches questions per subject
    @RequestMapping(path = "/questions", params = "subject")
    public Page<Question> getAllQuestionsForSubject(@RequestParam String subject) {
        log.debug("Subject queried : {}", subject);
        return questionRepository.findBySubject(subject, PageRequest.of(0, 10));
    }
}
