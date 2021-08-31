
let payButton = document.getElementById('pay')

payButton.addEventListener('click', function () {
    let billAmount = document.getElementById('billAmount').value
    let cashGiven = document.getElementById('cashGiven').value

    let billAmountVal = document.getElementById('billAmountVal')
    let cashGivenPrint = document.getElementById('cashGiven')
    let cashToBeGivenPrint = document.getElementById('cashToBeGiven')

    let cashToBeReturned = cashGiven - billAmount

    let error = document.getElementById('error')
    error.style.color = '#BA1C12'
    if(billAmount == ''){
        error.innerHTML = 'Please Enter the Bill Amount';
    }else if(cashGiven == ''){
        error.innerHTML = 'Please Enter the Cash Given'
    }else if(cashToBeReturned < 0){
        error.innerHTML = 'Please Pay More to Reach the Bill Amount, <br>' + '<b>' +Math.abs(cashToBeReturned)+'</b>' + ' more needed'
    }else{
        error.innerHTML = ''

    let notesPrint = document.getElementById('notes')
    let cashHeading = document.getElementById('cashInterface')
    let cashInterfaceStyle = document.getElementById('cashier')
    cashHeading.innerHTML = 'Cashier Interface'
    cashInterfaceStyle.style.padding = '28px 50px 50px 50px'
    cashInterfaceStyle.setAttribute('class', 'animate__animated animate__fadeIn')

    
        billAmountVal.innerText = `Total Bill Amount : ${billAmount}`
        cashGivenPrint.innerText = `Cash Given Amount : ${cashGiven}`
            cashToBeGivenPrint.innerText = `Cash to be Returned Amount : ${cashToBeReturned}`

    let cashDenomination = [ 2000, 500, 200, 100, 50, 20, 10, 5, 1 ];
    let noteCounter = Array(9).fill(0);
    
    for (let i = 0; i < 9; i++) {
        if (cashToBeReturned >= cashDenomination[i]) {
            noteCounter[i] = Math.floor(cashToBeReturned / cashDenomination[i]);
            cashToBeReturned = cashToBeReturned - noteCounter[i] * cashDenomination[i];
        }
    }
    
    noteList = ''
    for (let i = 0; i < 9; i++) {
        if (noteCounter[i] != 0) {
        noteList +=  `${cashDenomination[i]}rs : ${noteCounter[i]} Notes <br> ` ;
        }
    }
    notesPrint.innerHTML =`The Total Amount is Been Returned in <br> <b> ${noteList} </b>` ;
    }
})

