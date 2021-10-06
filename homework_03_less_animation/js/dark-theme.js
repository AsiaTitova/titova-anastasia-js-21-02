var body = document.querySelector("body");
var togglerTheme = document.querySelector(".switch__checkbox");

togglerTheme.addEventListener("click", function (evt) {
  body.classList.toggle("body_theme_dark");
});
