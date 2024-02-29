const apiInfo='https://tap-web-1.herokuapp.com/topics/list'
console.log("hello");
async function fetchCards(){
  try{
    const response = await fetch(apiInfo);
    if(!response.ok){
      throw new Error('Fetch request failed');
    }
    const cards = await response.json();
    console.log('response is' ,cards );
    
    

    const topicsFound = document.getElementById('topics-found')
    topicsFound.innerHTML = '';

    cards.forEach(card => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    

   const courseImage = document.createElement('img');
   courseImage.src = `/Logos/${card.image}`;
   courseImage.classList.add('Logos');
   courseCard.appendChild(courseImage);

   const cardInfo = document.createElement('div');
   cardInfo.classList.add('card-information');

   const courseDescrip = document.createElement('p');
   courseDescrip.classList.add('course-descrip');
   courseDescrip.textContent = card.category;
   cardInfo.appendChild(courseDescrip);

   const coursTitle = document.createElement('p');
   coursTitle.classList.add('course-title');
   coursTitle.textContent = card.topic;
   cardInfo.appendChild(coursTitle);

   const ratingStars = document.createElement('div');
   ratingStars.classList.add('rating-stars');
  
for(let i=0; i < 4 ; i++){
     const stars= document.createElement('ion-icon');
     stars.setAttribute('name',"star");
     stars.classList.add('star');
     ratingStars.appendChild(stars);
}

   cardInfo.appendChild(ratingStars);

   const courseAuthor = document.createElement('p');
   courseAuthor.classList.add('course-author');
   courseAuthor.textContent = card.name;
   cardInfo.appendChild(courseAuthor);

   courseCard.appendChild(cardInfo);

});
}
catch(error){
  console.error('error fetching data' , error);
}

}

fetchCards();
