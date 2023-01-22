function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML =date.getDate() + " - " + parseInt(date.getMonth()+1) +" - "+ date.getFullYear();
}
setInterval(updateDate,100)
onload = updateDate();

function changeColor(){
    let color = document.getElementById('colorInputColor').value;
    document.body.style.backgroundColor = color;
}
setInterval(setColor,100)