async function fetchDetails(){
  try{
    const urlParam = new URLSearchParams(window.location.search);
    const cardID = urlParam.get('id');
    console.log(cardID);
    const response = await fetch(`https://tap-web-1.herokuapp.com/topics/details/${cardID}`);
    if (!response){
      throw new Error('request failed');
    }
    const cardDetails = await response.json();
    console.log('response is' , cardDetails);

    const detailsMain = document.getElementById('details-main');
    detailsMain.innerHTML = `
    <div class="details-main-content">
        <section class="details-descrip-container">
          <div class="details-descrip">
            <div>
              <p class="details-course-name">${cardDetails.category}</p>
              <p class="details-course-title">${cardDetails.topic}</p>
              <div class="rating-stars">
                <span><ion-icon class="star" name="star"></ion-icon></span>
                <span><ion-icon class="star" name="star"></ion-icon></span>
                <span><ion-icon class="star" name="star"></ion-icon></span>
                <span><ion-icon class="star" name="star"></ion-icon></span>
                <span><ion-icon class="star" name="star-outline"></ion-icon></span>
              </div>
            </div>
            <p class="details-course-descrip">
              ${cardDetails.description}
            </p>
          </div>
      

        </section>

        <section class="html-topics-container">
          <div class="top-topic">
            <p class="html-topics-title">${cardDetails.topic} Sub Topics</p>
          </div>
          <div>
            <p><span><ion-icon class="details-icon" name="checkmark-circle-outline"></ion-icon></span>
              ${cardDetails.subtopics[0]}</p>
          </div>
          <div>
            <p><span><ion-icon class="details-icon" name="checkmark-circle-outline"></ion-icon></span>
            ${cardDetails.subtopics[1]}</p>
          </div>
          <div>
            <p><span><ion-icon class="details-icon" name="checkmark-circle-outline"></ion-icon></span>
            ${cardDetails.subtopics[2]}</p>
          </div>
          <div>
            <p><span><ion-icon class="details-icon" name="checkmark-circle-outline"></ion-icon></span>
            ${cardDetails.subtopics[3]}</p>
          </div>
          <div>
            <p><span><ion-icon class="details-icon" name="checkmark-circle-outline"></ion-icon></span>
            ${cardDetails.subtopics[4]}</p>
          </div>
          <div class="bottom-topic">
            <p><span><ion-icon class="details-icon" name="checkmark-circle-outline"></ion-icon></span>
            ${cardDetails.subtopics[5]}</p>
          </div>

        </section>
      </div>

      <section class="details-side-card">
        <img src="Logos/${cardDetails.image}" class="logo-card">
        <div class="card-title"><p>${cardDetails.topic}</strong> by <a href="">${cardDetails.name}</a></p></div>
        <div class="favorites-box">
          <label class="button-label">Interested about this topic?</label><br>
          <button id="fav-button" class="favorites-button">
            Add to Favorites <span><ion-icon class="heart-card" name="heart-outline"></ion-icon></span>
          </button>
          <p class="card-footer">Unlimted Credits</p>
        </div>
      </section>
    `;
    const favButton = document.getElementById('fav-button');
favButton.addEventListener('click' , ()=>{
  alert('button is clicked')
});

  }

  catch(error){
    console.error('error fetching details', error);
  }
}
fetchDetails();


