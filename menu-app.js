// =============================
// === js file for menu.hmtl ===
// =============================

// sets default drink as regular milk tea
let setDefaultDrink = function () {
    document.getElementById("default-drink").checked = true;
}

window.onload = setDefaultDrink();

// keeps track of whether items are in cart
let emptyCart = true;

// call us button alert
let callBtn = function () {
    alert("Ring Ring Ring Ring");
}

// gets current drink
let getCurrentDrink = function () {
    let drink = document
        .querySelector("input[type=radio]:checked");
    let arr = drink.value.split(",");
    return arr[0];
}

// gets current toppings
// if no toppings, returns 'No Toppings'
let getCurrentToppings = function () {
    let arr = [];
    let checkboxes = document
        .querySelectorAll('input[type=checkbox]:checked');

    for (let i = 0; i < checkboxes.length; ++i) {
        let topping = checkboxes[i].value.split(",")
        arr.push(topping[0]);
    }

    let toppings = "";
    for (let i = 0; i < checkboxes.length; ++i) {
        if (i == checkboxes.length - 1) {
            toppings += arr[i] + " ";
        } else {
            toppings += arr[i] + ", ";
        }
    }

    if (toppings == "") {
        return "No Toppings";
    }

    return toppings;
}

// gets current options
let getCurrentOptions = function () {
    let options = [];
    options.push(document.getElementById("ice").value);
    options.push(document.getElementById("sugar").value);
    options.push(document.getElementById("size").value);
    return options;
}

// gets current price
let getCurrentPrice = function () {
    let price = 0;
    let size = document.getElementById("size").value;
    if (size == "Large") {
        price = 0.50;
    }
    price += getDrinkPrice() + getToppingsPrice();
    return Number(price).toFixed(2);
}

// gets drink name
let updateDrink = function () {
    document.getElementById("selected-drink")
        .innerHTML = getCurrentDrink();
    updatePrice();
}

// gets topping names
let updateToppings = function () {
    document.getElementById("selected-toppings")
        .innerHTML = getCurrentToppings();
    updatePrice();
}

// gets ice, sugar, and size
let updateOptions = function () {
    let options = getCurrentOptions();
    let optionsStr = options[0] + "% Ice, " 
                     + options[1] + "% Sugar, " + options[2];
    document.getElementById("selected-options")
        .innerHTML = optionsStr;
    updatePrice();
}

// gets drink price
let getDrinkPrice = function () {
    let drink = document
        .querySelector("input[type=radio]:checked");
    let arr = drink.value.split(",");
    return Number(arr[1]);
}

// gets toppings price
let getToppingsPrice = function () {
    let price = 0;
    let checkboxes = document
        .querySelectorAll('input[type=checkbox]:checked');

    for (let i = 0; i < checkboxes.length; ++i) {
        let topping = checkboxes[i].value.split(",");
        price += Number(topping[1]);
    }
    return price;
}

// gets total price
let getTotalPrice = function () {
    let total = Number(document.getElementById("cart-price").innerHTML);
    return total + Number(getCurrentPrice());
}

// updates total price
let updatePrice = function () {
    document.getElementById("selected-price")
        .innerHTML = getCurrentPrice();
}

// adds order to cart
let addCart = function () {
    emptyCart = false;
    addTotalPrice();
    let orderStr = "";
    options = getCurrentOptions();
    orderStr += options[2] + " ";              // size
    orderStr += getCurrentDrink() + " with ";  // drink
    orderStr += getCurrentToppings() + ", ";   // toppings
    orderStr += options[0] + "% Ice, "         // options 
                + options[1] + "% Sugar";
    createCard(orderStr);
    resetOrder();
}

// creates card for order to be displayed
let createCard = function (orderStr) {
    // creates container element
    let container = document.querySelector(".items");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    container.appendChild(card);

    // creates order element
    let order = document.createElement("p");
    let orderText = document.createTextNode(orderStr);
    order.setAttribute("class", "text");
    order.appendChild(orderText);
    card.appendChild(order);

    // creates price element
    let price = document.createElement("p");
    let priceText = document.createTextNode(getCurrentPrice());
    price.setAttribute("class", "price");
    price.appendChild(priceText);
    card.appendChild(price);
}

// resets selected items
let resetOrder = function () {
    // drink
    setDefaultDrink();

    // toppings
    let check = document
        .querySelectorAll("input[type=checkbox]:checked");
    for (let i = 0; i < check.length; ++i) {
        check[i].checked = false;
    }

    // options
    document.getElementById("ice").selectedIndex = 0;
    document.getElementById("sugar").selectedIndex = 0;
    document.getElementById("size").selectedIndex = 0;

    // selected card
    document.getElementById("selected-drink")
        .innerHTML = "Regular Milk Tea";
    document.getElementById("selected-toppings")
        .innerHTML = "No Toppings";
    document.getElementById("selected-options")
        .innerHTML = "125% Ice, 125% Sugar, Medium";
    document.getElementById("selected-price")
        .innerHTML = Number(3.5).toFixed(2);
}

// adds to total price
let addTotalPrice = function () {
    document.getElementById("cart-price")
        .innerHTML = Number(getTotalPrice()).toFixed(2);
}

// clears cart and menu
let clearMenu = function () {
    emptyCart = true;
    resetOrder();
    document.querySelector(".items").innerHTML = "";
    document.getElementById("cart-price").innerHTML = Number(0).toFixed(2);
}

// alerts user checkout is completed
let alertCheckout = function () {
    if (emptyCart) {
        alert("No items in cart.");
        return;
    }
    clearMenu();
    alert("Order completed!");
}

// changes to page on click and on change
let drinks = document.querySelector(".drinks");
drinks.onclick = updateDrink;

let toppings = document.querySelector(".toppings");
toppings.onchange = updateToppings;

let ice = document.querySelector("#ice");
let sugar = document.querySelector("#sugar");
let size = document.querySelector("#size");
ice.onchange = updateOptions;
sugar.onchange = updateOptions;
size.onchange = updateOptions;