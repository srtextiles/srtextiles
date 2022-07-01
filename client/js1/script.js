// Storage
let purchasedItems = [];
// open cart modal
const cart = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");

cart.addEventListener("click", () => {
    if (cartModalOverlay.style.transform === "translateX(-200%)") {
        cartModalOverlay.style.transform = "translateX(0)";
    } else {
        cartModalOverlay.style.transform = "translateX(-200%)";
    }
});
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", () => {
    cartModalOverlay.style.transform = "translateX(-200%)";
});

cartModalOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-modal-overlay")) {
        cartModalOverlay.style.transform = "translateX(-200%)";
    }
});
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName("add-to-cart");
const productRow = document.getElementsByClassName("product-row");

for (var i = 0; i < addToCart.length; i++) {
    button = addToCart[i];
    button.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
    button = event.target;
    var cartItem = button.parentElement;
    var price = cartItem.getElementsByClassName("product-price")[0].innerText;
    var name = cartItem.getElementsByTagName("p")[0].innerText;
    var imageSrc = cartItem.getElementsByClassName("product-image")[0].src;
    addItemToCart(price, imageSrc, name);
    updateCartPrice();
}

function addItemToCart(price, imageSrc, name) {
    var productRow = document.createElement("div");
    productRow.classList.add("product-row");
    var productRows = document.getElementsByClassName("product-rows")[0];
    var cartImage = document.getElementsByClassName("cart-image");

    for (var i = 0; i < cartImage.length; i++) {
        if (cartImage[i].src == imageSrc) {
            alert("This item has already been added to the cart");
            return;
        }
    }

    var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn" value="${name}">Remove</button>
        </div>
        
      `;
    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
    purchasedItems.push({ price, name, quantity: 1 });
    productRow
        .getElementsByClassName("remove-btn")[0]
        .addEventListener("click", removeItem);
    productRow
        .getElementsByClassName("product-quantity")[0]
        .addEventListener("change", changeQuantity);
    updateCartPrice();
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName("remove-btn");
for (var i = 0; i < removeBtn.length; i++) {
    button = removeBtn[i];
    button.addEventListener("click", removeItem);
}

function removeItem(event) {
    btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove();
    const name = event.target.value;
    purchasedItems = purchasedItems.filter((el) => el.name != name);
    updateCartPrice();
    console.log(purchasedItems);
}

// update quantity input
var quantityInput = document.getElementsByClassName("product-quantity")[0];

for (var i = 0; i < quantityInput; i++) {
    input = quantityInput[i];
    input.addEventListener("change", changeQuantity);
}

function changeQuantity(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartPrice();
}
// end of update quantity input

// update total price
function updateCartPrice() {
    var total = 0;
    for (var i = 0; i < productRow.length; i += 2) {
        cartRow = productRow[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName("product-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("Rs", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity * 1000;
    }
    document.getElementsByClassName("total-price")[0].innerText = "Rs" + total;

    document.getElementsByClassName("cart-quantity")[0].textContent = i /= 2;
}
// end of update total price

//setting quantity to array
const setInputToArray = () => {
    var quantityInput = document.getElementsByClassName("product-quantity");
    console.log(quantityInput);

    Array.from(quantityInput).forEach((ele) => {
        const name =
            ele.parentElement.getElementsByClassName("remove-btn")[0].value;
        const quantity =
            ele.parentElement.getElementsByClassName("product-quantity")[0].value;

        purchasedItems = purchasedItems.map((el) => {
            if (el.name == name) {
                el.quantity = quantity;
            }
            return el;
        });
    });
};

// purchase items
const purchaseBtn = document.querySelector(".purchase-btn");

const closeCartModal = document.querySelector(".cart-modal");

purchaseBtn.addEventListener("click", purchaseBtnClicked);

function purchaseBtnClicked() {
    alert("Thank you for your purchase");
    setInputToArray();
    setToDatabase();
    cartModalOverlay.style.transform = "translateX(-100%)";
    var cartItems = document.getElementsByClassName("product-rows")[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartPrice();
}
// end of purchase items

//alert user if cart is empty
//purcase
const setToDatabase = async() => {
    const data = purchasedItems;
    const response = await fetch("/purchase", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response);
};
//buynow wih credetionalis
const buynow = document.getElementsByClassName("buynow");

for (var i = 0; i < buynow.length; i++) {
    button = buynow[i];
    button.addEventListener("click", buyitem);
}

async function buyitem(event) {
    button = event.target;
    const form = document.getElementById("buynowForm");
    var item = button.parentElement;
    var price = item.getElementsByClassName("product-price")[0];
    var name = item.getElementsByTagName("p")[0];
    var quantity = item.getElementsByClassName("product-quantity")[0];

    const hiddenField = document.createElement("input");
    hiddenField.type = "hidden";
    hiddenField.name = "item";
    hiddenField.value = name.innerText;
    form.appendChild(hiddenField);
    const hiddenField2 = document.createElement("input");
    hiddenField2.type = "hidden";
    hiddenField2.name = "price";
    hiddenField2.value = price.innerText;
    form.appendChild(hiddenField2);

    const hiddenField3 = document.createElement("quantity");
    hiddenField3.type = "hidden";
    hiddenField3.name = "quantity";
    hiddenField3.value = quantity ? quantity.innerText : 1;
    form.appendChild(hiddenField3);
    form.action = `/buynow`;
}