package org.mentorbridge.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data  //Setter and getter available in hidden
@AllArgsConstructor  //used by builder
@Builder  //for object creation
public class EmployeeDTO {
    long empId;
    String firstName;
    String lastName;
    String email;
    String phone;
    String role;
}
