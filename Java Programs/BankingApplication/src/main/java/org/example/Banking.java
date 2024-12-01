    package BankApplication;

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

            Customer customer1 = new Customer(
                    "Vijay",
                    "VS",
                    "vijayvs6383@gmail.com",
                    21,
                    1234567890L,
                    "123 middle street, Dindigul",
                    "9876543210"
            );

            // Now this will print customer details in a readable format
            System.out.println(customer1.toString());
            System.out.println(customer1.accountNumber);

        }
    }
