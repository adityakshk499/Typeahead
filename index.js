


const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = []
fetch(endpoint).then(response=> response.json()).then(data => cities.push(...data))


function removelist(){
    for(let nodes of suggestion.childNodes){
        suggestion.innerHTML=""
    }
}


function match(wordtomatch,cities){
    return cities.filter(place => {
        let regex = new RegExp(wordtomatch,'gi')
        return place.city.match(regex) || place.state.match(regex)
    })

}
function valuechanged(cityname){
    let arr = []
    arr=cityname.split(',')
  
    searchinput.value=`The city is ${arr[0]}, state is ${arr[1]} and the population of the city is ${arr[2]} `
    removelist()
}

function display(){
if(this.value.length>0){
let matcharray = match(this.value,cities)
const html = matcharray.map(place => {
    return `
    <a href="#" class="list-group-item list-group-item-action active" style="border=1px solid black" onClick="valuechanged(textContent)">${place.city},${place.state},${place.population}</a>
    `
}).join('')
suggestion.innerHTML=html}
else{
  
    removelist()
}
    
}


const suggestion = document.querySelector('.list-group')
const searchinput = document.querySelector('#readOnlyInput')
searchinput.addEventListener('keyup',display)
const theme1 = document.querySelector(".T1")
const theme2 = document.querySelector(".T2")
const theme3 = document.querySelector(".T3")


const css = document.querySelector("link")

theme1.addEventListener("click", () => {
css.href="style2.css"
})

theme2.addEventListener("click", () => {
    css.href="style1.css"
    })


 theme3.addEventListener("click", () => {
        css.href="style3.css"
        })

