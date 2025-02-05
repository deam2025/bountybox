// Toggle Side Menu
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

// Toggle Dark Mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// وظيفة لعرض الصورة الكبيرة عند النقر
function showImage(src) {
  const modal = document.getElementById("imageModal");
  const fullImage = document.getElementById("fullImage");
  modal.style.display = "block";
  fullImage.src = src;
}

// وظيفة لإغلاق النافذة عند النقر خارج الصورة
function closeImage() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}




// فتح النافذة المنبثقة
function openPopup() {
  document.getElementById("popup-container").style.display = "flex";
}

// إغلاق النافذة المنبثقة
function closePopup() {
  document.getElementById("popup-container").style.display = "none";
}

// فتح الواتساب
function openWhatsApp() {
  const phone = "+212721626494"; // أدخل رقم هاتفك
  window.open(`https://wa.me/${phone}`, "_blank");
}

// فتح البريد الإلكتروني
function openEmail() {
  const email = "oxdeam@gmail.com"; // أدخل بريدك الإلكتروني
  window.location.href = `mailto:${email}`;
}
