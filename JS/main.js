const apiInfo='https://tap-web-1.herokuapp.com/topics/list'
console.log("hello");
let allCards = [];
async function fetchCards(apiUrl=apiInfo){
  try{
    const response = await fetch(apiUrl);
    if(!response.ok){
      throw new Error('Fetch request failed');
    }
    allCards = await response.json();
    console.log('response is' ,allCards );
    
    displaycards(allCards);
    
}
catch(error){
  console.error('error fetching data' , error);
}

}

let debounceTime;
async function searchResult(){
  const searchInput = document.getElementById('search-bar');
  const searchWord = searchInput.value.trim().toLowerCase();

  clearTimeout(debounceTime);
  debounceTime = setTimeout(async ()=>{
    const searchAPI = `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchWord}`;
    await fetchCards(searchAPI);
  }, 300);
}

function sortAndFilter (sortOption , filterOption){
  let finalCards=[...allCards];

  if(filterOption !== 'default'){
    const filterOptionLower = filterOption.toLowerCase();
    finalCards = finalCards.filter(card => card.category.toLowerCase() === filterOptionLower);

  }

  if(sortOption === 'Topic Title'){
    finalCards.sort((a,b) => a.topic.localeCompare(b.topic));
  } else if(sortOption ==='Author Name'){
    finalCards.sort((a,b) => a.name.localeCompare(b.name));
  }
displaycards(finalCards);
}

const searchEntry = document.getElementById('search-bar');
searchEntry.addEventListener('input' ,searchResult);
const filterDropdown = document.getElementById('filter-by');
filterDropdown.addEventListener('change', ()=>{
  const filterOption= filterDropdown.value;
  const sortOption=document.getElementById('sort-by').value;
  sortAndFilter(sortOption,filterOption);

});
const sortDropdown = document.getElementById('sort-by');
sortDropdown.addEventListener('change', sortAndFilter);


fetchCards();

function displaycards(cards){
  const topicsFound = document.getElementById('topics-found')
    topicsFound.innerHTML = '';

    cards.forEach(card => {  
    const cardLink = document.createElement('a');
    cardLink.href =`details.html?id=${card.id}`;
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
   cardLink.appendChild(courseCard);
   topicsFound.appendChild(cardLink);
   

});
}
