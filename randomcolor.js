let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let colorElement=document.getElementById("bgContainer")
function colorClick(){
    let buttRand=Math.ceil(Math.random()*7)
    colorElement.style.backgroundColor=bgColorsArray[buttRand]
}