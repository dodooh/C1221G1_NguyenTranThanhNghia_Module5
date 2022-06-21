package com.example.transport.controller;


import com.example.transport.model.Place;
import com.example.transport.service.IPlaceService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(value = {"/api/places"})
public class PlaceController {

    @Autowired
    private IPlaceService placeService;

    @GetMapping
    public ResponseEntity<?> getPlaceList() {
        List<Place> placeList = placeService.findAll();
        return ResponseEntity.ok(placeList);
    }
}
