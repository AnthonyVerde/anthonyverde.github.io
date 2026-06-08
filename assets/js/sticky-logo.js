window.addEventListener('scroll', () => {
  const target = document.querySelector('.sticky-logo');
  
  if (window.scrollY > 500) {
    target.classList.add('show-sticky-logo');
  } else {
    target.classList.remove('show-sticky-logo'); 

}});
