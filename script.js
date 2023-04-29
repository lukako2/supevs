$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() >= 850) {
      $(".ul-large").removeClass("show-menu");
      $(".nav-a").css("display", "block");
      $(".logo").removeClass("bigger");
      $(".nav-a").removeClass("d-block");
    } else {
      $(".show-menu").show();
      $(".nav-a").css("display", "none");
    }
  });

  $(".menu-btn").click(function (e) {
    $(".ul-large").toggleClass("show-menu anim");
    $(".logo").toggleClass("bigger");
    $(".nav-a").toggleClass("d-block");
  });
});

let interval;

const element = document.querySelector(".scramble");
const originalText = element.innerText;

const randomInt = (max) => Math.floor(Math.random() * max);
const randomFromArray = (array) => array[randomInt(array.length)];

const scrambleText = (text) => {
  const chars = "*><)c.-:;!".split("");
  return text
    .split("")
    .map((x) => (randomInt(3) > 1 ? randomFromArray(chars) : x))
    .join("");
};

element.addEventListener("mouseover", () => {
  interval = setInterval(
    () => (element.innerText = scrambleText(originalText)),
    100
  );
});

element.addEventListener("mouseout", () => {
  clearInterval(interval);
  element.innerText = originalText;
});

function Algorithmic() {
  $.ajax({
    type: "get",
    url: "./algorithmic.html",
    success: function (response) {
      $("main").html(response);
    },
  });
}

function main() {
  $.ajax({
    type: "get",
    url: "./main.html",
    success: function (response) {
      $("main").html(response);
    },
  });
}

function brain() {
  $.ajax({
    type: "get",
    url: "./brain.html",
    success: function (response) {
      $("main").html(response);
    },
  });
}

$(".main").click(function (e) {
  e.preventDefault();
  $(".main").addClass("active");
  $(".algorithmic").removeClass("active");
  $(".brain").removeClass("active");
});

$(".algorithmic").click(function (e) {
  e.preventDefault();
  $(".algorithmic").addClass("active");
  $(".main").removeClass("active");
  $(".brain").removeClass("active");
});

$(".brain").click(function (e) {
  e.preventDefault();
  $(".brain").addClass("active");
  $(".main").removeClass("active");
  $(".algorithmic").removeClass("active");
});

function audioo() {
    $(".audio1").html(`
  <audio autoplay controls> <source src="./audio/Aphex Twin - Xtal.mp3" type="audio/mp3"><p>not available :)</p></audio>
  <span style="cursor:pointer" onclick="removeA()">(remove audio)</span>
  `);
}

function removeA(){
  $('.audio1').html('');
}
