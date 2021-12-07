console.log("Welcome to Anurag's news website");

// Initialize the news api parameters
let source = "bbc-news";
let apiKey = "ec6e11b8b87c42f893385caadd3fd566";

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,
  true
);

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);

    // PRACTICE below...
    articles.forEach(function(element, index){
      console.log(element.title);
      let title = element.title;
      let content = element.content;
      let newshtml = `
      <div class="accordion-item">
          <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
              <b>Breaking news ${index+1} :</b>&nbsp      ${title}
          </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
          <div class="accordion-body">
              ${content}. <a target="_blank" href="${element.url}" >Read more</a>
          </div>
      </div>`;
      newsAccordion.innerHTML += newshtml;
    })
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
