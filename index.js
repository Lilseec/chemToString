let updatedElem = document.getElementById('string')
let string = ''

let period = document.getElementById('PeriodicSysTable')
period.addEventListener("click", (event) => {
    let domElement = event.target
    if (!domElement.className.includes('chem-element') && domElement.className) {
        domElement = domElement.parentNode
    } 
    let element = domElement.getElementsByClassName('id')[0].textContent
    string += element
    updatedElem.textContent = string
})
