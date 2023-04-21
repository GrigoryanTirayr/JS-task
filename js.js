const {log} = console;


var words = ['Present', '3D jewelery modeling', '3D game modeling and visualization','LLC'],
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});


const cardContainer = document.getElementById("card-container");
const loadMoreButton = document.getElementById("load-more");


const cardLimit = 100;
const cardIncrease = 7;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let imglist = ["Images/1.jpg", "Images/2.jpg", "Images/3.jpg", "Images/4.jpg", "Images/5.jpg",
               "Images/6.jpg", "Images/7.jpg", "Images/8.png", "Images/9.png", "Images/10.png",
               "Images/11.png", "Images/12.png", "Images/13.jpg", "Images/14.jpg", "Images/15.png",
                "Images/16.png", "Images/17.png", "Images/18.jpg", "Images/19.png", "Images/20.png",];
let currentPage = 1;

const handleButtonStatus = () => {
  if (pageCount === currentPage) {
    loadMoreButton.classList.add("disabled");
    loadMoreButton.setAttribute("disabled", true);
  }
};

const createCard = (imgSrc) => {
  const card = document.createElement("div");
  const img = document.createElement("img");
  img.src = imgSrc;
  card.className = "card";
  card.appendChild(img);
  cardContainer.appendChild(card);
};

const addCards = (pageIndex) => {
  currentPage = pageIndex;
  const startRange = (pageIndex - 1) * cardIncrease;
  const endRange =
    pageIndex * cardIncrease > cardLimit ? cardLimit : pageIndex * cardIncrease;
  for (let i = startRange; i < endRange; i++) {
    createCard(imglist[i]);
  }
};

window.onload = function () {
  addCards(currentPage);
  loadMoreButton.addEventListener("click", () => {
    addCards(currentPage + 1);
  });
};


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


let links = document.getElementById('menu');

const handleLinkClick = (el) => {
  let targrt = el.target
  const activeClass = 'active';
  const activeLinks = document.getElementsByClassName(activeClass);
  while (activeLinks.length) {
    activeLinks[0].classList.remove(activeClass);
  }
  targrt.classList.add(activeClass);
};

menu.addEventListener('click', handleLinkClick);


function funcBtn() {
  var x = document.getElementById("menu");
  if (x.style.display === "") {
    x.style.display = "none";
  } else {
    x.style.display = "";
  }
}









