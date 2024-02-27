package io.ezoapi.courseapidata.topic;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity  // create column
public class Topic {

    @Id // primary column
    private String id;
    private String name;
    private String description;

    public Topic(String id, String name, String description) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public Topic() {
    }
    
public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
