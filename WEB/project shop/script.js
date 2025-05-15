  
    let orders = [];

    function fetchAPIOrders() {
      return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
          return data.slice(0, 5).map((product, index) => ({
            orderNumber: index + 1,
            customerName: `API Customer ${index + 1}`,
            customerAddress: `API City ${index + 1}`,
            orderDate: `2025-05-${(index + 10).toString().padStart(2, '0')}`,
            productName: product.title,
            productPrice: product.price,
            quantity: Math.floor(Math.random() * 5) + 1,
            fromAPI: true
          }));
        });
    }

    function getLocalOrders() {
      const local = localStorage.getItem("userOrders");
      return local ? JSON.parse(local) : [];
    }

    function renderTable(data) {
      const tbody = document.querySelector("#ordersTable tbody");
      tbody.innerHTML = "";

      let localIndex = 0; // عداد للطلبات المحلية فقط

      data.forEach((order, index) => {
        const totalPrice = (order.productPrice * order.quantity).toFixed(2);

        let actionButtons = "";
        if (!order.fromAPI) {
          actionButtons = `
            <button onclick="editOrder(${localIndex})">Edit</button>
            <button onclick="deleteOrder(${localIndex})">Delete</button>
          `;
          localIndex++;
        }

        tbody.innerHTML += `
          <tr>
            <td>${order.orderNumber}</td>
            <td>${order.customerName}</td>
            <td>${order.orderDate}</td>
            <td>${order.customerAddress}</td>
            <td>${order.productName} x${order.quantity}</td>
            <td>$${totalPrice}</td>
            <td>${actionButtons}</td>
          </tr>
        `;
      });
    }

    function deleteOrder(index) {
      let localOrders = getLocalOrders();
      localOrders.splice(index, 1);
      localStorage.setItem("userOrders", JSON.stringify(localOrders));
      loadData();
    }

    function editOrder(index) {
      localStorage.setItem("editIndex", index);
      window.location.href = "edit.html";
    }

    function loadData() {
      fetchAPIOrders().then(apiOrders => {
        const localOrders = getLocalOrders();
        // نجمع الطلبات: أولاً طلبات API ثم المحلية
        orders = [...apiOrders, ...localOrders];

        // لضبط أرقام الطلبات بشكل متسلسل (بناء على المجموع)
        orders.forEach((order, i) => {
          order.orderNumber = i + 1;
        });

        renderTable(orders);
      });
    }

    document.getElementById("searchInput").addEventListener("input", e => {
      const term = e.target.value.toLowerCase();
      const filtered = orders.filter(o =>
        o.customerName.toLowerCase().includes(term) ||
        o.orderNumber.toString().includes(term)
      );
      renderTable(filtered);
    });

    document.getElementById("sortSelect").addEventListener("change", e => {
      const value = e.target.value;
      const sorted = [...orders].sort((a, b) => {
        if (value === "orderDate") return new Date(a.orderDate) - new Date(b.orderDate);
        if (value === "totalPrice") return (a.productPrice * a.quantity) - (b.productPrice * b.quantity);
        return 0;
      });
      renderTable(sorted);
    });

    // تحميل البيانات عند فتح الصفحة
    loadData();
