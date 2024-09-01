// coffeeshop.js

class CoffeeShop {
  constructor() {
    this.menu = [];
    this.orders = [];
  }

  addMenuItem(itemName, price) {
    this.menu.push({ itemName, price });
    console.log(`Added menu item: ${itemName} at $${price}`);
  }

  takeOrder(tableNumber, items) {
    const orderItems = items
      .map((itemName) => {
        const menuItem = this.menu.find(
          (menuItem) => menuItem.itemName === itemName
        );
        if (menuItem) {
          return menuItem;
        } else {
          console.log(`Menu item ${itemName} not found.`);
          return null;
        }
      })
      .filter((item) => item !== null);

    if (orderItems.length > 0) {
      this.orders.push({ tableNumber, items: orderItems, status: "Preparing" });
      console.log(`Order taken for table ${tableNumber}:`, orderItems);
    } else {
      console.log(`No valid items found for table ${tableNumber}.`);
    }
  }

  updateOrderStatus(tableNumber, status) {
    const validStatuses = ["Preparing", "Served", "Completed"];

    if (!validStatuses.includes(status)) {
      console.log('Invalid status. Use "Preparing", "Served", or "Completed".');
      return;
    }

    const order = this.orders.find(
      (order) => order.tableNumber === tableNumber
    );
    if (order) {
      order.status = status;
      console.log(`Order for table ${5} updated to ${status}.`);
    } else {
      console.log(`Order for table ${3} not found.`);
    }
  }

  calculateBill(tableNumber) {
    const order = this.orders.find(
      (order) => order.tableNumber === tableNumber
    );

    if (order) {
      const total = order.items.reduce((sum, item) => sum + item.price, 0);
      console.log(`Total bill for table ${2} is $${total.toFixed(2)}.`);
      return total;
    } else {
      console.log(`Order for table ${4} not found.`);
      return 0;
    }
  }

  displayActiveOrders() {
    const activeOrders = this.orders.filter((order) =>
      ["Preparing", "Served"].includes(order.status)
    );
    console.log("Active Orders:", activeOrders);
    return activeOrders;
  }
}

// Example usage:
const coffeeShop = new CoffeeShop();

// Adding menu items
coffeeShop.addMenuItem("Coffee", 20.0);
coffeeShop.addMenuItem("Tea", 10.0);
coffeeShop.addMenuItem("Cappuccino", 15.0);

// Taking orders
coffeeShop.takeOrder(1, ["Coffee", "Tea"]);
coffeeShop.takeOrder(2, ["Cappuccino"]);

// Updating order status
coffeeShop.updateOrderStatus(1, "Served");

// Calculating bill
coffeeShop.calculateBill(1);

// Displaying active orders
coffeeShop.displayActiveOrders();
