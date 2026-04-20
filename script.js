function scrollToForm() {
  document.getElementById("form").scrollIntoView({behavior: "smooth"});
}

document.getElementById("leadForm").addEventListener("submit", function(e){
  e.preventDefault();

  // редирект на твой сайт
  window.location.href = "https://surmom.com.ua/";
});
