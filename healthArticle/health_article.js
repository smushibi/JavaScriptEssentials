var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true); // Open a GET request
xhr.responseType = 'json';  // Set the response type to JSON

// Set up a function to handle the response when it's loaded
xhr.onload = function() {
  if (xhr.status === 200) { // Check if the request was successful
    var articles = xhr.response.articles; // Get the articles from the response
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      // Append all the created elements to the article div
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      // Append the article div to the main articles container
      articlesDiv.appendChild(articleDiv);
    });
  } else {
    console.error('Failed to load articles:', xhr.status, xhr.statusText);
  }
};

// Send the request to fetch the JSON file
xhr.send();
