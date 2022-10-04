const quoteJs = document.querySelector('blockquote');
const authorJs = document.querySelector('cite');
const reloadBtn = document.querySelector('.reload');

// Calling Function
getQuote = async () => {
   let api = 'https://type.fit/api/quotes';

   const response = await fetch(api);

   // api array
   const apiQuotes = await response.json();
   const index = Math.floor(Math.random()*apiQuotes.length);

   quoteJs.innerHTML = apiQuotes[index].text;
   authorJs.innerHTML = apiQuotes[index].author;
   if(author == null){
      authorJs.innerHTML = 'Anonymous';
   }

}

reloadBtn.addEventListener('click', () => {
   getQuote();
})