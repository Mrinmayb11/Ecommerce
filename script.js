const Bars = document.getElementById("Bars");

Bars.addEventListener("click",()=>{
    const SmallNav = document.getElementById("Nav-3");
    SmallNav.classList.toggle("add");
})

// New Arrivials Section

// const Imgs = document.getElementsByClassName("feature-img-wrapper");
// Array.from(Imgs).forEach(img =>{
//     img.addEventListener('mouseover',  ()=>{
//         const btns = img.lastElementChild.children;
//         for (let i = 0; i < btns.length; i++) {
//             btns[i].style.display = "flex";
//           }
//     })

// })

if (window.innerWidth <= 900) {
    const button = Array.from(document.querySelectorAll('.black-overlay'));
  
    button.forEach(btn => {
      btn.addEventListener('touchstart', (btnp) => {
        const children = btnp.target.children[0];
        if (children.style.display === "none") {
          children.style.display = "flex";
          console.log("hello, it's working");
        } else {
          children.style.display = "none";
        }
      });
    });
  }
  
  
    

  


