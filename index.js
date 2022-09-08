function iphoneGreen(){
    var img = document.getElementById("img");
    img.src = 'images/iphone_green.jpg'
}

function iphoneSilver(){
    var img = document.getElementById("img");
    img.src = 'images/iphone_silver.jpg'
}

function iphoneGolden(){
    var img = document.getElementById("img");
    img.src = 'images/iphone_golden.jpg'
}

function iphoneGrafite(){
    var img = document.getElementById("img");
    img.src = 'images/iphone_grafite.jpg'
}

function iphoneBlue(){
    var img = document.getElementById("img");
    img.src = 'images/iphone_blue.jpg'
}

const buttons = document.querySelectorAll("#model-cores li");
const image = document.querySelector("#img");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    const button = e.target;

    const id = button.getAttribute("id");

    button.querySelector(".verde").classList.add("selected");

    image.classList.toggle("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});