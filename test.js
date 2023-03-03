console.log("Loaded from github");
  const slideshowImages = document.querySelectorAll(".slideshow-img");
  const slideshowInterval = 5000; // in milliseconds
  let slideshowIndex = 0;

  setInterval(() => {
    console.log("tick");
    slideshowImages[slideshowIndex].style.display = "none";
    slideshowIndex = (slideshowIndex + 1) % slideshowImages.length;
    slideshowImages[slideshowIndex].style.display = "block";
  }, slideshowInterval);
