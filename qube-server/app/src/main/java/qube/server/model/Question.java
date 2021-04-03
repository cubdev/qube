package qube.server.model;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class Question {
    private Long id;
    private String body;
    private String course;
    private String subject;
    private List<Object> metadata;
}
