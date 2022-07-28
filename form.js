const form = document.getElementById("form");
form.getElementById("submit").reset(); 
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

