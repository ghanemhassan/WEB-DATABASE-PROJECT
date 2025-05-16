let orders = [];

function fetchOrders() {
  return fetch("http://localhost:3000/orders")
    .then((res) => res.json())
    .then((data) => {
      orders = data;
      renderTable(orders);
    });
}

function renderTable(data) {
  const tbody = document.querySelector("#ordersTable tbody");
  tbody.innerHTML = "";
  data.forEach((order) => {
    const totalPrice = (order.price * order.quantity).toFixed(2);
    tbody.innerHTML += `
      <tr>
        <td>${order.order_id}</td>
        <td>${order.customerName}</td>
        <td>${new Date(order.orderDate).toISOString().split("T")[0]}</td>
        <td>${order.customerAddress}</td>
        <td>${order.productName}</td>
        <td>${order.quantity}</td>
        <td>$${totalPrice}</td>
        <td>
          <button onclick="editOrder(${Number(order.order_id)})">Edit</button>
          <button onclick="deleteOrder(${Number(
            order.order_id
          )})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editOrder(id) {
  if (typeof id === "number" && !isNaN(id)) {
    localStorage.setItem("editOrderId", id);
    window.location.href = "edit.html";
  } else {
    alert("Invalid order ID for editing.");
  }
}

function deleteOrder(id) {
  if (!confirm("Are you sure you want to delete this order?")) return;

  fetch(`http://localhost:3000/orders/${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        alert("Order deleted successfully!");
        fetchOrders();
      } else {
        alert("Failed to delete order.");
      }
    })
    .catch(() => alert("Server error!"));
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(term) ||
      order.order_id.toString().includes(term)
  );
  renderTable(filtered);
});

document.getElementById("sortSelect").addEventListener("change", (e) => {
  const value = e.target.value;
  const sorted = [...orders].sort((a, b) => {
    if (value === "orderDate")
      return new Date(a.orderDate) - new Date(b.orderDate);
    if (value === "totalPrice")
      return a.price * a.quantity - b.price * b.quantity;
  });
  renderTable(sorted);
});

fetchOrders();
