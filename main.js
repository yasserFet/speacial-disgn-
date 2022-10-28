// if there is colors in localestorage
// localStorage.clear();
let background = true;
if (localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
  );
  document.querySelectorAll(".landing .colors li").forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color == localStorage.getItem("color")) {
      li.classList.add("active");
    }
  });
}
if (localStorage.getItem("background") !== null) {
  document.querySelectorAll(".landing .info .random button").forEach((e) => {
    e.classList.remove("active");
  });
  if (localStorage.getItem("background") == "true") {
    background = true;
    document.querySelector(".random .yes").classList.add("active");
  } else {
    background = false;
    document.querySelector(".random .no").classList.add("active");
  }
}
if (localStorage.getItem("bullets")) {
  document.querySelectorAll(".landing .bullet")[0].style.display =
    localStorage.getItem("bullets");
  if (localStorage.getItem("bullets") == "none") {
    document.querySelectorAll(".info .Bullets button").forEach((E) => {
      E.classList.remove("active");
    });
    document.querySelectorAll(".info .Bullets .no")[0].classList.add("active");
  }
}

let landing = document.querySelector(".landing");
let xIcon = document.querySelectorAll(".landing .menu i");
let menu = document.querySelectorAll(".landing .menu");
let menuAs = document.querySelectorAll(".landing .menu li a");
  let u = true;
let menuIcon = document.querySelectorAll(".landing nav .menu-icon");
// responsive
menuIcon[0].addEventListener("click",()=> {
  menu[0].classList.toggle("toggele");
  menuIcon[0].classList.toggle("clicked");
})

// change backgroun img
let counter;
function changBg() {
  if (background == true) {
    let srcs = [
      "imgs/01.jpg",
      "imgs/02.jpg",
      "imgs/03.jpg",
      "imgs/04.jpg",
      "imgs/05.jpg",
      "imgs/06.jpg",
    ];
    counter = setInterval(() => {
      let imgSrc = srcs[Math.floor(Math.random() * srcs.length)];
      landing.style.backgroundImage = `url(${imgSrc})`;
    }, 5000);
  }
}
changBg();
// changing background option
let bgYesBtn = document.querySelectorAll(".landing .info .random .yes");
let bgNoBtn = document.querySelectorAll(".landing .info .random .no");
let bgBtns = document.querySelectorAll(".landing .info .random button");
// yes
bgBtns.forEach((e) => {
  e.addEventListener("click", (a) => {
    a.target.parentElement.querySelectorAll(".active").forEach((btn) => {
      btn.classList.remove("active");
    });
    e.classList.add("active");
    if (e.dataset.bol == "no") {
      background = false;
      clearInterval(counter);
      localStorage.setItem("background", false);
    } else {
      background = true;
      localStorage.setItem("background", true);
      changBg();
    }
  });
});
// setting
let settingIcon = document.querySelectorAll(".setting-icon .fa-gear");
let setting = document.querySelector(".setting");
let a;
settingIcon.forEach((i) => {
  i.style.animationPlayState = "paused";
});
settingIcon.forEach((e) => {
  e.addEventListener("click", function () {
    if (a == 1) {
      setting.style.left = "-200px";
      settingIcon.forEach((i) => {
        i.style.animationPlayState = "paused";
      });
      return (a = 0);
    } else {
      setting.style.left = "0";
      settingIcon.forEach((i) => {
        i.style.animationPlayState = "running";
      });
      return (a = 1);
    }
  });
});
//color changing
let liColors = document.querySelectorAll(".landing .colors li");
let root = document.documentElement;

liColors.forEach((li) => {
  li.addEventListener("click", () => {
    root.style.setProperty("--main-color", li.dataset.color);
    liColors.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    window.localStorage.setItem("color", li.dataset.color);
  });
});
//Bullets hiding and apearing
let Bullets = document.querySelectorAll(".landing .bullet");
let BulletsBtn = document.querySelectorAll(".info .Bullets button");
BulletsBtn.forEach((e) => {
  e.addEventListener("click", () => {
    BulletsBtn.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    if (e.dataset.bol == "yes") {
      Bullets[0].style.display = "block";
      localStorage.setItem("bullets", "block");
    } else {
      Bullets[0].style.display = "none";
      localStorage.setItem("bullets", "none");
    }
  });
});
// rest options
let restBtn = document.querySelectorAll(".info > input");
restBtn[0].addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
// progress skills
let skillsSec = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(
  ".our-skills .progerss li div span"
);
let stated = true;
window.addEventListener("scroll", () => {
  if (window.scrollY > skillsSec.offsetTop) {
    if (stated) {
      progressSpans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
    stated = false;
  }
});

let bigImgs = document.querySelectorAll(".Gallery .imgParent .image img");
let imgCon = document.querySelectorAll(".Gallery .imgCon");
bigImgs.forEach((img) => {
  img.addEventListener("click", () => {
    imgCon[0].style.width = "90%";
    imgCon[0].style.display = "block";
    imgCon[0].style.position = "fixed";
    document.querySelector("#overlay").style.zIndex = "1";
    document.querySelector("#overlay").style.height = "700%";
    document.querySelectorAll(".Gallery .imgCon img")[0].src = img.src;
  });
});
let XIconImg = document.querySelectorAll(".Gallery .imgCon span");
XIconImg[0].addEventListener("click", () => {
  imgCon[0].style.width = "0";
  imgCon[0].style.display = "none";
  document.querySelector("#overlay").style.zIndex = "-1";
});
// bub menu
let bubLis = document.querySelectorAll(".Gallery .bub li");
let bubImgs = document.querySelectorAll(".Gallery .imgParent .image");
let imgParent = document.querySelectorAll(".Gallery .imgParent");
bubLis.forEach((li) => {
  li.addEventListener("click", (i) => {
    //append and hide imgs
    bubImgs.forEach((img) => {
      img.style.display = "none";
      if (li.dataset.set == img.dataset.set) {
        img.style.display = "block";
          imgParent[0].style.gridTemplateColumns =
            "repeat(auto-fill, minmax(400px,1fr))";
      }
      if (li.dataset.set == "all"){
        bubImgs.forEach((img) => {
          img.style.display = "block";
          imgParent[0].style.gridTemplateColumns =
            "repeat(auto-fill, minmax(250px,1fr))";
        })};
      // modifey classes
      bubLis.forEach((e) => {
        e.classList.remove("active");
      });
      i.target.classList.add("active");
    });
  });
});
// auto type effect
let autoTypeText = " a creative agency";
let autoTypeEle = document.querySelectorAll(".landing .info h3 span");
let i = 0;
function autoType() {
  if (i < autoTypeText.length) {
    autoTypeEle[0].innerHTML += autoTypeText.charAt(i);
    i++;
  }
  setTimeout(autoType, 100);
}
autoType();
