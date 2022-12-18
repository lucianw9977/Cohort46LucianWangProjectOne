function ToggleDropDownMenu () {
  if(document.querySelector(".nav1").style.display === "none"){
    document.querySelector(".nav1").style.display = "flex";
  document.querySelector(".fa-bars").style.display = "none";
  document.querySelector(".fa-xmark").style.display = "flex";
  } else {
    document.querySelector(".nav1").style.display = "none";
    document.querySelector(".fa-bars").style.display = "flex";
    document.querySelector(".fa-xmark").style.display = "none";
  } 
}


