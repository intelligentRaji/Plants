let button = document.querySelector(".header__burger");
let header = document.querySelector(".header");
let headerList = document.querySelector(".header__list");
let headerItem = document.querySelectorAll(".header__item");
let wrapper = document.querySelector(".wrapper");
let overlay = document.querySelector(".overlay");
const black = document.querySelector(".black");

function getPadding() {
  if (button.classList.contains("active")) {
    header.style.padding = "37px 0 36px 0";
  } else {
    header.style.padding = "32px 0 32px 0";
  }
}

function overlayOpacity() {
  if (button.classList.contains("active")) {
    overlay.style.opacity = "1";
    black.style.width = "100%";
  } else {
    overlay.style.opacity = "0";
    black.style.width = "0";
  }
}

button.addEventListener("click", () => {
  button.classList.toggle("active");
  getPadding();
  overlayOpacity();
});
if (window.innerWidth <= 660) {
  headerItem.forEach((element) => {
    element.addEventListener("click", () => {
      button.classList.toggle("active");
      getPadding();
      overlayOpacity();
    });
  });
}

document.querySelector(".overlay").onclick = function (e) {
  if (
    !e.target.classList.contains("header__navigation") &&
    !e.target.classList.contains("header__item") &&
    !e.target.classList.contains("header__list") &&
    !e.target.classList.contains("header-burger__line") &&
    !e.target.classList.contains("header__burger")
  ) {
    button.classList.remove("active");
    getPadding();
    overlayOpacity();
  }
};

const serviceButtons = document.querySelectorAll(".service-menu__button");
const activeButtons = [];
const serviceItem = document.querySelectorAll(".service-products__flex");
const gardens = document.getElementById("gardens");
const planting = document.getElementById("planting");
const lawn = document.getElementById("lawn");

serviceButtons.forEach((e) => {
  e.addEventListener("click", () => {
    if (!e.classList.contains("active")) {
      activeButtons.push(e);
      getActive();
      getArrlength();
      getUnfocus();
      getFocus();
      removeFocus();
    } else {
      removeActive(e);
      removeFocus();
      removeUnfocus();
    }
  });
});

function getActive() {
  activeButtons.forEach((e) => {
    e.classList.add("active");
  });
}

function getArrlength() {
  if (activeButtons.length > 2) {
    activeButtons[0].classList.remove("active");
    activeButtons.shift();
  }
}

function removeActive(n) {
  for (let i = 0; i < activeButtons.length; i++) {
    let val = activeButtons[i];
    if (val === n) {
      activeButtons.splice(i, 1);
      val.classList.remove("active");
    }
  }
}

function getUnfocus() {
  serviceItem.forEach((e) => {
    e.classList.add("unfocus");
  });
}

function getFocus() {
  const serviceTitles = document.querySelectorAll(".service-products__title");
  for (let item of serviceTitles) {
    if (
      item.textContent === "Garden care" &&
      gardens.classList.contains("active")
    ) {
      item.parentElement.classList.add("focus");
    } else if (
      item.textContent === "Planting" &&
      planting.classList.contains("active")
    ) {
      item.parentElement.classList.add("focus");
    } else if (
      item.textContent === "Lawn care" &&
      lawn.classList.contains("active")
    ) {
      item.parentElement.classList.add("focus");
    }
  }
}

function removeFocus() {
  const serviceTitles = document.querySelectorAll(".service-products__title");
  for (let item of serviceTitles) {
    if (
      item.textContent === "Garden care" &&
      !gardens.classList.contains("active")
    ) {
      item.parentElement.classList.remove("focus");
    } else if (
      item.textContent === "Planting" &&
      !planting.classList.contains("active")
    ) {
      item.parentElement.classList.remove("focus");
    } else if (
      item.textContent === "Lawn care" &&
      !lawn.classList.contains("active")
    ) {
      item.parentElement.classList.remove("focus");
    }
  }
}

function removeUnfocus() {
  if (activeButtons.length === 0) {
    serviceItem.forEach((e) => {
      e.classList.remove("unfocus");
    });
  }
}

const packets = document.querySelectorAll(".prices__packet");
const pricesButton = document.querySelector(".prices__button");
const pricesButtons = document.querySelectorAll(".prices__button");
const pricesPacket = document.querySelector(".prices__packet");
const horizontal = document.querySelector(".prices__horizontal");
const activePackets = [];

packets.forEach((e) => {
  e.style.height = pricesButton.clientHeight + "px";
});

pricesButtons.forEach((e) => {
  e.addEventListener("click", () => {
    if (!e.parentElement.classList.contains("active")) {
      toActivePackets(e);
      e.parentElement.classList.add("active");
      e.parentElement.style.height = pricesPacket.scrollHeight + "px";
      activePacketsLengthCheck();
    } else {
      e.parentElement.classList.remove("active");
      e.parentElement.style.height = pricesButton.clientHeight + "px";
      fromActivePackets(e);
    }
  });
});

function toActivePackets(n) {
  if (!n.parentElement.classList.contains("active")) {
    activePackets.push(n.parentElement);
  }
}

function fromActivePackets(n) {
  for (let i = 0; i < activePackets.length; i++) {
    let val = activePackets[i];
    if (val === n.parentElement) {
      activePackets.splice(i, 1);
      n.parentElement.classList.remove("active");
    }
  }
}

function activePacketsLengthCheck() {
  if (activePackets.length > 1) {
    activePackets[0].style.height = pricesButton.clientHeight + "px";
    activePackets[0].classList.remove("active");
    activePackets.shift();
  }
}

const contactSelect = document.querySelector(".contacts__select");
const cities = document.querySelector(".contacts__cities");
const form = document.querySelector(".contacts__form");
const contactsImg = document.querySelector(".contacts__img");
const buttons = document.querySelectorAll(".contacts-cities__button");
const contactsSelectText = document.querySelector(".contacts-select__text");
const activeCities = [];
const card = document.querySelector(".contacts__card");

cities.style.top = contactSelect.clientHeight + "px";

contactSelect.addEventListener("click", () => {
  if (!contactSelect.classList.contains("active")) {
    if (card.classList.contains("active")) {
      card.style.opacity = 0;
    }
    contactSelect.classList.add("active");
    cities.style.height = cities.scrollHeight + "px";
    opacityImage();
  } else {
    contactSelect.classList.remove("active");
    cities.style.height = "0px";
    card.style.opacity = 1;
    opacityImage();
  }
});

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    if (!e.parentElement.classList.contains("active")) {
      e.parentElement.classList.add("active");
      activeCities.push(e.parentElement);
      contactsSelectText.textContent = e.textContent;
      contactSelect.classList.remove("active");
      contactSelect.classList.add("selected");
      activeCitiesLengthCheck();
      cities.style.height = "0px";
      card.classList.add("active");
      form.classList.add("active");
      card.style.opacity = 1;
      getMatch();
      selectedView();
    } else {
      e.parentElement.classList.remove("active");
      activeCities.shift(e.parentElement);
      contactsSelectText.textContent = "City";
      fromActiveCities(e);
      cities.style.height = "0px";
      contactSelect.classList.remove("selected");
      contactSelect.classList.remove("active");
      card.classList.remove("active");
      form.classList.remove("active");
      selectedView();
      opacityImage();
    }
  });
});

function fromActiveCities(n) {
  for (let i = 0; i < activeCities.length; i++) {
    let val = activeCities[i];
    if (val === n.parentElement) {
      activeCities.splice(i, 1);
      n.parentElement.classList.remove("active");
    }
  }
}

function activeCitiesLengthCheck() {
  if (activeCities.length > 1) {
    activeCities[0].classList.remove("active");
    activeCities.shift();
  }
}

const towns = {
  1: "Canandaigua, NY",
  2: "New York City",
  3: "Yonkers, NY",
  4: "Sherrill, NY",
};

const phones = {
  1: "+1 585 393 0001",
  2: "+1 212 456 0002",
  3: "+1 914 678 0003",
  4: "+1 315 908 0004",
};

const adreses = {
  1: "151 Charlotte Street",
  2: "9 East 91st Street",
  3: "511 Warburton Ave",
  4: "14 WEST Noyes BLVD",
};

const contactsCities = document.querySelectorAll(".contacts__city");
const cardText = document.querySelectorAll(".contacts-card__text");
const contactsTitle = document.querySelector(".contacts__title");
const cardButton = document.querySelector(".contacts-card__button");

function getMatch() {
  let val = "";
  for (let i = 0; i < contactsCities.length; i++) {
    let item = contactsCities[i];
    if (item.classList.contains("active")) {
      val += i + 1;
    }
  }
  cardText[0].textContent = towns[val];
  cardText[1].textContent = phones[val];
  cardText[2].textContent = adreses[val];
}

function opacityImage() {
  if (window.innerWidth <= 750) {
    if (contactSelect.classList.contains("active")) {
      contactsImg.style.opacity = 0;
    } else {
      contactsImg.style.opacity = 1;
      contactsImg.style.display = "block";
    }
  }
}

function selectedView() {
  if (window.innerWidth <= 450) {
    if (contactSelect.classList.contains("selected")) {
      contactsImg.style.display = "none";
      contactsTitle.style.marginBottom = "42px";
    } else {
      contactsImg.style.display = "block";
      contactsTitle.style.marginBottom = "81px";
    }
  }
}

cardButton.addEventListener("click", () => {
  val = cardText[1].textContent.split(" ").join("");
  window.open(`tel:${val}`, "_self");
});

console.log(
  `При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service 50/50 \nПри выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной 20/20 \nПользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. 20/20 \nАнимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur 10/10\n\nAccordion в секции prices реализация 3-х выпадающих списков об услугах и ценах 50/50 \nПри нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. 25/25 \nПользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. 25/25 \n\nВ разделе contacts реализован select с выбором городов 25/25 \nВ зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе 15/15 \nПри нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу 10/10`
);
