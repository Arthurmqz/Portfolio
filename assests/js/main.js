'use strict'

//Header background change on scroll
let header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  header.classList.toggle('header-active', window.scrollY > 0)
})

//Scroll Top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('scroll-active', window.screenY >= 400)
})

//Animation of menu icon

let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = function () {
  navbar.classList.toggle('open-menu')
  menu.classList.toggle('move')
}
window.onscroll = () => {
  navbar.classList.remove('open-menu')
  menu.classList.remove('move')
}
//Softskills animation

let options = {
  startAngle: -1.55,
  size: 120,
  value: 0.95,
  fill: { gradient: ['#647bff', '#171b3c'] }
}
$('.circle .bar')
  .circleProgress(options)
  .on('circle-animation-progress', function (event, progress, stepValue) {
    $(this)
      .parent()
      .find('span')
      .text(String(stepValue.toFixed(2).substr(2)) + '%')
  })
$('.gg .bar').circleProgress({
  value: 0.82
})
$('.tm .bar').circleProgress({
  value: 0.85
})

//Email JS (w/API)

function validate() {
  let name = document.querySelector('.name')
  let email = document.querySelector('.email')
  let msg = document.querySelector('.message')
  let sendBtn = document.querySelector('.send-btn')

  sendBtn.addEventListener('click', e => {
    e.preventDefault()
    if (name.value == '' || email.value == '' || msg.value == '') {
      emptyerror()
    } else {
      sendmail(name.value, email.value, msg.value)
      success()
    }
  })
}
validate()

function sendmail(name, email, msg) {
  emailjs.send('service_6dfe548', 'template_vqfof2c', {
    from_name: email,
    to_name: name,
    message: msg
  })
}
//Sweet Alert

function emptyerror() {
  swal({
    title: 'Oops!',
    text: 'It´s important to fill the fields to send me a message!',
    icon: 'error'
  })
}
function success() {
  swal({
    title: 'Email sent successfully!',
    text: 'Thanks for getting in touch, I will try respond in 24 hours!',
    icon: 'success'
  })
}
