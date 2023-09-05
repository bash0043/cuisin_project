$(document).ready(function() {
    const apiKey = 'ca0640ede51e45a998520a5c01039239';
    const baseUrl = 'https://api.spoonacular.com/recipes/';
  
    $('#search-form').submit(function(event) {
      event.preventDefault();
      const query = $('#query').val();
      searchRecipes(query);
    });
  
    function searchRecipes(query) {
      const url = `${baseUrl}complexSearch?apiKey=${apiKey}&query=${encodeURIComponent(query)}&number=10`;
  
      $.getJSON(url, function(data) {
        displayResults(data.results);
      }).fail(function() {
        alert('An error occurred while fetching data from the API.');
      });
    }
  
    function displayResults(results) {
      let html = '';
      results.forEach(result => {
        html += `<div class=item>
          <img src="${result.image}" alt="${result.title}">
          <div class="label">${result.title}</div>
        </div>`;
      });
      $('#results').html(html);
    }
  });
  