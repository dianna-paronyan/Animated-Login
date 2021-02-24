function myFunction() {
  let myInput = document.getElementById("myInput");
  let showPword = document.getElementById("show");
  let hidePword = document.getElementById("hide");
  if (myInput.type === "password") {
    myInput.type = "text";
    showPword.style.display = "flex";
    hidePword.style.display = "none";
  } else {
    myInput.type = "password";
    showPword.style.display = "none";
    hidePword.style.display = "flex";
  }
}


