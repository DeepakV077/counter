let count=0;
document.querySelector(".plus").addEventListener("click", function(){
    count++;
    document.getElementById("count").innerHTML = count;
});
document.querySelector(".minus").addEventListener("click", function(){
    if (count > 0) {
        count--;
        document.getElementById("count").innerHTML = count;
    }
});

document.querySelector("#new").addEventListener("click",function(){
    count=0;
    document.getElementById("count").innerHTML =count;
})