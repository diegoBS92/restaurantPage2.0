import './style.css'
import Icon from './headerBg.png' 
import Icon1 from './vegan.png' 
import Icon2 from './fish.png' 

const headerBg = new Image()
const menuVegan = new Image()
const menuFish = new Image()
headerBg.src = Icon
menuVegan.src = Icon1
menuFish.src = Icon2

const content = document.getElementById('content')
const header = document.createElement('div')
const headerText = document.createElement('div')
const mainBgText = document.createElement('div')

const main =document.createElement('div')
const side = document.createElement('div')
const mainBg = document.createElement('div')

header.classList.add('header')
main.classList.add('main')
side.classList.add('side')
mainBg.classList.add('mainBg')
mainBgText.classList.add('mainBgText')

const list = document.createElement('ul')
const lItemOne = document.createElement('il')
const lItemTwo = document.createElement('il')
const lItemThree = document.createElement('il')
lItemOne.classList.add('home')
lItemOne.classList.add('active')
lItemTwo.classList.add('menu')
lItemThree.classList.add('us')
lItemOne.textContent = 'home'
lItemTwo.textContent = 'menu'
lItemThree.textContent = 'about us'



list.appendChild(lItemOne)
list.appendChild(lItemTwo)
list.appendChild(lItemThree)
side.appendChild(list)

headerText.textContent = 'Mirth Cozy Kitchen'
header.appendChild(headerText)
mainBgText.textContent = 'Welcome to Mirth Cozy Kitchen, our goal is for you to try the best dishes the world of sea of stars have to offers. Get amazed by the cooking of chef Garl'
mainBg.appendChild(mainBgText)
main.appendChild(side)
main.appendChild(mainBg)


content.appendChild(header)
content.appendChild(main)

lItemOne.addEventListener("click", function() {
    mainBgText.innerHTML = ''
    mainBgText.textContent = 'Welcome to Mirth Cozy Kitchen, our goal is for you to try the best dishes the world of sea of stars have to offers. Get amazed by the cooking of chef Garl'
    lItemOne.classList.add('active')
    if(lItemTwo.classList.contains('active')) lItemTwo.classList.remove('active')
    if(lItemThree.classList.contains('active')) lItemThree.classList.remove('active')

})

lItemTwo.addEventListener("click", function() {
    mainBgText.innerHTML = ''
    const one = document.createElement('div')
    const two = document.createElement('div')
    one.innerHTML = '<p>Salad</p>'
    two.innerHTML = '<p>Fish</p>'
    one.appendChild(menuVegan)
    two.appendChild(menuFish)
    mainBgText.appendChild(one)
    mainBgText.appendChild(two)
    lItemTwo.classList.add('active')
    if(lItemOne.classList.contains('active')) lItemOne.classList.remove('active')
    if(lItemThree.classList.contains('active')) lItemThree.classList.remove('active')

})

lItemThree.addEventListener("click", function() {
    mainBgText.innerHTML = ''
    mainBgText.textContent = `contacs: garl: 709-4849, take out: 240-4353`
    lItemThree.classList.add('active')
    if(lItemTwo.classList.contains('active')) lItemTwo.classList.remove('active')
    if(lItemOne.classList.contains('active')) lItemOne.classList.remove('active')

})