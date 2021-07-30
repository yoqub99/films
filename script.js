// let data = [
//     {
//         title: "Xiaomi Redmi Note 10S 6/64GB",
//         price: "2 948 000 сум",
//         imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
//     },
//     {
//         title: "Xiaomi Redmi Note 10S 6/64GB",
//         price: "2 948 000 сум",
//         imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
//     },
//     {
//         title: "Xiaomi Redmi Note 10S 6/64GB",
//         price: "2 948 000 сум",
//         imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
//     },
//     {
//         title: "Xiaomi Redmi Note 10S 6/64GB",
//         price: "2 948 000 сум",
//         imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
//     },
// ]
// data.forEach((params) => {
//     let newLi = document.createElement("li")
//     let newHeader = document.createElement("h3")
//     let newImg = document.createElement("img")
//     let newP = document.createElement("p")

//     newHeader.textContent = params.title
//     newP.textContent = params.price
//     newImg.setAttribute('src', params.imgSrc)
//     newImg.setAttribute('width', "200px")
//     newImg.setAttribute('height', "200px")
//     newImg.setAttribute('class', "img")

//     newLi.appendChild(newHeader);
//     newLi.appendChild(newP);
//     newLi.appendChild(newImg);

//     list.appendChild(newLi);
// })


// var films = [
//     {
//         id: 287947,
//         title: 'Shazam!',
//         poster: 'https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
//         overview:
//         'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
//         release_date: 1553299200,
//         genres: ['Action', 'Comedy', 'Fantasy'],
//     },
// ]

//  var films = [

// 	{
// 		id: '299537',
// 		title: 'Captain Marvel',
// 		poster: 'https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
// 		overview:
// 			'The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.',
// 		release_date: 1551830400,
// 		genres: ['Action', 'Adventure', 'Science Fiction'],
// 	}
	
// ]



// films.forEach((params) => {
//     let id = "ID:"
//     let idd = "genres:"
//     let taim = new Date (params.release_date)
//     let mon = taim.getDate()
//     let mon1 = taim.getMonth()
//     let mon2 = taim.getFullYear()
//     let mon4 = (`${mon}.${mon1}.${mon2}.`)
//     let newImg = document.createElement("img")
//     let newLi = document.createElement("li")
//     let newHeader = document.createElement("h3")
// 	let newP1 = document.createElement("p")
//     let newP = document.createElement("p")
//     let newWp = document.createElement("p")
//     let newday = document.createElement("p")
    
//     newHeader.textContent = params.title
//     newP.textContent = params.overview
// 	newP1.textContent = idd + params.genres
//     newWp.textContent = id + params.id
//     newday.textContent = mon4
//     newImg.setAttribute('src', params.poster)
//     newImg.setAttribute('width', "305px")
//     newImg.setAttribute('height', "420px")
//     newImg.setAttribute('class', "img")
//     newP.setAttribute('class', "p")
//     newWp.setAttribute('class', "p")
//     newday.setAttribute('class', "p")
//     newHeader.setAttribute('class', "p")
// 	newP1.setAttribute('class', "p")
    


//     newLi.appendChild(newImg);
//     newLi.appendChild(newHeader);
//     newLi.appendChild(newP);
//     newLi.appendChild(newWp);
//     newLi.appendChild(newday);
//     newLi.appendChild(newP);
// 	newLi.appendChild(newP1);
//     list.appendChild(newLi);
// })