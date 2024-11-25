//For Non primitives give const
//we have to give id because map is used to get a property of particular object
//array we use arr[0] to access because it stored in a single memory
//For map it will split the objects into block and stored within a single memory so we can access using map with key
const booksList = [
    { id: 1, title: "The Brave Man", price: 200, stock: 5 },
    { id: 2, title: "The Nature", price: 400, stock: 6 },
    { id: 2, title: "The Nature", price: 400, stock: 6 },
    { id: 3, title: "Harry Potter", price: 300, stock: 4 }
];
const customers = [
    { id: 101, name: "umar", isExistingCustomer: true, lastPurchase: null },
    { id: 102, name: "vijay", isExistingCustomer: false, lastPurchase: null },
    { id: 103, name: "ram", isExistingCustomer: true, lastPurchase: null },
];

const choosenBookIds = [1, 2];
const customerId = 101;

function removeDuplicates() {
    const uniqBooksSet = new Set();
    const uniqBooksList = [];
    for (const book of booksList) {
        if (!uniqBooksSet.has(book.id)) {
            uniqBooksSet.add(book.id);
            uniqBooksList.push(book);
        }
    }
    return uniqBooksList;
}

function filterCustomerChosenBooks(uniqueBooksList) {
    return uniqueBooksList.filter(book => choosenBookIds.includes(book.id));//for findind more than one book
}

function calculateDiscount(customerChosenBooks) {
    //check
    const currentCustomer = customers.find(customer => customer.id === customerId);
    console.log(currentCustomer);
    // let isExisting=false;
    // if(currentCustomer){
    //     isExisting=true;
    // }
    const isExistingCustomer = currentCustomer ? isExisting = true : isExisting = false;

    for (let book of customerChosenBooks) {
        if (isExistingCustomer) {
            if (book.price >= 200) {
                book.discount = book.price * 15 / 100;
            } else {
                book.discount = 0;
            }
        }
        else {
            switch (book.price) {
                case book.price > 100 && book.price < 200:
                    book.discount = book.price * 2 / 100;


                    break;
                case book.price >= 200 && book.price < 500:
                    book.discount = book.price * 5 / 100;


                    break;
                case book.price >= 500 && book.price < 750:
                    book.discount = book.price * 10 / 100;


                    break;
                case book.price >= 750:
                    book.discount = book.price * 15 / 100;

                    break;
                default:
                    book.discount = 0;
                    break;
            }
        }
    }
    console.log(customerChosenBooks);
    calculateFinalSummary(customerChosenBooks);

}
function calculateFinalSummary(customerChosenBooks){
    let totalDiscount=0;
    let totalPrice=0;
    for (let book of customerChosenBooks) {
        book.finalPrice=book.price-book.discount;
        totalDiscount=totalDiscount+book.discount;
        totalPrice+=book.finalPrice;
    }
    console.log(customerChosenBooks);
    console.log("TotalDiscount:",totalDiscount);
    console.log("TotalPrice:",totalPrice);
}

function generateBill() {
    const uniqueBooksList = removeDuplicates();
    console.log(uniqueBooksList);
    const customerChosenBooks = filterCustomerChosenBooks(uniqueBooksList);
    console.log(customerChosenBooks);
    // console.log(customers.find((customer)=>customer.id===customerId).name)
    calculateDiscount(customerChosenBooks);
}

generateBill();

