const parent = document.getElementById("container")

const ul = document.createElement("ul")

const list = ["Honda" , "Toyota" , "Ford" , "BMW" , "Mercedes"]


list.forEach(item =>{
    const li = document.createElement("li")
    li.innerText = item

    // append

    ul.appendChild(li)
})

    // append 

    parent.appendChild(ul)
