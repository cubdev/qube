package qube.server.config;

import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.client.ClientConfiguration;
import org.springframework.data.elasticsearch.client.RestClients;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

@Configuration
@EnableElasticsearchRepositories(basePackages = "qube.server.repository")
@ComponentScan("qube.server.service")
public class QubeConfig {

    @Bean
    public RestHighLevelClient client() {
        String esHostName = System.getProperty("qube.es.host", "localhost");
        System.out.println("*******" + esHostName);
        ClientConfiguration clientConfiguration
                = ClientConfiguration.builder()
                .connectedTo(esHostName + ":9200")
                .build();

        return RestClients.create(clientConfiguration).rest();
    }

    @Bean
    public ElasticsearchOperations elasticsearchTemplate() {
        return new ElasticsearchRestTemplate(client());
    }
}
