package org.mentorbridge;

import org.mentorbridge.customeException.AmountValidationException;
import org.mentorbridge.model.Customer;

public class Banking {
    //    deposit
    //    withdraw

    private void deposit(Customer customer, double amount) {
        customer.setAmount(amount);
    }

    private void withdraw(Customer customer, double amount) throws AmountValidationException {
        if (checkBalance(customer, amount)) {
            customer.setAmount(customer.getAmount() - amount);
            System.out.println("Balance Amount:" + customer.getAmount());
        } else {
            System.out.println("Insufficient Balance");
            throw new AmountValidationException("Insufficient Balance", "404", "HIGH");
        }

    }

    private boolean checkBalance(Customer customer, double amount) {
        return customer.getAmount() >= amount;
//            if (customer.getAmount()>=amount){
//                return true;
//            }
//            return false;
    }

    public static void main(String[] args) throws AmountValidationException {
//            System.out.println("Hello mentor Bridge");
//            Customer customer1 = new Customer("Umar","Farook","umarfarookj06@gmail.com",21,2791696649645L,"41 A Makkan streeet","7871694931");

        Customer customer1 = new Customer();
        customer1.setFirstName("Tom");
        customer1.setLastName("Jerry");
        customer1.setAge(21);
        customer1.setEmail("umarfarookj06@gmail.com");
        customer1.setAccountNumber(2810274916946L);
        customer1.setPhoneNumber("7871694931");
        customer1.setAddress("41 A Makkan Street Dindigul");
//            System.out.println(customer1.getFirstName());
//            System.out.println(customer1.getLastName());
//            System.out.println(customer1.getAge());
//            System.out.println(customer1.getEmail());
//            System.out.println(customer1.getAccountNumber());
//            System.out.println(customer1.getPhoneNumber());
//            System.out.println(customer1.getAddress());
//            System.out.println(customer1);

        // Now this will print customer details in a readable format
//            System.out.println(customer1.toString());
        Banking banking = new Banking();
        banking.deposit(customer1, 1000.01);
        System.out.println("Amount Deposited Successfully");

        try {
            banking.withdraw(customer1, 5000.0);
            System.out.println(customer1);
        } catch (AmountValidationException e) {
            System.out.println(e.getErrorCode() + " " + e.getMessage() + " " + e.getSeverity());
        }
    }
}

