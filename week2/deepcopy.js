// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

const orderCopy = JSON.parse(JSON.stringify(order));
orderCopy.customer.address.city = "Bengaluru";
orderCopy.items[0].price = 75000;

console.log("Original Order:", order);
console.log("Copied Order:", orderCopy);
