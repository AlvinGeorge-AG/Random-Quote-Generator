//DOM
const quote_bar = document.querySelector('.delius-regular');
const author_bar = document.querySelector('.author');
const autoGenerate = document.querySelector('.autobtn');
const newQuotebtn = document.querySelector('.btn');
const stopBtn = document.querySelector('.stopbtn');
const alerts = document.querySelector('.alert');
autoGenerate.disabled=false;
stopBtn.disabled=true;

// API USED
const url = 'https://thequoteshub.com/api/random-quote'
//variables to store data
let quote;
let author;
// Quote generating function
async function Quotegen(){
    try{
    const feching_api = await fetch(url);
    const data = await feching_api.json();
    quote = data.text;
    author = data.author;
    quote_bar.innerHTML = quote;
    author_bar.innerHTML = author;
}catch(error){console.log(error)}
}
// creates new quote
newQuotebtn.addEventListener('click',async ()=>{
    await Quotegen();
})
//on page load new quote will generate
Quotegen();
//auto generate quotes
let autoref;
autoGenerate.addEventListener("click",()=>{
    alerts.innerHTML = `&emsp;&emsp;&emsp;&emsp; AUTO MODE ENABLED<br>NEW QUOTE WILL GENERATE AFTER 8S`;
    stopBtn.disabled=false;
    newQuotebtn.disabled=true;
    autoGenerate.disabled=true;
    autoref = setInterval(Quotegen,5000);
})
// Stops the auto generating quotes
stopBtn.addEventListener('click',()=>{
    alerts.innerHTML='';
    stopBtn.disabled=true;
    newQuotebtn.disabled=false;
    autoGenerate.disabled=false;
    clearInterval(autoref);
})