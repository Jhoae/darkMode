const toggleDarkBtn = document.querySelector(".toggleSwitch");
const icons = document.querySelectorAll("i");
const body = document.querySelector("body");
const navbarTop = document.querySelector(".navbar__top");
const navbarBottom = document.querySelector(".navbar__bottom");

let isDark = "black";

/* 

이런 방식은 매우 안좋은듯. 
새로운 요소가 추가될때마다 일일이 작업해야함.
REACT에서 styled component를 이용하는 방식을 추천하지만
이 파일은 js연습용이므로 번거롭지만 아래와 같이 적음.
혹시 다른 방법이 있을지 생각해보기.

*/

function onToggleDarkBtn() {
  toggleDarkBtn.classList.toggle("active");

  if (isDark === "black") {
    // 지금은 밝은 화면
    isDark = "white";

    icons.forEach((cur) => (cur.style.color = "black"));
    body.style.backgroundColor = "white";

    navbarTop.style.color = "black";
    navbarTop.style.backgroundColor = "white";
    navbarTop.style.borderBottom = "1px solid black";

    navbarBottom.style.color = "black";
    navbarBottom.style.backgroundColor = "white";
    navbarBottom.style.borderTop = "1px solid black";
    /* */
  } else if (isDark === "white") {
    // 지금은 어두운화면
    isDark = "black";

    icons.forEach((cur) => (cur.style.color = "white"));
    body.style.backgroundColor = "black";

    navbarTop.style.color = "white";
    navbarTop.style.backgroundColor = "black";
    navbarTop.style.borderBottom = "1px solid white";

    navbarBottom.style.color = "white";
    navbarBottom.style.backgroundColor = "black";
    navbarBottom.style.borderTop = "1px solid white";
  }
}

toggleDarkBtn.addEventListener("click", onToggleDarkBtn);
