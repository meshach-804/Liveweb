let myNum = document.getElementById("myNum").value;
console.log(myNum);
let compNum = Math.floor(Math.random() * 10) + 1;
 document.getElementById("MessageBtn").onclick = myMessage;

let myMessage = () => {
    if(myNum != 1) {
        alert("Hello");
    }

}