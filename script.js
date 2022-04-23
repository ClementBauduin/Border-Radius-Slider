slider = document.querySelector(".slider");
percentage = document.getElementsByTagName("p")[0];
box = document.querySelector(".box");

slider.addEventListener("input", (e) =>{
    percentage.innerText = e.target.value + "%";
    box.style.borderRadius = (e.target.value/2)+"%";
})
