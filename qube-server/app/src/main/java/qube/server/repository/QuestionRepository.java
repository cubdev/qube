package qube.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import qube.server.model.Question;

@Repository
public interface QuestionRepository extends ElasticsearchRepository<Question, Long> {
    Page<Question> findAll(Pageable pageable);

    Page<Question> findByCourse(String course, Pageable pageable);

    Page<Question> findBySubject(String subject, Pageable pageable);

}
