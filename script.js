function hello() {
  let name = document.getElementById("custname").value;
  let city = document.getElementById("city").value;
  let payment = document.getElementById("paymenttype").value;
  let myUl = document.getElementById("li");
  if (name.length < 2 && city.length < 2) {
    alert("please fill in all fields appropriately");
  } else {
    let node = document.createElement("li");
    let textnode = document.createTextNode(
      name + "・ " + city + "・ " + payment
    );
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    myUl.innerHTML = "";
  }
}
