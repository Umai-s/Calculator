// function getHistory(){
//     // return  document.getElementById('history-value').innerText;    
// }
// function printHistory(num){
//     document.getElementById('history-value').innerText=num;  
// }
// function getOutput(){
//     return  document.getElementById('output-value').innerText;    
// // }
// function printOutput(num){
//     document.getElementById('output-value').innerText=getFormattedNumber(num);  
// }
// printOu/tput("2313");
// function getFormattedNumber(num){
//     var n= Number(num);
//     var value=n.toLocaleString("en");
//     return value;
// }
function getNum(num) {
    var result = document.getElementById('result');
    result.value +=num;
}
function clearResult() {
    var result = document.getElementById('result');
    result.value = "";
}
function getResult() {
    var result = document.getElementById('result');
    result.value = eval(result.value);
    // clearResult();
}
function back() {
    var value = document.getElementById("result").value;
    result.value = value.substr(0, value.length - 1);
}
function squarert() {
    var value = document.getElementById("result").value;
    result.value = Math.sqrt(result.value);
}
function square() {
    var value = document.getElementById("result").value;
    result.value = value * value;
}
