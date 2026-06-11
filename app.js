// elemant-selector
const emailInput = document.getElementById("ee");
const subscribeBtn = document.getElementById("btn");
const emailItem = document.querySelector(".email-item");
const mainCard = document.querySelector(".parent-container");


// success card and email span 
const successCardDesktop = document.querySelector(".success-card");
const successCardMobile = document.querySelector(".success-card2");
const userEmailSpans = document.querySelectorAll(".user-email");

// dismiss button 
const dismissBtnDesktop = document.querySelector(".dismiss-btn");
const dismissBtnMobile = document.querySelector(".dismiss-btn2")


// email validation Regex 
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// main logic 

const handleSubscription = (e) => {

  if(e) e.preventDefault(); 
  
  const emailValue = emailInput.value.trim();

  if (emailValue === "" || !emailPattern.test(emailValue)) {
    emailItem.classList.add('invalid'); 
  } else {
    emailItem.classList.remove('invalid');
    

    userEmailSpans.forEach(span => {
      span.textContent = emailValue;
    });

    mainCard.style.display = 'none';
    
    if (window.innerWidth > 776) {
      if(successCardDesktop) successCardDesktop.style.display = 'block';
    } else {
      if(successCardMobile) successCardMobile.style.display = 'block';
    }
  }
};

// subcribe btn add event
subscribeBtn.addEventListener("click",handleSubscription);

emailInput.addEventListener('input', () => {
  if (emailItem.classList.contains('invalid')) {
    emailItem.classList.remove('invalid');
  }
});

const resetForm = () => {
  if(successCardDesktop) successCardDesktop.style.display = 'none';
  if(successCardMobile) successCardMobile.style.display = 'none';
  
  mainCard.style.display = 'flex';
  emailInput.value = ''; 
};

if(dismissBtnDesktop) dismissBtnDesktop.addEventListener('click', resetForm);
if(dismissBtnMobile) dismissBtnMobile.addEventListener('click', resetForm);
