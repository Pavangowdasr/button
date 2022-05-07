function change(){
  let x = document.querySelector(".btn")
  if (x.innerHTML === "DARK") {
    x.innerHTML = "LIGHT"
  }else{
    x.innerHTML = "DARK"
  }
  let y = document.body
  y.classList.toggle("lights")
}
