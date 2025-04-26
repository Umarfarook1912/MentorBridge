package com.StudentApp.demo.entity;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "Student")
@Builder
@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StudentEntity {
    String id;
    String name;
    String email;
    String phone;
}
