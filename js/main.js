// ==========================
AOS.init();
// ==========================

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

// ==========================
const teamMembers = [
  {
    name: "Jabbarova Feruza Aliyevna",
    role: "Ona tili va adabiyot fani o'qituvchisi",
    university: "Andijon davlat universiteti filologiya fakulteti 2010-yil",
    experience: "10 yil Pedagogik tajriba",
    scientificWorks: "ta Ilmiy ishlar va maqolalar soni",
    certificates: "ta Mukofotlar va sertifikatlar",
    telNumber: "+998 93 411 76 31",
    gmail:"asilbekovafarziyaxon@gmail.com",
    photo: "../images/xodim1.jpg",
  },
  {
    name: "Tursunova Umida Mukumjonovna",
    role: "Ona tili va adabiyot fani o'qituvchisi",
    university: "...",
    experience: "20 yil Pedagogik tajriba",
    scientificWorks: "8 ta Ilmiy ishlar va maqolalar soni",
    certificates: "3 ta Mukofotlar va sertifikatlar",
    telNumber: "...",
    gmail:"tursunovau849@gmail.com",
    photo: "../images/xodim2.jpg",
  },
  {
    name: "Urmonova Dilfuza Mamasaliyevna",
    role: "Ona tili va adabiyot fani o'qituvchisi",
    university: "Andijon davlat universiteti 1996-yil",
    experience: "29 yil Pedagogik tajriba",
    scientificWorks: "30 ta Ilmiy ishlar va maqolalar soni",
    certificates: "2 ta Mukofotlar va sertifikatlar",
    telNumber: "+998 97 990 74 09",
    gmail:"urmanovadilfuza74@gmail.com",
    photo: "../images/xodim3.jpg",
  },
  {
    name: "Sattarov Abdumajit Qo'chkarovich",
    role: "Ta'lim",
    university: "Andijon davlat tillar pedogogika instituti(sirtqi) 1997-yil",
    experience: "30 yil Pedagogik tajriba",
    scientificWorks: "ta Ilmiy ishlar va maqolalar soni",
    certificates: "8 ta Mukofotlar va sertifikatlar",
    telNumber: "+998 93 426 73 51",
    gmail:"abdulmajidsattarov@gmail.com",
    photo: "../images/xodim4.jpg",
  },
];

let currentIndex = 0;

function updateSlider() {
  document.getElementById("main-photo").src = teamMembers[currentIndex].photo;
  document.getElementById("member-name").textContent = teamMembers[currentIndex].name;
  document.getElementById("member-role").textContent = teamMembers[currentIndex].role;
  document.getElementById("member-university").textContent = teamMembers[currentIndex].university;
  document.getElementById("member-experience").textContent = teamMembers[currentIndex].experience;
  document.getElementById("member-scientific-works").textContent = teamMembers[currentIndex].scientificWorks;
  document.getElementById("member-certificates").textContent = teamMembers[currentIndex].certificates;
  document.getElementById("member-tel").innerHTML = `Telefon raqami: <br> <span>${teamMembers[currentIndex].telNumber}</span>`
  document.getElementById("member-gmail").innerHTML = `Elektron pochta manzili: <br> <span>${teamMembers[currentIndex].gmail}</span>`
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % teamMembers.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
  updateSlider();
}

function selectMember(index) {
  currentIndex = index;
  updateSlider();
}

function generateThumbnails() {
  const thumbnailsDiv = document.getElementById("thumbnails");
  teamMembers.forEach((member, index) => {
    const img = document.createElement("img");
    img.src = member.photo;
    img.alt = member.name;
    img.onclick = () => selectMember(index);
    thumbnailsDiv.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateSlider();
  generateThumbnails();
});
