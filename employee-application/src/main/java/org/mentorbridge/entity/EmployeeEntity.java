package org.mentorbridge.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name = "EMPLOYEE")
@Builder
@AllArgsConstructor
@Data
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;
    String firstName;
    String lastName;
    String email;
    String phone;
    String dept;

    public EmployeeEntity() {
    }
}
