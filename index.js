//grab elements
const form = document.getElementById('form');

//submit senyence
form.addEventListener('submit', (e)=> {
    event.preventDefault()
    function countVowel (str){
        const count = str.match(/[aeiou]/gi).length;
        return count
    }
    const string = document.getElementById('item').value;
    const result = countVowel(string);
    const display = prompt(result)
    
})

