let tempQqueryString = 'q=' + encodeURIComponent('quiz');
fetch('https://api.github.com/search/topics?page=3' + tempQqueryString, {
headers: {
    accept: 'application/vnd.github.mercy-preview+json'
}})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});