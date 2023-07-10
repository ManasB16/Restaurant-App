const form = document.querySelector("#myform");
const price = document.querySelector("#price");
const dish = document.querySelector("#dish");
const table = document.querySelector("#table");

document.addEventListener("submit", onsubmit);

async function onsubmit(e) {
  try {
    e.preventDefault();

    let order = {
      price: price.value,
      dish: dish.value,
      table: table.value,
    };
    let Ord = await axios.post("http://localhost:8000/add-order", order);
    showNewOrdOnScreen(Ord.data.newOrd);
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    let orders = await axios.get("http://localhost:8000/get-orders");
    for (var i = 0; i < orders.data.ords.length; i++) {
      showNewOrdOnScreen(orders.data.ords[i]);
    }
  } catch (err) {
    console.log(err);
  }
});

function showNewOrdOnScreen(order) {
  document.getElementById("price").value = "";
  document.getElementById("dish").value = "";
  const tablevalue = document.getElementById("table").value;
  document.getElementById("table").value = "";

  if (order.table === "Table 1") {
    const parentNode = document.getElementById("table1");
    const childElement = `<li id=${order.id}> ${order.price} - ${order.dish} - ${order.table}
                        <button onclick="deleteOrd('${order.id}','${order.table}')"> Delete </button>               
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childElement;
  }
  if (order.table === "Table 2") {
    const parentNode = document.getElementById("table2");
    const childElement = `<li id=${order.id}> ${order.price} - ${order.dish} - ${order.table}
                        <button onclick="deleteOrd('${order.id}','${order.table}')"> Delete </button>                
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childElement;
  }
  if (order.table === "Table 3") {
    const parentNode = document.getElementById("table3");
    const childElement = `<li id=${order.id}> ${order.price} - ${order.dish} - ${order.table}
                        <button onclick="deleteOrd('${order.id}','${order.table}')"> Delete </button>                
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childElement;
  }
}

async function deleteOrd(ordID, table) {
  try {
    let ord = await axios.delete(`http://localhost:8000/delete-order/${ordID}`);
    removeOrdFromScreen(ordID, table);
  } catch (err) {
    console.log(err);
  }
}

function removeOrdFromScreen(ordID, table) {
  if (table === "Table 1") {
    const parentNode = document.getElementById("table1");
    const childnodetobeDeleted = document.getElementById(ordID);
    if (childnodetobeDeleted) {
      parentNode.removeChild(childnodetobeDeleted);
    }
  }
  if (table === "Table 2") {
    const parentNode = document.getElementById("table2");
    const childnodetobeDeleted = document.getElementById(ordID);
    if (childnodetobeDeleted) {
      parentNode.removeChild(childnodetobeDeleted);
    }
  }
  if (table === "Table 3") {
    const parentNode = document.getElementById("table3");
    const childnodetobeDeleted = document.getElementById(ordID);
    if (childnodetobeDeleted) {
      parentNode.removeChild(childnodetobeDeleted);
    }
  }
}
