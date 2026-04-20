<!-- В конец <body>, перед закрывающим </body> -->
<script>
  function scrollToForm() {
    document.getElementById("form").scrollIntoView({ behavior: "smooth" });
  }

  // Ждём полной загрузки DOM
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("leadForm");
    
    if (form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("Форма отправлена, делаем редирект..."); // для отладки
        window.location.href = "https://surmom.com.ua/";
      });
    } else {
      console.error("Элемент с id='leadForm' не найден!");
    }
  });
</script>
