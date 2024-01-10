function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")


  const img = document.querySelector("#profile img")

  
  if (html.classList.contains("light")){
    
  img.setAttribute("src","assets/assets/assets/avatar-light-removebg-preview.png")
  } else {
    img.setAttribute("src","assets/assets/assets/avatar-light__2_-removebg-preview.png")
  }
      





































  }

