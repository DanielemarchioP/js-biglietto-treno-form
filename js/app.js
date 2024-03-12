console.log('calorie')

const buttonElement = document.getElementById('submit')
console.log(buttonElement)
const prezzoBase = 0.21

const kmInputElement = document.getElementById('km') //object
const etaInputElement = document.getElementById('eta') //object
const resultElement = document.getElementById('result')

buttonElement.addEventListener('click', function(){
const km = +kmInputElement.value  //number
const eta = +etaInputElement.value //number

console.log('hai percorso un totale di : ', km, ' kilometri')
console.log('la tua eta e di :', eta)
const prezzoPieno = km * prezzoBase
console.log('il prezzo e di : ' , prezzoPieno, ' euro')
let discount = 0

if(eta<18){
    discount = prezzoPieno*0.2
    prezzoDiscount = prezzoPieno - discount
    console.log('il prezzo scontato per i minori e di : ' ,prezzoDiscount)
}else if(eta>65){
 discount = prezzoPieno*0.4
 prezzoDiscount = prezzoPieno - discount
 console.log('il prezzo scontato per over 65 anni e di : ' ,prezzoDiscount)
}

resultElement.innerHTML = 'il prezzo del tuo biglietto a fronte di sconti e di ' + prezzoDiscount + 'euro'
})