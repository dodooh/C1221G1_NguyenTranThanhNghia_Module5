package com.example.transport.service;

import com.example.transport.model.Transport;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ITransportService {

    Transport save(Transport transport);

    Page<Transport> findAll(Pageable pageable);
    Page<Transport> findAllByCompanyAndFromPlace(String companySearch, Integer fromPlaceIdSearch, Pageable pageable);

    Optional<Transport> findById(Integer id);

    Integer delete(Transport transport);
}
