// display project buttons one at a time

function displayElement1() {
    document.getElementById("pbox1").style.display = "flex";
    document.getElementById("pbox2").style.display = "none"; 
    document.getElementById("pbox3").style.display = "none";
}

function displayElement2() {
    document.getElementById("pbox2").style.display = "flex";
    document.getElementById("pbox1").style.display = "none";  
    document.getElementById("pbox3").style.display = "none";
}

function displayElement3() {
    document.getElementById("pbox3").style.display = "flex";
    document.getElementById("pbox1").style.display = "none";
    document.getElementById("pbox2").style.display = "none";
}

// function showElements() {
//     if (window.matchMedia("(max-width: 600px)").matches) {
//          document.getElementById("pbox1").style.display = "flex";
//          document.getElementById("pbox2").style.display = "flex";
//          document.getElementById("pbox3").style.display = "flex";
//      } else {
//          document.getElementById("pbox2").style.display = "none";
//          document.getElementById("pbox3").style.display = "none";
//     }
// }

// function displayElement1() {
//     if (window.matchMedia("(min-width: 600px)").matches) {
//         document.getElementById("pbox1").style.display = "flex";
//         document.getElementById("pbox2").style.display = "none";
//         document.getElementById("pbox3").style.display = "none";
//     } else {
//         document.getElementById("pbox2").style.display = "flex";
//         document.getElementById("pbox3").style.display = "flex";
//     }
// }

// function displayElement2() {
//     if (window.matchMedia("(min-width: 600px)").matches) {
//         document.getElementById("pbox1").style.display = "none";
//         document.getElementById("pbox2").style.display = "flex";
//         document.getElementById("pbox3").style.display = "none";
//     } else {
//         document.getElementById("pbox2").style.display = "flex";
//         document.getElementById("pbox3").style.display = "flex";
//     }
// }

// function displayElement3() {
//     if (window.matchMedia("(min-width: 600px)").matches) {
//         document.getElementById("pbox1").style.display = "none";
//         document.getElementById("pbox2").style.display = "none";
//         document.getElementById("pbox3").style.display = "flex";
//     } else {
//         document.getElementById("pbox2").style.display = "flex";
//         document.getElementById("pbox3").style.display = "flex";
//     }
// }


//  function myFunction(x) {
//      if (x.matches) {
//          function displayElement1() {
//              document.getElementById("pbox1").style.display = "flex";
//              document.getElementById("pbox2").style.display = "none"; 
//              document.getElementById("pbox3").style.display = "none";
//          }
        
//          function displayElement2() {
//              document.getElementById("pbox2").style.display = "flex";
//              document.getElementById("pbox1").style.display = "none";  
//              document.getElementById("pbox3").style.display = "none";
//          }
        
//          function displayElement3() {
//              document.getElementById("pbox3").style.display = "flex";
//              document.getElementById("pbox1").style.display = "none";
//              document.getElementById("pbox2").style.display = "none";
//          }
//      } else {
//          document.getElementById("pbox1").style.display = "flex";
//          document.getElementById("pbox2").style.display = "flex";
//          document.getElementById("pbox3").style.display = "flex";
//      }

//  }

// var x = window.matchMedia("(min-width: 600px)")
// myFunction(x) // Call listener function at run time
// x.addEventListener(myFunction) // Attach listener function on state changes

// nav bar buttons

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
    