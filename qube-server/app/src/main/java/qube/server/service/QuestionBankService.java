package qube.server.service;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import qube.server.model.Question;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.LongStream;

@RestController
public class QuestionBankService {

    // fetches all questions
    @RequestMapping("/questions")
    public List<Question> getAllQuestions() {
        List<Question> allQuestions = new ArrayList<>();
        LongStream.range(0, 11).forEach(i -> allQuestions.add(Question.builder().id(i).course("Maths").build()));
        return allQuestions;
    }

    // fetches questions per course
    @RequestMapping("/questions/{course}")
    public List<Question> getAllQuestionsForCourse(@PathVariable String course) {
        List<Question> courseQuestions = new ArrayList<>();
        LongStream.range(0, 11).forEach(i -> courseQuestions.add(Question.builder().id(i).course(course).build()));
        return courseQuestions;
    }
}
