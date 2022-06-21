package com.example.transport.service;

import com.example.transport.model.Place;
import com.example.transport.repository.IPlaceRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PlaceService implements IPlaceService{

    @Autowired
    private IPlaceRepository placeRepository;

    @Override
    public List<Place> findAll() {
        return placeRepository.findAll();
    }
}
