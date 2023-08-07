var centerRow = document.getElementById('center-row')
var rightNavbar = document.getElementById('right');

function openMenu(){
    centerRow.classList.add("active")
    rightNavbar.classList.add("active")
}
function closeMenu(){
    centerRow.classList.remove("active")
    rightNavbar.classList.remove("active")
}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzjwpEZeEK2bQUtXz_8uLUTixttfhGFMnQvW19Yrgl9mcdFTsSMCD1thZSV9-Cjcyw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
