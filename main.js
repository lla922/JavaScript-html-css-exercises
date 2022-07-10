//document.getElementById("count-el").innerText = 11



let countEl =  document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let purchaseEl= document.getElementById("error")

let count = 0;

function increment() {

    count++;
    countEl.textContent = count;
    console.log(count);

}

function again(){
    console.log("pls try again later..");
}

function save() {
    
    console.log(count);
    prev()
    
}

function prev(){
    saveEl.textContent = saveEl.textContent + count + " - "
    count = 0;
    countEl.textContent = 0;
     
}



