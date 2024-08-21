

const myimage = document.querySelector("img");    
myimage.onclick = ()=>{
    const imgSrc = myimage.getAttribute("src");
    if (imgSrc ==="images/ss.jpg")
    {
        myimage.setAttribute("src","images/image2.jpg");
    }else
    {
        myimage.setAttribute("src","images/ss.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `life is cool, ${storedName}`;
  }

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hacking u is cool, ${myName}`;
      }
  }
  myButton.onclick = () => {
    setUserName();
  };