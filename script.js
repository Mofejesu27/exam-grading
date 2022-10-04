function grade(){
    let result;
let score = document.getElementById('score').value
if(score >= 70 && score <= 100){
    result = ('A');
}
else if(score >= 60 && score <= 69 ){
    result = ('B');
}
else if(score >= 50 && score <= 59){
    result = ('C');
}
else if(score >= 45 && score <= 49){
    result = ('D');
}
else if(score >= 40 && score <= 44){
    result = ('E');
}
else{
    result = ('F');
}
document.getElementById("result").innerHTML= result
}