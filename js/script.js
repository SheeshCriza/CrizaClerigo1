function changeBackgroundColor(color) {
     document.body.style.backgroundColor = color;
 }
 
 function openImagePopup(imageSrc) {
     var popupImage = document.getElementById("popupImage");
     popupImage.src = imageSrc;
 
     var popup = document.getElementById("popup");
     popup.style.display = "block";
 }
 
 document.getElementById("popup").addEventListener("click", function () {
     this.style.display = "none";
 });
 
 function closePopup() {
     document.getElementById('popup').style.display = 'none';
 }
 
 function openLoginPopup() {
     document.getElementById('loginPopups').style.display = 'block';
     generateCaptcha();
 }

 function closeLoginPopUps() {
     document.getElementById('loginPopups').style.display = 'none';
 }

 function generateCaptcha() {
     const captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
     document.getElementById('captchaText').innerText = captchaText;
 }

 function refreshCaptcha() {
     generateCaptcha();
     document.getElementById('captcha').value = ''; // Clear the entered captcha
 }

 function submitLoginForm() {
     const enteredCaptcha = document.getElementById('captcha').value.toUpperCase();
     const captchaText = document.getElementById('captchaText').innerText;

     if (enteredCaptcha === captchaText) {
         alert('Login successful!');
         closeLoginPopUps();
     } else {
         alert('Incorrect captcha. Please try again.');
         refreshCaptcha();
     }
 }

 // Login function to open the popup
 function login() {
     openLoginPopup();
 }
 