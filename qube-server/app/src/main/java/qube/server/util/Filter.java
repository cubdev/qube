package qube.server.util;

import java.util.List;

public interface Filter<T> {
    List<T> filter(List<T> input);
}
