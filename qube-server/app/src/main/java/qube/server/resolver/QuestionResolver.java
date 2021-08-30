package qube.server.resolver;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import qube.server.model.Question;
import qube.server.model.QuestionFilter;
import qube.server.service.QuestionBankService;

import java.util.List;

@Slf4j
@DgsComponent
public class QuestionResolver {

    @Autowired
    private QuestionBankService questionBankService;

    @DgsQuery
    public List<Question> questions(@InputArgument("filter") QuestionFilter questionFilter) {
        System.out.println("********" + questionFilter);
        List<Question> questions = questionBankService.getAllQuestions(questionFilter);
        return questions;
    }

    @DgsMutation
    public Question addQuestion(@InputArgument("input") Question questionInput) {
        System.out.println("*******" + questionInput);
        return questionBankService.addQuestion(questionInput);
    }
}


