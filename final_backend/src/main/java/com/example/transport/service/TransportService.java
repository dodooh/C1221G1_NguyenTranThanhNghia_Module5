package com.example.transport.service;

import com.example.transport.model.Transport;
import com.example.transport.repository.ITransportRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TransportService implements ITransportService {

    @Autowired
    private ITransportRepository transportRepository;

    @Override
    public Transport save(Transport transport) {
        return transportRepository.save(transport);
    }

    @Override
    public Page<Transport> findAll(Pageable pageable) {
        return transportRepository.findAllByStatusIs(true, pageable);
    }

    @Override
    public Page<Transport> findAllByCompanyAndFromPlace(String companySearch, Integer fromPlaceIdSearch, Pageable pageable) {
        if (fromPlaceIdSearch == null) {
            return transportRepository.findAllByCompanyContainingAndStatusIs(companySearch, true, pageable);
        }
        return transportRepository.findAllByCompanyContainingAndFromPlace_IdAndStatusIs(companySearch, fromPlaceIdSearch, true, pageable);
    }

    @Override
    public Optional<Transport> findById(Integer id) {
        return transportRepository.findByTransportIdAndStatusIs(id, true);
    }

    @Override
    public Integer delete(Transport transport) {
        return transportRepository.deactivate(transport.getTransportId());
    }
}
