package org.mentorbridge.repository;

import org.mentorbridge.entity.EmployeeEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository extends MongoRepository<EmployeeEntity,String> {
}
