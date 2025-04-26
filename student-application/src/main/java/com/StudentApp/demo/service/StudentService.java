package com.StudentApp.demo.service;

import com.StudentApp.demo.dto.StudentDTO;
import com.StudentApp.demo.entity.StudentEntity;
import com.StudentApp.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public void addStudent(StudentDTO studentDTO) {
        StudentEntity studentEntity = studentRepository.save
                (StudentEntity.builder()
                        .id(studentDTO.getId())
                        .name(studentDTO.getName())
                        .email(studentDTO.getEmail())
                        .phone(studentDTO.getPhone())
                        .build());
        System.out.println("Data Stored");
    }

    public StudentDTO getStudentId(String id) {
        Optional<StudentEntity> optionalStudentEntity = studentRepository.findById(id);
        if(optionalStudentEntity.isEmpty())
            System.out.println("No data found !");

        StudentEntity studentEntity = optionalStudentEntity.get();
        return StudentDTO.builder().id(studentEntity.getId()).name(studentEntity.getName()).email(studentEntity.getEmail()).phone(studentEntity.getPhone()).build();
    }

    public ResponseEntity<StudentDTO> updateStudent(StudentDTO studentDTO)
    {
        Optional<StudentEntity> optionalStudentEntity = studentRepository.findById(studentDTO.getId());
        if(optionalStudentEntity.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        StudentEntity studentEntity = optionalStudentEntity.get();
        studentEntity.setName(studentDTO.getName());
        studentEntity.setEmail(studentDTO.getEmail());
        studentEntity.setPhone(studentDTO.getPhone());

        StudentEntity studentEntity1 = studentRepository.save(studentEntity);
        return ResponseEntity.ok(StudentDTO.builder()
                        .id(studentEntity1.getId())
                        .name(studentEntity1.getName())
                        .email(studentEntity1.getEmail())
                        .phone(studentEntity1.getPhone())
                .build());
    }
}
