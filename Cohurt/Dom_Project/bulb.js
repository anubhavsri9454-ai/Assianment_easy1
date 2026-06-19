const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        btn.textContent = "OFF";
        flag = 1;
        console.log("Bulb On")
    }else{
        bulb.style.backgroundColor = "transparent";
        btn.textContent = "On"
        flag = 0;
        console.log("Bulb OFF")
    }
});


// if (flag === 0) {
//         bulb.style.backgroundColor = "yellow";
//         btn.textContent = "OFF";
//         flag = 1;
//     } else {
//         bulb.style.backgroundColor = "transparent";
//         btn.textContent = "ON";
//         flag = 0;
//     }