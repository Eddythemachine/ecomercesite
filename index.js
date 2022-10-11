// SELECTING ITEMS

let btnActive = document.querySelector(".active");

// SELECTING NAVBAR ITEMS
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closeNavBar = document.querySelector(".close");

// SELECTING PRODUCT DETAILS GROUP

const allImg = document.querySelectorAll(".small-img-group");

// SELECTING ALL IMG IN SHOP

const allpro = document.querySelector(".pro-container");
const cart = document.querySelector(".fa-shopping-bag")


// SELECTING SECTION FOR REVEALING
const allSections = document.querySelectorAll(".sec");



// CHECKING IF NAVBAR IS OPEN OR CLOSE
// if(bar){
//    bar.addEventListener("click", function(e) {
//       nav.classList.add("active");
//       console.log(e.target.id)
//       console.log(e.target.id !== "bar")
     
//    })
// }

closeNavBar.addEventListener("click", (e) => {
   nav.classList.remove("active")
});

   document.querySelector("body").addEventListener("click", (e) => {
      if(e.target.id == "bar" ){
         nav.classList.add("active");
      }else if
      (nav.classList.contains("active") && e.target.id !== "navbar"){
         nav.classList.remove("active")
      }
   })



// ADDING EVENT LISTENERS
// btnActive.addEventListener("click", (e) => {
//    e.preventDefault()
//    const col = document.querySelector(".col");

//    col.scrollIntoView({
//       behavior: "smooth"
//    })
// });


// CHANGING IMAGE

allImg.forEach((mov) => {
   mov.addEventListener("click", function(e) {
      if(e.target.className == "small-img"){
         const imgAtt = e.target.getAttribute("src");
         document.getElementById("mainImg").src = imgAtt
      }
   })
});


allpro?.addEventListener("click", (e) => {
   e.preventDefault()
   console.log(e.target.className)
   if(e.target.className != "fa fa-shopping-cart cart"){
      // console.log("Faouzia")
      window.location.href = "sproduct.html"
   }
});

// USING CART ICON IN MOBILE SCREEN TO GO TO CART PAGE

cart.addEventListener("click", (e) => {
   e.preventDefault()
   console.log(e.target)
   window.location.href = "cart.html"
});

// REAVELING SECTION BY SCROLL

function sectionCallBack(entries, observer){
   entries.forEach((entry) => {
      entry.target.classList.remove("hide-section");
      if(!entry.interseting) return;
      intersectSections.unobserve(entry.target)
   })
};

const sectionOptions = {
   root:null,
   threshold:0.5,
};

const intersectSections = new IntersectionObserver(sectionCallBack, sectionOptions);
allSections.forEach((mov) => {
   mov.classList.add("hide-section");
   intersectSections.observe(mov);
})
