package org.mentorbridge.controller;

import org.mentorbridge.dto.EmployeeDTO;
import org.mentorbridge.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
    @Autowired //automatically generate object when request is received
    private EmployeeService employeeService;
    @PostMapping("/add")
    public EmployeeDTO addEmployee(@RequestBody EmployeeDTO employee)
    {
        System.out.println("Employee added:"+employee);
        return employeeService.addEmployee(employee);
    }
}
