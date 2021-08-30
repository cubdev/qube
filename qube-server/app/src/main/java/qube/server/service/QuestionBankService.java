package qube.server.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import qube.server.model.Question;
import qube.server.model.QuestionFilter;
import qube.server.repository.QuestionRepository;

import java.util.List;

@Slf4j
@RestController
public class QuestionBankService {

    @Autowired
    private QuestionRepository questionRepository;

    // fetches all questions
    @RequestMapping(value = "/questions", method = RequestMethod.GET)
    public List<Question> getAllQuestions(QuestionFilter questionFilter) {
        List<Question> questions = questionRepository.findAll(PageRequest.of(0, 10)).toList();
        return questionFilter != null ? questionFilter.filter(questions) : questions;
    }

    // fetches questions per course
    @RequestMapping(value = "/questions/{course}", method = RequestMethod.GET)
    public Page<Question> getAllQuestionsForCourse(@PathVariable String course) {
        log.debug("Course queried : {}", course);
        return questionRepository.findByCourse(course, PageRequest.of(0, 10));
    }

    // fetches questions per subject
    @RequestMapping(value = "/questions/{subject}", method = RequestMethod.GET)
    public Page<Question> getAllQuestionsForSubject(@PathVariable String subject) {
        log.debug("Subject queried : {}", subject);
        return questionRepository.findBySubject(subject, PageRequest.of(0, 10));
    }

    // adds question
    @RequestMapping(path = "/questions/add/{question}", method = RequestMethod.POST)
    public Question addQuestion(@PathVariable Question question) {
        log.debug("New question : {}", question);
        questionRepository.save(question);
        return question;
    }
}
