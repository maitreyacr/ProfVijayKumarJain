fetch("../DataFiles/awards.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (awards) {
    let placeholder = document.querySelector("#data-display");
    let jsTable = "";
    let index=0;
    awards = awards;
    for (let data of awards) {
        jsTable += `
        <div class="card" id=" ${index}" onclick="addClass(event.currentTarget.id)">
          <div class="card__image-holder">
            <img class="card__image" src="${data.image}" alt="wave" />
          </div>
          <div class="card-title">
            <a href="#" class="toggle-info btn">
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <h2>
            ${data.title}
                <small>${data.short_discription}</small>
            </h2>
          </div>
          <div class="card-flap flap1">
            <div class="card-description">
            ${data.description}
            </div>
            <div class="card-flap flap2">
              <div class="card-actions">
                <a href="#" class="btn">Read more</a>
              </div>
            </div>
          </div>
        </div>
      `;
      index++
    }
    placeholder.innerHTML = jsTable;
  });
 function addClass(index)
  {
    var element = document.getElementById( index);
    if(element.classList.contains("show")){
      element.classList.remove("show")
      element.classList.add("showing")
    }
    else{
      element.classList.remove("showing")
      element.classList.add("show");
    }
    
  }

  