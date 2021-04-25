package qube.server.repository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import qube.server.BaseQubeIntegrationTest;
import qube.server.model.Question;

import java.util.List;
import java.util.concurrent.atomic.LongAdder;

public class QuestionRepositoryIntegrationTest extends BaseQubeIntegrationTest {

    @Autowired
    private QuestionRepository questionRepository;

    // populate dummy data to test elasticsearch queries; Note: elasticsearch server should be active in host:port as
    // per {@code qube.server.config.QubeConfig}
    @BeforeEach
    public void init() {
        LongAdder idGenerator = new LongAdder();
        List<String> subjects = List.of("English", "Maths", "Physics", "Chemistry", "Biology");
        List<String> courses = List.of("ICSE", "CBSE", "ISC", "NEET");
        courses.forEach(course -> subjects.forEach(subject -> {
            Question question = Question.builder()
                    .id(idGenerator.longValue())
                    .body(String.format("Find %s question for %s", course, subject))
                    .course(course)
                    .subject(subject)
                    .build();
            questionRepository.save(question);
            idGenerator.increment();
        }));
    }

    @Test
    public void queryQuestions() {
        Page<Question> questions = questionRepository.findAll(PageRequest.of(0, 10));
        System.out.println(questions.getContent());
    }
}
