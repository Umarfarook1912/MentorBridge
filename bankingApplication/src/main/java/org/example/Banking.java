    package org.example;

    import java.sql.SQLOutput;

    public class Banking {
        //    deposit
        //    withdraw

        private void deposit() {

        }

        private void withdrawl() {

        }


        public static void main(String[] args) {
            System.out.println("Hello mentor Bridge");
//            Customer customer1 = new Customer("Umar","Farook","umarfarookj06@gmail.com",21,2791696649645L,"41 A Makkan streeet","7871694931");

            Customer customer1 = new Customer();
            customer1.setFirstName("Tom");
            customer1.setLastName("Jerry");
            customer1.setAge(21);
            customer1.setEmail("umarfarookj06@gmail.com");
            customer1.setAccountNumber(2810274916946L);
            customer1.setPhoneNumber("7871694931");
            customer1.setAddress("41 A Makkan Street Dindigul");
            System.out.println(customer1.getFirstName());
            System.out.println(customer1.getLastName());
            System.out.println(customer1.getAge());
            System.out.println(customer1.getEmail());
            System.out.println(customer1.getAccountNumber());
            System.out.println(customer1.getPhoneNumber());
            System.out.println(customer1.getAddress());
//            System.out.println(customer1);

            // Now this will print customer details in a readable format
//            System.out.println(customer1.toString());


        }
    }
