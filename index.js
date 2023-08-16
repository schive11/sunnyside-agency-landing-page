const dropdown = document.querySelector('.dropdown-container')
const button = document.querySelector('.icon-hamburger')

button.addEventListener("click", () => {
    if(dropdown.style.display === "none"){
    dropdown.style.removeProperty("display");
    }else{
        dropdown.style.display = "none"
    }
})

document.addEventListener('click', function handleClickOutsideBox(event) {
  // 👇️ the element the user clicked

 
  const box = document.querySelector('.dropdown-container');

  if (!button.contains(event.target) && !box.contains(event.target)) {
    box.style.display = 'none';
  
}

});