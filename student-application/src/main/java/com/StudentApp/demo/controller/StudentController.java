package com.StudentApp.demo.controller;

import com.StudentApp.demo.dto.StudentDTO;
import com.StudentApp.demo.entity.StudentEntity;
import com.StudentApp.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public void addStudent(@RequestBody StudentDTO studentDTO){
        System.out.println("added student data");
        studentService.addStudent(studentDTO);
    }
    @GetMapping("/get/{id}")
    public StudentDTO getStudentId(@PathVariable String id){
        return studentService.getStudentId(id);
    }

    @PutMapping("/update")
    public ResponseEntity<StudentDTO> updateStudent(@RequestBody StudentDTO studentDTO)
    {
        return studentService.updateStudent(studentDTO);
    }
}
