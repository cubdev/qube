package qube.server.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.Map;

@Getter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Document(indexName = "qube")
public class Question {
    @Id
    private String id;
    private String body;
    private String solution;
    private String course;
    private String subject;
    private Map<String, Object> metadata;
}
