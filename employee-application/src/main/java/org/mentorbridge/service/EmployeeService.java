package org.mentorbridge.service;

import org.mentorbridge.dto.EmployeeDTO;
import org.mentorbridge.entity.EmployeeEntity;
import org.mentorbridge.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public EmployeeDTO addEmployee(EmployeeDTO employeeDTO) {
        EmployeeEntity employeeEntity = EmployeeEntity.builder()
                .firstName(employeeDTO.getFirstName())
                .lastName(employeeDTO.getLastName())
                .email(employeeDTO.getEmail())
                .phone(employeeDTO.getPhone())
                .build();
        EmployeeEntity employeeEntity1 = employeeRepository.save(employeeEntity);
        return employeeDTO.builder().empId(employeeEntity1.getId()).build();
    }
}
