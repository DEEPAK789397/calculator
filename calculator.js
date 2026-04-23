let input = document.getElementById("input");
let buttons = document.querySelectorAll(".btn");
let resultBtn = document.getElementById("result");
let clearBtn = document.getElementById("btn_clr");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        input.value+=button.innerText;
    });
});
clearBtn.addEventListener("click",()=>{
    input.value=""
})
resultBtn.addEventListener("click",()=>{
    try{
        input.value=eval(input.value);
        input.classList.add("result-animate");
        setTimeout(() => {
            input.classList.remove("result-animate");
        }, 200);
    }
    catch{
        input.value="error"
    }
})