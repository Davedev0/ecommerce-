window.onscroll = function() {
  const backToTopIcon = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopIcon.style.display = "block";  
  } else {
    backToTopIcon.style.display = "none"; 
  }
};

document.getElementById("backToTop").onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
};