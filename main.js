// window.onload = function () {
let buttonPlus = document
  .querySelector(".butn")
  .addEventListener("click", letsGo);
let buttonMinus = document
  .querySelector(".bts")
  .addEventListener("click", goLow);
// let id = document.querySelector("#adder");
let input = document.querySelector("#input");
let thumbimgOne = document.querySelector("#thumbnail-1");
let thumbimgTwo = document
  .querySelector("#thumbnail-2")
  .addEventListener("click", twoImage);
let thumbimgThree = document
  .querySelector("#thumbnail-3")
  .addEventListener("click", threeImage);
let thumbimgFour = document
  .querySelector("#thumbnail-4")
  .addEventListener("click", fourImage);

let buttonCart = document
  .querySelector("#first-button")
  .addEventListener("click", cart);
let cartBox = document
  .querySelector(".cart-box")
  .addEventListener("click", cartDropdown);
let cartFeed = document.querySelector(".cart-feedback");
let cartNum = document.querySelector(".cart-num");
// let delButton = document
//   .querySelector(".delsvg")
//   .addEventListener("click", delFunction);
let profile = document
  .querySelector(".profile")
  .addEventListener("click", cartDropdown);
let bodyOverlay = document
  .querySelector("#dark")
  .addEventListener("click", overlayOut);
let smallImage = document.querySelector(".header-one-a img ");
let cards = document.querySelectorAll(".loops");
let cartNums = document.querySelector(".cart-nums");
let sneakerCompany = document.querySelector("#sneaker-company");
let priceStack = document.querySelector("#price-stack");
let cartAmount = document.querySelector("#cart-amount");
let cartInfo = document.querySelector("#cart-info");
let cartTotal = document.querySelector("#cart-total-amount");
let stressCal = document.querySelector(".stress");
let userList = document.querySelector("#users");
let cartItems = document.querySelector("#cart-items");
let heroText = document.querySelector("#hero-text");

// cartAmount.innerHTML = 0;
// let sum = '';
// cartTotal = 0;
// input.value = 4;
priceStack.innerHTML = "$125,00";
let sneakerCompanys = "sneakers Company";
sneakerCompany.innerHTML = "Sneakers Company";
// cartInfo = input.value;
cartAmount = 20000;
cartTotal = 0;
let count = 0;
const image = document.createElement("img");
image.src = "";

function letsGo(event) {
  event.preventDefault();
  const currentValue = Number(input.value) || 0;
  input.value = currentValue + 1;
}
function goLow(event) {
  event.preventDefault();
  if (input.value > 1) {
    const currentValue = Number(input.value) || 0;
    input.value = currentValue - 1;
  } else {
    input.value = 0;
  }
}
function cart() {
  // cartInfo = input.value;
  let firstNumber = parseInt(cartAmount.innerHTML);
  let secondNumber = parseInt(cartInfo.innerText);
  let sum = firstNumber * secondNumber;
  cartTotal.innerText = sum;
  // count = 0;
  input.value = 0 ;
}
function appende() {
  // cartInfo = input.value;
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      `${sneakerCompanys} ${heroText.innerHTML} ,${cartAmount} x ${cartInfo} = ${cartTotal}`
    )
  );

  userList.appendChild(li);

  // image.src = "";
  sneakerCompanys.innerHTML = "";
  cartAmount.innerHTML = "";
  cartInfo.innerText = "";
  cartTotal.innerText = "";
}

thumbimgOne.addEventListener("click", function oneImage(one) {
  one.preventDefault();
  let imgOne = document.querySelector(".image-one");
  imgOne.style.display = "block";
  let imgtwo = document.querySelector(".image-two");
  imgtwo.style.display = "none";
  let imgThree = document.querySelector(".image-three");
  imgThree.style.display = "none";
  let imgFour = document.querySelector(".image-four");
  imgFour.style.display = "none";
  sneakerCompanys = "Sneakers Company";
  sneakerCompany.innerHTML = "Sneakers Company";
  cartNums.style.display = "block";
  priceStack.innerHTML = "$125.00";
  cartAmount = 15000;
  cartInfo = 2;
  // cartTotal = sum;
  if (imgOne.style.display === "block") {
    count++;
    cartNum.innerHTML = count;
    alert("an item added");
    appende();
    // cart();
    // const image = document.createElement("img");
    // img.setAttribute('src',"images/image-product-1-thumbnail.jpg");
    // document.body.appendChild(image);
  } else {
    li.classList.remove("removal");
    count--;
    cartNum.innerHTML = count;
    // count--;
    // cartNum.innerHTML = count;
  }
});

function twoImage(two) {
  two.preventDefault();
  let imgOne = document.querySelector(".image-one");
  imgOne.style.display = "none";
  let imgtwo = document.querySelector(".image-two");
  imgtwo.style.display = "block";
  let imgThree = document.querySelector(".image-three");
  imgThree.style.display = "none";
  let imgFour = document.querySelector(".image-four");
  imgFour.style.display = "none";
  sneakerCompanys = "Jordan Company";
  sneakerCompany.innerHTML = "Jordan Company";
  sneakerCompany.style.color = " dark blue";
  priceStack.innerHTML = "$128.00";
  cartAmount = 128000;
  cartNums.style.display = "block";
  cartInfo.innerHTML = input.value;

  if (imgtwo.style.display === "block") {
    count++;
    cartNum.innerHTML = count;
    alert("an item added");
    appende();
    // const li = document.createElement("li");
    // li.appendChild(
  } else {
    // count--;
    // cartNum.innerHTML = count;
  }
}
function threeImage(three) {
  three.preventDefault();
  let imgOne = document.querySelector(".image-one");
  imgOne.style.display = "none";
  let imgtwo = document.querySelector(".image-two");
  imgtwo.style.display = "none";
  let imgThree = document.querySelector(".image-three");
  imgThree.style.display = "block";
  let imgFour = document.querySelector(".image-four");
  imgFour.style.display = "none";
  sneakerCompanys = "Nike Company";
  sneakerCompany.innerHTML = "Nike company";
  sneakerCompany.style.color = "orange";
  priceStack.innerHTML = "$130.00";
  cartAmount = 130000;
  cartNums.style.display = "block";
  if (imgThree.style.display === "block") {
    count++;
    cartNum.innerHTML = count;
    alert("an item added");
    appende();
  } else {
    // count--;
    // cartNum.innerHTML = count;
  }
  cartInfo.innerHTML = input.value;
}
function fourImage(four) {
  four.preventDefault();
  let imgOne = document.querySelector(".image-one");
  imgOne.style.display = "none";
  let imgtwo = document.querySelector(".image-two");
  imgtwo.style.display = "none";
  let imgThree = document.querySelector(".image-three");
  imgThree.style.display = "none";
  let imgFour = document.querySelector(".image-four");
  imgFour.style.display = "block";
  sneakerCompanys = "Adiddas Company";
  sneakerCompany.innerHTML = "Adidas Company";
  priceStack.innerHTML = "$140.00";
  cartAmount = 140000;
  cartNums.style.display = "block";
  if (imgFour.style.display === "block") {
    count++;
    cartNum.innerHTML = count;
    alert("an item added");
    appende();
    // const image = document.createElement("img");
    // image.setAttribute("type", "image")
    // image.setAttribute("src", "./image/image-product-1-thumbnail.jpg");
    // const li = document.createElement("li");
    // li.appendChild(
    //   document.createTextNode(
    //     `${image} ${sneakerCompanys.innerHTML} ${heroText.innerHTML} ,${cartAmount.innerHTML} x ${cartInfo.innerHTML} = ${cartTotal.innerHTML}`
    //   )
    // );

    // userList.appendChild(li);

    // image.src = "";
    // sneakerCompanys.innerHTML = "";
    // cartAmount.innerHTML = "";
    // cartInfo.innerHTML = "";
    // cartTotal.innerHTML = "";
  } else {
    li.classList.remove("Removal");
    // count--;
    // cartNum.innerHTML = count;
  }
}

function overlayOut() {
  let bodyOverlay = document.querySelector("#dark");
  let menuDropdown = document.querySelector(".cart-dropdown");
  menuDropdown.style.display = "none";
  bodyOverlay.style.display = "none";
}
function cartDropdown() {
  let bodyOverlay = document.querySelector("#dark");
  let menuDropdown = document.querySelector(".cart-dropdown");
  menuDropdown.style.display = "block";
  bodyOverlay.style.display = "block";

  if (cartNum.innerText === "0" || "") {
    cartItems.innerText = "your cart is empty.";
    cartItems.style.textAlign = "center";
    cartItems.style.display = "flex";
    cartItems.style.justifyContent = "center";
    cartItems.style.alignItems = "center";
    cartItems.style.height = "150px";
  } else {
    cartItems.style.display = "none";
    // cartFeed.style.display = "block";
    // const image = document.createElement('img');
    // image.src = '';
    // const li = document.createElement('li');
    // li.appendChild(document.createTextNode(`${image} ${sneakerCompany.innerHTML} ${heroText.innerHTML} ,${cartAmount.innerHTML} x ${cartInfo.innerHTML} = ${cartTotal.innerHTML}`));

    // userList.appendChild(li);

    // thumbimgOne = '';
    // sneakerCompany.innerHTML = '';
    // cartAmount.innerHTML = '';
    // cartInfo.innerHTML = '';
    // cartTotal.innerHTML = '';
  }
}
function delFunction() {
  cartFeed.style.display = "none";
  cartNum.innerHTML = 0;
  cartNums.style.display = "none";
}

// let dropDownItems = {
//   sneakerCompany: "Sneaker Company",
//   priceStack: "$125.00",
//   cartAmount: 15000,
//   cartInfo: input.value,
// };
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  // n.preventDefault();
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// }

// nav
// let menuButon =  document.querySelector(".menu-button").addEventListener('click', openNav);
function openNav() {
  document.querySelector(".menu-dropdown").style.width = "80%";
}
function closeNav() {
  document.querySelector(".menu-dropdown").style.width = "0%";
}
let mobileButtonA = document.querySelector("#mobile-buttonA").addEventListener('click', goLows);
let mobileButtonB = document.querySelector("#mobile-buttonB").addEventListener('click', letsGos);
let input2 = document.querySelector("#inputs");
function letsGos(events) {
  events.preventDefault();
  const currentValue = Number(input2.value) || 0;
  input2.value = currentValue + 1;
}
function goLows(events) {
  events.preventDefault();
  if (input2.value > 1) {
    const currentValue = Number(input2.value) || 0;
    input2.value = currentValue - 1;
  } else {
    input2.value = 0;
  }
}


