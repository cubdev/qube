package qube.server.model;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.List;

@Getter
@Builder
@ToString
@Document(indexName = "qube")
public class Question {
    @Id
    private Long id;
    private String body;
    private String course;
    private String subject;
    private List<Object> metadata;
}
