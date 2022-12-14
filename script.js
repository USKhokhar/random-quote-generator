const quoteJs = document.querySelector('blockquote');
const authorJs = document.querySelector('cite');
const copyBtn = document.querySelector('.copy');
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

// Copying mechanism
copyBtn.addEventListener('click', () => {
   navigator.clipboard.writeText(quoteJs.innerText).then(() => {
      alert('Quote copied to Clipboard')
   }, (err) => {
      alert('Failed to copy to clipboard!')
   });
})

reloadBtn.addEventListener('click', () => {
   getQuote();
})