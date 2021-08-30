package qube.server.util;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Criteria {
    private CriteriaType criteria;
    private Object value;
}
