const favoriteSection = document.getElementById('favorites-bar');
const favoriteButton = document.getElementById('favorite-button');

favoriteButton.addEventListener('click' , () =>{
  if(favoriteSection.style.display === 'none'){
    favoriteSection.style.display = 'block';
  }else{
    favoriteSection.style.display = 'none';
  }

})