
      const index = parseInt(localStorage.getItem("editIndex"));
      const orders = JSON.parse(localStorage.getItem("userOrders")) || [];

      if (isNaN(index) || !orders[index]) {
        alert("No order found to edit.");
        window.location.href = "index.html";
      } else {
        const order = orders[index];

        window.addEventListener("DOMContentLoaded", () => {
          document.getElementById("customerName").value = order.customerName;
          document.getElementById("customerAddress").value =
            order.customerAddress;
          document.getElementById("orderDate").value = order.orderDate;
          document.getElementById("productName").value = order.productName;
          document.getElementById("productPrice").value = order.productPrice;
          document.getElementById("quantity").value = order.quantity;
        });

        document
          .getElementById("editOrderForm")
          .addEventListener("submit", function (e) {
            e.preventDefault();

            orders[index] = {
              ...order,
              customerName: document.getElementById("customerName").value,
              customerAddress: document.getElementById("customerAddress").value,
              orderDate: document.getElementById("orderDate").value,
              productName: document.getElementById("productName").value,
              productPrice: parseFloat(
                document.getElementById("productPrice").value
              ),
              quantity: parseInt(document.getElementById("quantity").value),
              fromAPI: false,
            };

            localStorage.setItem("userOrders", JSON.stringify(orders));
            localStorage.removeItem("editIndex");

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


          });
      }
