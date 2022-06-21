package com.example.transport.repository;

import com.example.transport.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPlaceRepository extends JpaRepository<Place, Integer> {

}
