// 21a42679700c47969034cf9e831f03ed
// https://newsapi.org/v2/everything?q=keyword&apiKey=21a42679700c47969034cf9e831f03ed

const input = document.querySelector('input');
const bouton = document.querySelector('button');
const container = document.querySelector('.container');


function ajoutDonnees(queryUser){
    container.innerHTML=""
    fetch(`https://newsapi.org/v2/everything?q=${queryUser}&apiKey=21a42679700c47969034cf9e831f03ed`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (let i = 0; i < 10; i++) {
            container.innerHTML += `
            <div class="article">
            <div class="articleWrap">
                <p>${data.articles[i].title}</p>
                <p>${data.articles[i].description}</p>
                <p>${data.articles[i].author}</p>
                <p>${data.articles[i].publishedAt
                }</p>
            </div>
            <div class="img"><img src="${data.articles[i].urlToImage}" alt=""></div>
                </div>`
            
        }
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des données :", error); 
    });
}


bouton.addEventListener('click', (e) => {
    
    const valueInput= input.value
    ajoutDonnees(valueInput)

});

input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const valueInput= input.value
    ajoutDonnees(valueInput)
  }
});