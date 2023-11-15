//const key='bjkNSYe1RndFzKefwCSWp7YqOYcvSkgM'
// fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`)
// .then(res=>res.json())
// .then(data=>{
//    //console.log(data)
//     for(let i=0; i<data.results.books.length;i++){
//         let getdata=document.getElementById("getdata")
//         let c=document.createElement('div')
//         c.className='c'
//         c.innerHTML=
//         `
//         <img src="${data.results.books[i].book_image}">
//         <h4>${data.results.books[i].title}</h4>`
//         getdata.appendChild(c)

//     }
    
// })


//.catch((error)=>console.error(`the error is ${error}`))

fetch(`https://655250c85c69a7790329e13e.mockapi.io/signin/books`)
.then(res=>res.json())
.then(data=>{
   //console.log(data)
    for(let i=0; i<data.length;i++){
        let getdata=document.getElementById("getdata")
        let c=document.createElement('div')
        c.className='c'
        c.innerHTML=
        `
        <img src="${data[i].image}">
        <h4>${data[i].title}</h4>
        `
        getdata.appendChild(c)

    }
    
})