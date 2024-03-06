//Navbar-Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  if(window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed');
  } else{
    header.classList.remove('navbar-fixed');
  }
};
//Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
//contact form
function redirectToGmail() {
  var subject = document.getElementById('name').value;
  var body = document.getElementById('message').value;

  // Replace 'email_address' with your Gmail address
  var emailAddress = 'napisan13@gmail.com';

  // Building the mailto link
  var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Redirecting to Gmail
  window.location.href = mailtoLink;
}
//contact me btn
function contactMe(){
  var emailAddress = 'napisan13@gmail.com';
  var mailtoLink = 'mailto:' + emailAddress;
  window.location.href = mailtoLink;
}
//text
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(document.querySelector('#desk-self'), {
        strings: ["FullStack Developer"],
        speed : 130,
        loop: true,
      })
      .pause(1000)
      .delete(19)
      .type('WEB Developer')
      .pause(1000)
      .delete(13)
      .type('APP Developer')
      .pause(1000)
      .delete(13)
      .type('SEO Analytics')
      .pause(1000)
      .delete(13)
      .type('Photography')
      .pause(1000)
      .delete(11)
      .go();
});
//ganti warna active nav bar menu
// function changeColor(element){
//   let allItems = document.querySelector('#nav-menu ul li a');

//   allItems.forEach(function(item) {
//     item.classList.remove('lg:text-white');
//   });
//   element.classList.add('lg:text-primary');
// }