
let cid = [["PENNY", 1.01], 
["NICKEL", 2.05], 
["DIME", 3.1], 
["QUARTER", 4.25], 
["ONE", 90], 
["FIVE", 55], 
["TEN", 20], 
["TWENTY", 60], 
["ONE HUNDRED", 100]]; 

let open = [
["PENNY", 0.00],
["NICKEL", 0.00],
["DIME", 0.00],
["QUARTER", 0.00],
["ONE", 0.00], 
["FIVE", 0.00],
["TEN", 0.00], 
["TWENTY", 0.00],
["ONE HUNDRED", 0.00] 
];  

let penny = ((cid[0][1]*100)/100).toFixed(2); 
let nickel = ((cid[1][1]*100)/100).toFixed(2);
let dime = ((cid[2][1]*100)/100).toFixed(2);
let quarter = ((cid[3][1]*100)/100).toFixed(2);  
let one = ((cid[4][1]*100)/100).toFixed(0); 
let five = ((cid[5][1]*100)/100).toFixed(0);
let ten = ((cid[6][1]*100)/100).toFixed(0);
let twenty = ((cid[7][1]*100)/100).toFixed(0);  
let hundred = ((cid[8][1]*100)/100).toFixed(0);

let openny = ((open[0][1]*100)/100).toFixed(2); 
let onickel = ((open[1][1]*100)/100).toFixed(2);
let odime = ((open[2][1]*100)/100).toFixed(2);
let oquarter = ((open[3][1]*100)/100).toFixed(2);
let oone = ((open[4][1]*100)/100).toFixed(0);
let ofive = ((open[5][1]*100)/100).toFixed(0);
let oten = ((open[6][1]*100)/100).toFixed(0);
let otwenty = ((open[7][1]*100)/100).toFixed(0);
let ohundred = ((open[8][1]*100)/100).toFixed(0); 

const input = document.querySelector("#cash");
const inputprice = document.getElementById("price");
const purchase = document.querySelector("#purchase-btn");
const change = document.querySelector("#change-due");

const displaypenny = document.querySelector("#penny");
const displaynickel = document.querySelector("#nickel");
const displaydime = document.querySelector("#dime");
const displayquarter = document.querySelector("#quarter");
const displayone = document.querySelector("#one");
const displayfive = document.querySelector("#five");
const displayten = document.querySelector("#ten");
const displaytwenty = document.querySelector("#twenty");
const displayhundred = document.querySelector("#hundred");
const displaytotal = document.querySelector("#total-funds");
const displaychange = document.querySelector("#change-screen");
const okPrice = document.querySelector("#price-title");
const okCash = document.querySelector("#cash-title");

purchase.onclick = goPay;
purchase.disabled = true;

let funds = parseFloat((penny*100+nickel*100+dime*100+quarter*100+one*100+five*100+ten*100+twenty*100+hundred*100)/100).toFixed(2);

function totalFunds(funds)  
{
return parseFLoat((funds).toFixed(2));
} 

console.log("penny: " + penny);
console.log("nickel: " + nickel);
console.log("dime: " + dime);
console.log("quarter: " + quarter);
console.log("one: " + one);
console.log("five: " + five);
console.log("ten: " + ten);
console.log("twenty: " + twenty);
console.log("hundred: " + hundred);
console.log ("\nFunds: " + funds + "\n");

let splittedPenny = penny.split('.');

let pendollars = parseInt(splittedPenny[0]);
let pencents = parseInt(splittedPenny[1].padEnd(2, '0'));
let splittedOpenny = openny.split('.');
let opendollars = parseInt(splittedOpenny[0]);
let opencents = parseInt(splittedOpenny[1].padEnd(2, '0'));

let splittedNickel = nickel.split('.');
let nickdollars = parseInt(splittedNickel[0]);
let nickcents = parseInt(splittedNickel[1].padEnd(2, '0')); 
let splittedOnickel = onickel.split('.');
let onickdollars = parseInt(splittedOnickel[0]);
let onickcents = parseInt(splittedOnickel[1].padEnd(2, '0'));

let splittedDime = dime.split('.'); 
let dimedollars = parseInt(splittedDime[0]);
let dimecents = parseInt(splittedDime[1].padEnd(2, '0'));
let splittedOdime = odime.split('.'); 
let odimedollars = parseInt(splittedOdime[0]);
let odimecents = parseInt(splittedOdime[1].padEnd(2, '0'));

let splittedQuarter = quarter.split('.'); 
let quarterdollars = parseInt(splittedQuarter[0]);
let quartercents = parseInt(splittedQuarter[1].padEnd(2, '0'));
let splittedOquarter = oquarter.split('.'); 
let oquarterdollars = parseInt(splittedOquarter[0]);
let oquartercents = parseInt(splittedOquarter[1].padEnd(2, '0'));

let onedollars = parseInt(one); 
let oonedollars = parseInt(oone);

let fivedollars = parseInt(five); 
let ofivedollars = parseInt(ofive);

let tendollars = parseInt(ten); 
let otendollars = parseInt(oten);

let twentydollars = parseInt(twenty); 
let otwentydollars = parseInt(otwenty);

let hundreddollars = parseInt(hundred); 
let ohundreddollars = parseInt(ohundred); 


displaycid();


ablePurchase();


function checkPrice()
{
    
    if (input.value.trim() === '')
        {
            okCash.style.backgroundColor = "darkgray";
            okCash.style.color = "rgb(104, 107, 107)";
        }
        else
        {
            okCash.style.backgroundColor = "#32CD32";
            okCash.style.color = "white";
        }
}
function ablePurchase()
{
    

    purchase.disabled = inputprice.value.trim() === '';
    if (purchase.disabled == false)
    {
        okPrice.style.backgroundColor = "#32CD32";
        okPrice.style.color = "white";
    }
    else
    {
        okPrice.style.backgroundColor = "darkgray";
        okPrice.style.color = "rgb(104, 107, 107)";
    }

}

function goPay()  
{ 
    let cash = parseFloat(input.value).toFixed(2);
    let price = parseFloat(inputprice.value).toFixed(2);
        

    let myChange = (cash - price).toFixed(2);
    
    displaychange.textContent = "CHANGE $" + `${myChange}`;

    let totalCidValue = 0; 
    for (let i = 0; i < cid.length; i++) {
        totalCidValue += cid[i][1];
    }

    let splittedmyChange = myChange.toString().split('.');
    let dollars = parseInt(splittedmyChange[0]);
    let cents = parseInt(splittedmyChange[1].padEnd(2, '0'));
    

    let joinedmyChange = parseFloat(splittedmyChange.join('.')).toFixed(2);  
    
    let newFunds = parseFloat(totalCidValue - joinedmyChange).toFixed(2); 

    
    console.log("totalCidValue: " + totalCidValue.toFixed(2));   
    console.log("cash: " + cash);
    console.log("price: " + price);
    console.log("change: " + joinedmyChange); 
    console.log("new funds: " + newFunds + "\n"); 
    if (cash < price || cash < 0)   
    {
        
        alert("Customer does not have enough money to purchase the item");
        console.log("Customer does not have enough money to purchase the item"); 
        change.textContent = "Customer does not have enough money to purchase the item";
    }

    else if (cash == price) 
    { 
        change.innerText = "No change due - customer paid with exact cash";
    }
    
    else if (cash > price && newFunds > 0 && myChange <= totalCidValue) 
    {
        
        while (joinedmyChange > 0) 
        {

        if (dollars >= 100 && cid[8][1] > 0) 
        {
            minHundred();
        } 

        else if (dollars >= 20 && cid[7][1] > 0) 
        {
            minTwenty();
        } 

        else if (dollars >= 10 && cid[6][1] > 0) 
        {
            minTen();
        } 

        else if (dollars >= 5 && cid[5][1] > 0) 
        {
            minFive();
        } 

        else if (dollars >= 1 && cid[4][1] > 0) 
        {
            minOne();
        } 

        else if (cents >= 25 && cid[3][1] > 0) 
        {
            minQuarter();
        } 


        else if (cents >= 10 && cid[2][1] > 0) 
        {
            minDime();
        } 

        else if (cents >= 5 && cid[1][1] > 0) 
        {
            minNickel();
        } 

        else if (cents >= 1 && cid[0][1] > 0) 
        {
            minPenny();
        } 

        else 
        { 
            insufficientFunds();
            break;
        }
        }
        console.log("totalCID = " + totalCidValue.toFixed(2));
        console.log("cid = ");
        console.log(cid);
        console.log("open = ");
        console.log(open);
        openFunds();
        funds = newFunds;
        resetOpen();
    }

    else if(newFunds < 0 || totalCidValue > joinedmyChange)
    {
        insufficientFunds();
    }

    else if (cash > price && newFunds == 0 && joinedmyChange <= totalCidValue)  
    {
        while (joinedmyChange > 0) 
        {

        if (dollars >= 100 && cid[8][1] > 0) 
        {
            minHundred();
        } 

        else if (dollars >= 20 && cid[7][1] > 0) 
        {
            minTwenty();
        } 

        else if (dollars >= 10 && cid[6][1] > 0) 
        {
            minTen();
        } 

        else if (dollars >= 5 && cid[5][1] > 0) 
        {
            minFive();
        } 

        else if (dollars >= 1 && cid[4][1] >= 1) 
        {
            minOne();
        } 

        else if (cents >= 25 && cid[3][1] > 0) 
        {
            minQuarter();
        } 


        else if (cents >= 10 && cid[2][1] > 0) 
        {
            minDime();
        } 

        else if (cents >= 5 && cid[1][1] > 0) 
        {
            minNickel();
        } 

        else if (cents >= 1 && cid[0][1] > 0) 
        {
            minPenny();
        } 

        else 
        { 
            insufficientFunds();
            break;
        }
        }
        console.log("totalCID = " + totalCidValue);
        console.log("cid = ");
        console.log(cid);
        console.log("open = ");
        console.log(open);
        funds = newFunds;
        closedFunds();
        resetOpen();
    }

    else if(newFunds < 0 ) 
    {
    insufficientFunds();
    }  
    else if (cash > totalCidValue) 
    {
        insufficientFunds();
    } 
    
    else if (cash == totalCidValue) 
    {
        closedFunds();
    }



    function minPenny() 
    {
        if (cents > 0) 
        {
            cents -= 1;
        } else {
            dollars -= 1;
            cents += 99; 
        }
        if (pencents > 0) 
        {
            pencents -= 1;
            opencents += 1;
        } else {
            pendollars -= 1;
            pencents += 99;
            opencents += 1;
        }

        // Joining dollars and cents back to form the updated penny value
        let updatedPenny = parseFloat(pendollars + '.' + pencents.toString().padStart(2, '0'));
        let updatedOpenny = parseFloat(opendollars + '.' + opencents.toString().padStart(2, '0'));
        cid[0][1] = updatedPenny;
        open[0][1] = updatedOpenny;

    } 

        function minNickel() 
    {
        if (cents > 0) 
        {
            cents -= 5;
        } else {
            dollars -= 1;
            cents = 95; 
        }
        if (nickcents > 0) 
        {
            nickcents -= 5;
            onickcents += 5;
        } else {
            nickdollars -= 1;
            nickcents = 95; 
            onickcents += 5;
        }

        // Joining dollars and cents back to form the updated penny value
        let updatedNickel = parseFloat(nickdollars + '.' + nickcents.toString().padStart(2, '0'));
        let updatedOnickel = parseFloat(onickdollars + '.' + onickcents.toString().padStart(2, '0'));

        cid[1][1] = updatedNickel;
        open[1][1] = updatedOnickel;
    } 
    function minDime() 
    {
        if (cents > 0) 
        {
            cents -= 10;
        } else {
            dollars -= 1;
            cents = 90; // Set cents to 99 if it was 0
        }
        if (dimecents > 0) 
        {
            dimecents -= 10;
            odimecents += 10;
        } else {
            dimedollars -= 1;
            dimecents = 90; // Set cents to 99 if it was 0
            odimecents += 10;
        }

        // Joining dollars and cents back to form the updated penny value
        let updatedDime = parseFloat(dimedollars + '.' + dimecents.toString().padStart(2, '0'));
        let updatedOdime = parseFloat(odimedollars + '.' + odimecents.toString().padStart(2, '0'));

        cid[2][1] = updatedDime;
        open[2][1] = updatedOdime;
    } 

    function minQuarter() 
    {
        if (cents > 0) 
        {
            cents -= 25;
        } else {
            dollars -= 1;
            cents += 75; // Set cents to 99 if it was 0
        }
        if (quartercents > 0) 
        {
            quartercents -= 25;
            oquartercents += 25;
        } else {
            quarterdollars -= 1; 
            quartercents += 75; // Set cents to 99 if it was 0
            oquartercents += 25;
        }

        // Joining dollars and cents back to form the updated penny value
        let updatedQuarter = parseFloat(quarterdollars + '.' + quartercents.toString().padStart(2, '0'));
        let updatedOQuarter = parseFloat(oquarterdollars + '.' + oquartercents.toString().padStart(2, '0'));

        cid[3][1] = updatedQuarter;;
        open[3][1] = updatedOQuarter;
    } 

    function minOne() {
        if (dollars > 0) {
            dollars -= 1;
            onedollars -= 1;
            oonedollars += 1;} 
        let updatedOne = parseFloat(onedollars);
        let updatedOone = parseFloat(oonedollars);

        cid[4][1] = updatedOne;
        open[4][1] = updatedOone;} 

    function minFive() 
    { 
        if (dollars > 0) 
        {
            dollars -= 5; 
            fivedollars -= 5;
            ofivedollars += 5;
        } 

        // Joining dollars and cents back to form the updated penny value
        let updatedfive = parseFloat(fivedollars);
        let updatedOfive = parseFloat(ofivedollars);

        cid[5][1] = updatedfive; 
        open[5][1] = updatedOfive;
    } 

    function minTen(){ 
        if (dollars > 0) 
        {
            dollars -= 10; 
            tendollars -= 10;
            otendollars += 10;
        } 

        // Joining dollars and cents back to form the updated penny value
        let updatedten = parseFloat(tendollars);
        let updatedOten = parseFloat(otendollars);

        cid[6][1] = updatedten;
        open[6][1] = updatedOten;
    } 

    function minTwenty()  { 
        if (dollars > 0) {
            dollars -= 20; 
            twentydollars -= 20;
            otwentydollars += 20;} 

        else {
            minTen()
        }
        

        // Joining dollars and cents back to form the updated penny value
        let updatedtwenty = parseFloat(twentydollars);
        let updatedOtwenty = parseFloat(otwentydollars);

        cid[7][1] = updatedtwenty;
        open[7][1] = updatedOtwenty;} 

    function minHundred() { 
        if (dollars > 0) {
            dollars -= 100; 
            hundreddollars -= 100;
            ohundreddollars += 100;} 

        // Joining dollars and cents back to form the updated penny value
        let updatedhundred = parseFloat(hundreddollars);
        let updatedOhundred = parseFloat(ohundreddollars);

        cid[8][1] = updatedhundred;
        open[8][1] = updatedOhundred;} 


}


function resetOpen() {
    opencents = 0; 
    onickcents = 0;
    odimecents = 0;
    oquartercents = 0;
    oonedollars = 0;
    ofivedollars = 0;
    otendollars = 0;
    otwentydollars = 0;
    ohundreddollars = 0;
    
    }

function displaycid()
{
    displaypenny.innerText = "PENNY: $" + `${cid[0][1]}`;
    displaynickel.innerText = "NICKEL: $" + `${cid[1][1]}`;
    displaydime.innerText = "DIME: $" + `${cid[2][1]}`;
    displayquarter.innerText = "QUARTER: $" + `${cid[3][1]}`;
    displayone.innerText = "ONE: $" + `${cid[4][1]}`;
    displayfive.innerText = "FIVE: $" + `${cid[5][1]}`;
    displayten.innerText = "TEN: $" + `${cid[6][1]}`;
    displaytwenty.innerText = "TWENTY: $" + `${cid[7][1]}`;
    displayhundred.innerText = "HUNDRED: $" + `${cid[8][1]}`;
    displaytotal.innerText = "AVAILABLE FUNDS: $" + `${funds}`;
}

function insufficientFunds() {
    change.innerText = "Status: INSUFFICIENT_FUNDS";}

function closedFunds() {
    const openDenominations = open.filter(item => item[1] > 0).sort((a, b) => b[1] - a[1]).map(item => `${item[0]}: ${"$" + (item[1])}`);
change.innerText = `Status: CLOSED ${openDenominations.join(' ')}`;  
console.log(`Status: CLOSED ${openDenominations.join(' ')}`);
displaycid();
}

function openFunds() { 
    const openDenominations = open.filter(item => item[1] > 0).sort((a, b) => b[1] - a[1]).map(item => `${item[0]}: ${"$" + (item[1])}`);
    change.innerText = `Status: OPEN ${openDenominations.join(' ')}`;
    console.log(`Status: OPEN ${openDenominations.join(' ')}`); 
    displaycid(); 
}