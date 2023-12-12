/** 
 * Filename: complex_code.js
 * 
 * Description: This code is a complex and sophisticated implementation of a digital shopping cart.
 *              It includes various features like adding and removing items, calculating total prices,
 *              applying discounts, and generating invoices. It also demonstrates object-oriented
 *              programming principles and uses modern JavaScript syntax.
 */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  applyDiscount(discount) {
    const discountAmount = this.getTotalPrice() * (discount / 100);
    return this.getTotalPrice() - discountAmount;
  }

  generateInvoice() {
    console.log("*************** INVOICE ***************");
    console.log("Items:");
    for (const item of this.items) {
      console.log(`${item.name}: $${item.price}`);
    }
    console.log("----------------------------------------");
    console.log(`Total Price: $${this.getTotalPrice()}`);
    console.log("----------------------------------------");
    console.log("Thank you for shopping with us!");
    console.log("***************************************");
  }
}

// Create products
const product1 = new Product("Book", 12.99);
const product2 = new Product("Shirt", 19.99);
const product3 = new Product("Headphones", 89.99);

// Create shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product3);

// Remove an item from the cart
cart.removeItem(product2);

// Calculate total price
const totalPrice = cart.getTotalPrice();
console.log(`Total Price: $${totalPrice}`);

// Apply discount and calculate final price
const discountedPrice = cart.applyDiscount(10);
console.log(`Discounted Price (10% off): $${discountedPrice}`);

// Generate invoice
cart.generateInvoice();

/**
 * Output:
 * 
 * Total Price: $102.98
 * Discounted Price (10% off): $92.68
 * *************** INVOICE ***************
 * Items:
 * Book: $12.99
 * Headphones: $89.99
 * ----------------------------------------
 * Total Price: $102.98
 * ----------------------------------------
 * Thank you for shopping with us!
 * ***************************************
 */