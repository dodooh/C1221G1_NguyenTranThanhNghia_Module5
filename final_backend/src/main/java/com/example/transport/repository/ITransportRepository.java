package com.example.transport.repository;

import com.example.transport.model.Transport;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

public interface ITransportRepository extends JpaRepository<Transport, Integer> {

    Page<Transport> findAllByStatusIs(boolean status, Pageable pageable);

    Optional<Transport> findByTransportIdAndStatusIs(Integer id, boolean status);

    @Transactional
    @Modifying
    @Query(value="UPDATE transport SET status = false WHERE transport_id = :transportId", nativeQuery = true)
    Integer deactivate(@Param("transportId") Integer transportId);


    Page<Transport> findAllByCompanyContainingAndFromPlace_Id(String company, Integer fromPlace_id, Pageable pageable);

    Page<Transport> findAllByCompanyContaining(String companySearch, Pageable pageable);
}
