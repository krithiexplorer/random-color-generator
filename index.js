const containerEl = document.querySelector(".container")
const formEl = document.getElementById('form')
let userReq;

function getValue() {
  // Get the input element
  var input = document.getElementById("numberOfColors");

  // Get the input value
  var inputValue = input.value;

  // Store the input value in the global variable
  userReq = parseInt(inputValue);
}

formEl.addEventListener('submit',function(event)
{
    event.preventDefault()
    getValue()
    for(let index=0; index < userReq; index++)
    {
        const colorContainerEl = document.createElement('div')
        colorContainerEl.classList.add('color-container','rounded-lg','shadow')
        containerEl.appendChild(colorContainerEl)
    }

    const colorContainerEls = document.querySelectorAll(".color-container",".rounded-lg",".shadow")
    appendColorcode()
    function appendColorcode()
    {
        colorContainerEls.forEach((colorcontainerEl) =>
        {
            const newColorCode = getColorCode()
            colorcontainerEl.style.backgroundColor = '#' + newColorCode
            colorcontainerEl.innerText = '#'+ newColorCode
        }

        )
    }

}

)
function getColorCode()
{
    const chars = '0123456789abcdef'
    const colorCodeLength = 6
    let colorCode = ''
    for(let index=0; index<colorCodeLength; index++)
    {
        const randomNum = Math.floor(Math.random()*chars.length)
        colorCode += chars.substring(randomNum,randomNum+1);
    }
    return colorCode   
}
