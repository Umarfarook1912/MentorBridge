package com.StudentApp.demo.repository;

import com.StudentApp.demo.entity.StudentEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends MongoRepository<StudentEntity, String> {
    Optional<StudentEntity> findById(String id);
}
