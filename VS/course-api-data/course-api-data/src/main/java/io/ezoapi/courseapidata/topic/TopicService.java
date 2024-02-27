package io.ezoapi.courseapidata.topic;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service // make this class a spring service
public class TopicService {
  private TopicRepository topicRepository;

  public List<Topic> getAllTopics() {
    // return topics;
    List<Topic> topics = new ArrayList<>();
    topicRepository.findAll().forEach(topics::add);
    return topics;
  }

  public Optional<Topic> getTopic(String id) {
    //  return topics.stream().filter(t -> t.getId().equals(id)).findFirst().get();
    return topicRepository.findById(id);
  }

  public void addTopic(Topic topic) {
    // topics.add(topic);
    topicRepository.save(topic);
  }

  public void updateTopic(String id, Topic topic) {
    topicRepository.save(topic);
  }

  public void deleteTopic(String id) {
    //    topics.removeIf(t -> t.getId().equals(id));
    topicRepository.deleteById(id);
  }
}
