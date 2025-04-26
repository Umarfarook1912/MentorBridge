package org.mentorbridge.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "employee")
@Builder
@AllArgsConstructor
@Data
public class EmployeeEntity {

    @Id
    long id;
    String firstName;
    String lastName;
    String email;
    String phone;
    String dept;

    public EmployeeEntity() {
    }
}
