package qube.server.model;

import lombok.Getter;
import lombok.ToString;
import qube.server.util.Criteria;
import qube.server.util.Filter;

import java.util.List;

@Getter
@ToString
public class QuestionFilter implements Filter<Question> {

    private List<Criteria> course;
    private List<Criteria> subject;

    @Override
    public List<Question> filter(List<Question> input) {
        return input;
    }
}
