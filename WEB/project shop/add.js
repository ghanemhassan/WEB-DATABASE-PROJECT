
    document.getElementById("addOrderForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const newOrder = {
        orderNumber: Date.now(),
        customerName: document.getElementById("customerName").value,
        customerAddress: document.getElementById("customerAddress").value,
        orderDate: document.getElementById("orderDate").value,
        productName: document.getElementById("productName").value,
        productPrice: parseFloat(document.getElementById("productPrice").value),
        quantity: parseInt(document.getElementById("quantity").value),
        fromAPI: false
      };
      const existing = localStorage.getItem("userOrders");
      const orders = existing ? JSON.parse(existing) : [];
      orders.push(newOrder);
      localStorage.setItem("userOrders", JSON.stringify(orders));
                  const msg = document.createElement("div");
            msg.textContent = "Order updated successfully!";
            msg.style.position = "fixed";
            msg.style.top = "50%";
            msg.style.left = "50%";
            msg.style.transform = "translate(-50%, -50%)";
            msg.style.backgroundColor = "#4CAF50";
            msg.style.color = "white";
            msg.style.padding = "15px 30px";
            msg.style.borderRadius = "10px";
            msg.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
            msg.style.zIndex = 9999;

            document.body.appendChild(msg);

      document.getElementById("addOrderForm").reset();
    });
