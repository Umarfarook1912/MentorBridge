package BankApplication;

public class Customer { // Model class

    String firstName;
    String lastName;
    String email;
    int age;
    long accountNumber;
    String address;
    String phoneNumber;

    Customer(String firstName, String lastName, String email, int age, long accountNumber, String address, String phoneNumber)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.accountNumber = accountNumber;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", accountNumber=" + accountNumber +
                ", address='" + address + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                '}';
    }
}
