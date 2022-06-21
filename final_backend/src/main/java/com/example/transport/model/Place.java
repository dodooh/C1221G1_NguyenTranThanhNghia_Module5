package com.example.transport.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
@JsonIgnoreProperties({"transportFrom", "transportTo"})
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    @OneToMany(mappedBy = "fromPlace")
    private List<Transport> transportFrom;
    @OneToMany(mappedBy = "toPlace")
    private List<Transport> transportTo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Transport> getTransportFrom() {
        return transportFrom;
    }

    public void setTransportFrom(List<Transport> transportFrom) {
        this.transportFrom = transportFrom;
    }

    public List<Transport> getTransportTo() {
        return transportTo;
    }

    public void setTransportTo(List<Transport> transportTo) {
        this.transportTo = transportTo;
    }
}
