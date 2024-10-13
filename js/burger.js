const burger = document.querySelector(".icon__burger");
const body = document.querySelector(".body");
const navMenu = document.querySelector(".nav__menu");
const menuItemsB = document.querySelectorAll('.text-block');
const menuBtn = document.querySelector('.menu__button');
const overlay = document.querySelector('.overlay');



burger.addEventListener('click', () => {
  burger.classList.toggle('burger-opened');

  if (burger.classList.contains('burger-opened')) {
    navMenu.classList.add('nav-menu-opened');
    navMenu.classList.remove('nav-menu-closed');
    body.style.overflow = 'hidden';
    overlay.style.display = 'block';
  } else {
    navMenu.classList.remove('nav-menu-opened');
    navMenu.classList.add('nav-menu-closed');
    body.style.overflow = 'auto';
    overlay.style.display = 'none';
  }
});

function closeMenu() {
  burger.classList.remove('burger-opened');
  navMenu.classList.remove('nav-menu-opened');
  navMenu.classList.add('nav-menu-closed');
  body.style.overflow = 'auto';
  menuBtn.classList.remove('opened');
  overlay.style.display = 'none';
}

menuItemsB.forEach(item => {
  item.addEventListener('click', () => {
    closeMenu()
  })
})

overlay.addEventListener('click', () => {
  closeMenu()
})




// emailjs



const form = document.querySelector('.hero-form');
const formName = document.querySelector('.name_form');
const formPhone = document.querySelector('.phone_form');
const formComment = document.querySelector('.comment_form');

const publicKey = 'DX-dnbpT59SF5ENRS'
const secretKey = 'ly0MfCoS63sbGjrdc4mvu'
const serviceId = 'service_7u4pjgd'  
const templateId = 'template_76pvc86' 

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;

function getMonthName(month) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month - 1];
}

const monthName = getMonthName(month);

const Year = date.getFullYear();



form.addEventListener('submit', function (event) {
  event.preventDefault();

  const data = 
  {
    name : formName.value,
    phone : formPhone.value.replace(/[()\s\-]/g, ''),
    comment : formComment.value
  }


  const templateParams = {
    name: data.name,
    message : data.comment,
    phone : data.phone,
    date: day + '.' + monthName + '.' + Year
  };
  
  emailjs.send(serviceId, templateId, templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      formName.value = '';
      formPhone.value = '';
      formComment.value = '';
      window.location.href = 'ok.html';
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
  
})






// form pop-up__form



const form2 = document.querySelector('.pop-up__form');
const templateId2 = 'template_o8ubhrs'
const formPhone2 = document.querySelector('.pop-up__phone');


form2.addEventListener('submit', function (event) {
  event.preventDefault();

  const data = 
  {
    phone : formPhone2.value.replace(/[()\s\-]/g, ''),
  }

  console.log(data.phone)

  const templateParams = {
    phone : data.phone,
    date: day + '.' + monthName + '.' + Year
  };
  
  emailjs.send(serviceId, templateId2, templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      formPhone2.value = '';
      window.location.href = 'ok.html';  
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
  
})