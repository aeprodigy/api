//This is the Variable for thr count of the number values.
let count = 1;

//The interval of how long each image spends on the screeb per time.
setInterval(()=>{
  //the variable to remove the image from the screen to show another image.
  document.querySelector(".img.show").classList.remove("show");

  //Varible containing the img variable
  const img = document.querySelector(`.img-${count}`);

  //the variable to add the image from the screen to show another image.
  img.classList.add("show");
  //Incrementing the count varible.
  count++;

  //The if statement to keep control of Iterating values.
  if (count > 5) {
    count = 1;
  }
}, 3000);

