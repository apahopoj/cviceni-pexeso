console.log('Funguju!')
const turnPexeso = (event) => {
    console.log('Funguju!')
  if(event.target.classList.contains('otocena')){
   event.target.classList.remove('otocena');
}
   else {
   event.target.classList.add('otocena');
  };

}

const karticky = document.querySelectorAll('.karticka')

karticky.forEach((karticka)=>  {
karticka.addEventListener('click', turnPexeso);
});



