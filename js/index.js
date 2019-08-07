const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let aTags = document.querySelectorAll ('nav a');

//How would you get a setAttribute to work? 
// aTags.setAttribute('src', siteContent['nav']["nav-item-1"])

// aTags[0].textContent = siteContent['nav']['nav-item-1'];
// aTags[1].textContent = siteContent['nav']['nav-item-2'];
// aTags[2].textContent = siteContent['nav']['nav-item-3'];
// aTags[3].textContent = siteContent['nav']['nav-item-4'];
// aTags[4].textContent = siteContent['nav']['nav-item-5'];
// aTags[5].textContent = siteContent['nav']['nav-item-6'];

aTags.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`]
});

const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent['cta']["img-src"]);

const ctaText = document.querySelector('h1')
ctaText.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button')
button.textContent = siteContent['cta']['button'];

const mainContent = document.querySelectorAll ('.main-content');

//I dont understand why I have to put the [0] ect. What is the "0" representing?
// And for the second number, are we calling for the first time it is used, 2nd, ect?


mainContent[0].getElementsByTagName('h4')[0].textContent = siteContent
['main-content']['features-h4'];

mainContent[0].getElementsByTagName('p')[0].textContent = siteContent
['main-content']['features-content'];

mainContent[0].getElementsByTagName('h4')[1].textContent = siteContent
['main-content']['about-h4'];

mainContent[0].getElementsByTagName('p')[1].textContent = siteContent
['main-content']['about-content'];

mainContent[0].getElementsByTagName('h4')[2].textContent = siteContent
['main-content']['services-h4'];

mainContent[0].getElementsByTagName('p')[2].textContent = siteContent
['main-content']['services-content'];

mainContent[0].getElementsByTagName('h4')[3].textContent = siteContent 
['main-content']['product-h4'];

mainContent[0].getElementsByTagName('p')[3].textContent = siteContent 
['main-content']['product-content'];

mainContent[0].getElementsByTagName('h4')[4].textContent = siteContent 
['main-content']['vision-h4'];

mainContent[0].getElementsByTagName('p')[4].textContent = siteContent
['main-content']['vision-content'];

const midImg = document.getElementById('middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];

//cant get contact to work yet.

const contactContent = document.querySelector('.contact');


contactContent.getElementsByTagName('h4')[0].textContent = siteContent
['contact']['contact-h4'];

contactContent.getElementsByTagName('p')[0].textContent = siteContent 
['contact']['address'];

contactContent.getElementsByTagName('p')[1].textContent = siteContent 
['contact']['phone'];

contactContent.getElementsByTagName('p')[2].textContent = siteContent 
['contact']['email'];















