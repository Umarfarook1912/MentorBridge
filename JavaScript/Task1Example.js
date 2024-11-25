const books = [
    { id: 1, title: "harry potter", price: 200, stock: 2 },
    { id: 2, title: "The six star", price: 300, stock: 5 },
    { id: 2, title: "The six star", price: 300, stock: 5 },
    { id: 3, title: "The Heaven", price: 500, stock: 6 },
];

const customers = [
    { id: 1, name: "umar", isExistingCustomer: true, lastPurchase: null },
    { id: 2, name: "ashik", isExistingCustomer: false, lastPurchase: null },
    { id: 3, name: "rahul", isExistingCustomer: true, lastPurchase: null },
];

function removeDuplicates(bookList) {
    //1.bookList.map((book)=>book.id) used to extract the booklist using id and change to array of only id like[1,2,2,3]
    //2.new Set(bookList.map((book)=>book.id)) Automatically removes the duplicates using set
    //3.Array.from(new Set(bookList.map((book)=>book.id))) change back to the array object
    //4.Array.from(new Set(bookList.map((book)=>book.id))).map((id)=>bookList.find((book)=>book.id===id)); Map to the original book object by finding that the array with id(that contains only id as array) matches the array with in the book (declared object)
    return Array.from(new Set(bookList
        .map((book) => book.id)))
        .map((id) => bookList
            .find((book) => book.id === id));
}
console.log(books);
console.log("After removing duplicates");
const uniqueBooks = removeDuplicates(books); // assinging function with our original books object to unique name
uniqueBooks.forEach((book) => { // print every book
    console.log(`ID:${book.id},Title:${book.title},Price:${book.price},Stock:${book.stock}`);
});

console.log(" ");

BookIds = [1, 2];
function getCustomerChosenBooks(BookIds, inventory) {
    return BookIds.map((id) => inventory.find((book) => book.id === id)).filter(Boolean);
}

const chosenBooks = getCustomerChosenBooks(BookIds, books);
console.log("Chosen Books");
chosenBooks.forEach((book) => { // print every chosen book
    console.log(`ID:${book.id},Title:${book.title},Price:${book.price},Stock:${book.stock}`);
});

console.log(" ");

function calculateDiscount(price, isExistingCustomer) {
    if (isExistingCustomer) {
        return price > 200 ? price * 0.15 : 0;
    }
    else {
        if (price >= 100 && price <= 200) {
            return price * 0.02;
        }
        if (price > 100 && price <= 500) {
            return price * 0.05;
        }
        if (price > 500 && price <= 750) {
            return price * 0.10;
        }
        if (price > 750) {
            return price * 0.15;
        }
        return 0;
    }
}

function printdiscount(books, customers) {
    console.log("Discount for customers");
    customers.forEach((customer) => {
        console.log(`Customer Name:${customer.name}`);
        uniqueBooks.forEach((book) => {
            const Discount = calculateDiscount(book.price, customer.isExistingCustomer);
            console.log(`Book:${book.title},Discount:Rs${Discount.toFixed(2)}`);
        })
    })
}
printdiscount(books, customers);

console.log(" ");
let bill;
function prepareBill(customer, chosenBooks) {
    let totalDiscount = 0;
    let totalPrice = 0;
    const purchasedBooks = chosenBooks.map((book) => {
        const discount = calculateDiscount(book.price, customer.isExistingCustomer);
        const finalPrice = book.price - discount;
        totalDiscount += discount;
        totalPrice += finalPrice;
        return {
            title: book.title,
            quantity: 1,
            price: book.price,
            discount: discount.toFixed(2),
            finalPrice: finalPrice.toFixed(2)
        };
    });
    return {
        CustomerName: customer.name,
        purchasedBooks,
        totalDiscount: totalDiscount.toFixed(2),
        totalPrice: totalPrice.toFixed(2)
    };
}

function printBill(customer, chosenBooks) {
    bill = prepareBill(customer, chosenBooks);
    console.log("Customer Name:", bill.CustomerName);
    console.log("Books purchased:");
    bill.purchasedBooks.forEach((book) => {
        console.log(`Title:${book.title}`);
        console.log(`Quantity:${book.quantity}`);
        console.log(`OriginalPrice:${book.price}`);
        console.log(`Discount:${book.discount}`);
        console.log(`Final Price:${book.finalPrice}`);
    });
    console.log("Total Discount: Rs:" + bill.totalDiscount);
    console.log("Total Price: Rs:" + bill.totalPrice);
}
printBill(customers[0], chosenBooks);

console.log(" ");
function updateStock(chosenBooks, inventory) {
    chosenBooks.forEach((chosenBook) => {
        const book = inventory.find((b) => b.id === chosenBook.id);
        if (book) book.stock -= 1;
    });
}

updateStock(chosenBooks, books);
console.log("Updated Stock:");
books.forEach((book) => {
    console.log(`ID:${book.id},Title:${book.title},Stock:${book.stock}`);
});

console.log(" ");
function updateCustomerDetails(customer, bill) {
    customer.lastPurchase = {
        date: new Date().toISOString(),
        booksPurchased: bill.purchasedBooks,
        totalPrice: bill.totalPrice
    }
};
updateCustomerDetails(customers[0], bill);
console.log("Updated Customer Details:");
console.log(`Customer Name:${customers[0].name}`);
console.log("Customer Details:", customers[0].lastPurchase);

console.log(" ");

function processPurchase(BookIds, customerId) {
    const inventory = removeDuplicates(books);
    const customer = customers.find((c) => c.id == customerId);
    if (!customer) throw new Error("Customer not found");
    const chosenBook = getCustomerChosenBooks(BookIds, inventory);
    if (chosenBook.length === 0) throw new Error("Not valid Book");
    const bill = prepareBill(customer, chosenBooks);
    updateStock(chosenBook, inventory);
    updateCustomerDetails(customer, bill);
    return {
        bill,
        updateStock: inventory,
        updateCustomerDetails: customer
    }
}
console.log(" ");
const customerId = 1;
try {
    const result = processPurchase(BookIds, customerId);
    console.log("Summary:");
    console.log("Bill Details:");
    console.log(result.bill);
    console.log("Updated Stock:");
    result.updateStock.forEach((book) => {
        console.log(`ID:${book.id},Title:${book.title},Stock:${book.stock}`);
    })
    console.log("Updated Customer Details");
    console.log(result.updateCustomerDetails);
}
catch (error) {
    console.log("Error Message:", error.message)
}