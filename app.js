const buttons = document.querySelectorAll("button")
const myh1 = document.getElementById("h1")
const clearBtn = document.getElementById("allclear")
const equalBtn = document.getElementById("equal")

equalBtn.addEventListener("click", function(){
    // we need to write the logic to basically calculate the result
    myh1.innerText = eval(myh1.innerText)
})

// console.log(buttons)
function getData(data)
{
    // console.log(data)
    // myh1.innerText = data
    if(myh1.innerText ==="0")
    {
        myh1.innerText = data
    }
    else 
    {
        myh1.innerText = myh1.innerText + data
    }
}

function addDecimal()
{
    // console.log("decimal button clicked")
    // logic where decimal should be added for the first time only, if there is no decimal present in the display
    if(!myh1.innerText.includes("."))
    {
        myh1.innerText = `${myh1.innerText}.`
    }
}

buttons.forEach(function(btn)
{
    // console.log(btn)
    if(btn.classList.length == 0)
    {
        // console.log(btn)
        // console.log(btn.innerText)
        btn.addEventListener("click", function()
        {
            // console.log(btn.innerText)
            // myh1.innerText = btn.innerText
            getData(btn.innerText)
        })
    }
    else if(btn.classList.contains("operator"))
    {
        btn.addEventListener("click", function()
        {
            getData(btn.innerText)
        })
    }
    else if(btn.classList.contains("decimal"))
    {
        btn.addEventListener("click", function()
        {
           addDecimal()
        })
    }
})

clearBtn.addEventListener("click", function()
{
    // logic is basically clear the complete dta
    myh1.innerText = "0"
})

const Clear = document.getElementById("clear")
Clear.addEventListener("click", function(){
    myh1.innerText = myh1.innerText.slice(0, -1)
})
