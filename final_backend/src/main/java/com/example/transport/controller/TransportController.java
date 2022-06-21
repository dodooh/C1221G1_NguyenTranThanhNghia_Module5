package com.example.transport.controller;


import com.example.transport.dto.TransportDto;
import com.example.transport.model.Transport;
import com.example.transport.service.ITransportService;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(value = {"/api/transports"})
public class TransportController {

    @Autowired
    private ITransportService transportService;

    @PostMapping
    private ResponseEntity<Transport> createNewTransport(@RequestBody TransportDto transportDto) {
        Transport transport = new Transport();
        BeanUtils.copyProperties(transportDto, transport);
        return ResponseEntity.ok(transportService.save(transport));
    }

    @GetMapping
    private ResponseEntity<?> getList(@RequestParam Optional<String> company, @RequestParam Optional<Integer> fromPlace,
        @PageableDefault(size = 5) Pageable pageable)
    {
        String companySearch = company.orElse("");
        Integer fromPlaceIdSearch = fromPlace.orElse(null);
        return ResponseEntity.ok(this.transportService.findAllByCompanyAndFromPlace(companySearch, fromPlaceIdSearch, pageable));
    }

    @GetMapping("{id}")
    private ResponseEntity<?> getTransportById(@PathVariable Integer id) {
        Optional<Transport> transportOptional = this.transportService.findById(id);
        if (transportOptional.isPresent()) {
            return ResponseEntity.ok(transportOptional.get());
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    private ResponseEntity<Transport> updateTransport(@RequestBody TransportDto transportDto) {
        Transport transport = new Transport();
        BeanUtils.copyProperties(transportDto, transport);
        return ResponseEntity.ok(transportService.save(transport));
    }

    @DeleteMapping("{id}")
    private ResponseEntity<?> deleteTransport(@PathVariable Integer id) {
        Optional<Transport> transportOptional = this.transportService.findById(id);
        if (transportOptional.isPresent()) {
            return ResponseEntity.ok(transportService.delete(transportOptional.get()));
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
