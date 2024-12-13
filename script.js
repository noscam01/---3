 const names = document.getElementById('names')
 const helpertext = document.getElementById('helpertext')
 const sun = document.getElementById('sun')
 const footer = document.getElementById('footer')

names.addEventListener('input',() =>{
   helpertext.textContent  = 'Сіз енгізіп жатырсыз: ' + names.value; 
})

sun.addEventListener('click',  () => {
  footer.textContent = 'Сіз енгіздіңіз: ' + names.value
  helpertext.textContent = ''
})