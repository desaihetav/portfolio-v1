var toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

toggleSwitch.addEventListener("change", switchTheme, false);

if (currentTheme === "dark") {
  toggleSwitch.checked = true;
}
