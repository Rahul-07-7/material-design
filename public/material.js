let nav = document.querySelector(".navbar");
let hamb = document.querySelector(".hamb");
hamb.addEventListener("click", () => {
  nav.classList.toggle("act");
});

let toast = document.getElementById("toast");
let toastIcon = document.getElementById("toast-icon");
let toastTitle = document.getElementById("toast-title");

function showtoast(type) {
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 6000);
  let iconClass = "fa-solid fa-check";
  let iconColor = "black";

  let titleColor = "black";
  let titleText = "Material Dashboard";
  let bgcolor = "rgb(247, 244, 244)";

  if (type === "success") {
    iconClass = "fa-solid fa-check-check";
    titleColor = "green";
    titleText = "Success Notification";
    iconColor = "white";
  } else if (type === "error") {
    iconClass = "fa-solid fa-times-circle";
    titleColor = "red";
    titleText = "Error Notification";
    iconColor = "red";
  } else if (type === "warning") {
    iconClass = "fa-solid fa-exclamation-triangle";
    titleColor = "orange";
    titleText = "Warning Notification";
    iconColor = "orange";
  } else if (type === "info") {
    iconClass = "fa-solid fa-info-circle";
    titleColor = "black";
    titleText = "Info Notification";
    bgcolor = "#368FED";
    iconColor = "white";
  }

  toastIcon.className = iconClass;
  toastTitle.style.color = titleColor;
  toastTitle.textContent = titleText;
  toast.style.backgroundColor = bgcolor;
  toastIcon.style.color = iconColor;
}

function hidetoast() {
  toast.style.display = "none";
}
