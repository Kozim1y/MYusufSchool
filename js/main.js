let elHeaderList = document.querySelector(".header-list");
let elBurgerBtn = document.querySelector(".burger");

elBurgerBtn.addEventListener("click", function(){
  elBurgerBtn.classList.toggle("burger--active")
  elHeaderList.classList.toggle("header-list--active")
})

let elCounts = document.querySelectorAll(".our-school-item-count");
let interval = 5000;

elCounts.forEach(count => {
  let start = 0;
  let end = parseInt(count.getAttribute("data-val"));
  let duration = Math.floor(interval / end)
  let counter = setInterval(function() {
    start+=1;
    count.textContent = start;
    if (start == end) {
      clearInterval(counter)
    }
  }, duration)
})
