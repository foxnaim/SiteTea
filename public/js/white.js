document.addEventListener("DOMContentLoaded", function () {
 const form = document.querySelector(".newsletter-form");
 
 form.addEventListener("submit", function (event) {
     event.preventDefault();
     
     const email = form.querySelector("input").value;
     if (email) {
         alert("Спасибо за подписку!");
         form.reset();
     } else {
         alert("Пожалуйста, введите email!");
     }
 });
});
