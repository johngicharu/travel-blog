
// Contact Form Animation
const contact = document.querySelector('#contact');
const contactLink = document.querySelector('a[href="#contact"]');
const closeContact = document.querySelector('.cross');
const labels = document.querySelectorAll('label');
const container = document.querySelector('.container');

let labelArr = Array.from(labels);

labelArr.forEach(label => {
  label.addEventListener('click', changeFocus);
});

contactLink.addEventListener('click', loadContact);
closeContact.addEventListener('click', loadContact);

function loadContact(e) {
  let displayValue = getComputedStyle(contact).display;
  if (displayValue == "none") {
    contact.style.display = "flex";
  } else {
    contact.style.display = "none";
  }
}

function changeFocus(e) {
  document.querySelector(`${e.target.parentElement.tagName} input`).active = true;
}
