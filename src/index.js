console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let containerUl = document.querySelector("div#dog-image-container")

 fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then((response) => {//The second callback has the actual response

    response.message.forEach(function(gg) {//forEach to iterate the array

        let blankLi = document.createElement(`li`)//Creating a blank li element
        let blankImg = document.createElement(`img`)//Creating a blank img element
        
        blankImg.src = gg//Sourcing blank image
        blankLi.append(blankImg)//Zazzing it up
        
        containerUl.append(blankLi)//Zazzing it up
    
    })
 
})

let dogBreed = document.querySelector("ul#dog-breeds")

fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then((response) => {
    
    console.log('breed')
    response.message.forEach(function(breed){
        let blankLi = document.createElement(`li`)

        blankLi.src = breed

        blankLi.append(breed)
     })
 })