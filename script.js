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


// ====================================================

// var films = [
// 	{
// 		id: '287947',
// 		title: 'Shazam!',
// 		poster: 'https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
// 		overview:
// 			'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
// 		release_date: 1553299200,
// 		genres: ['Action', 'Comedy', 'Fantasy'],
// 	},
// 	{
// 		id: '299537',
// 		title: 'Captain Marvel',
// 		poster: 'https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
// 		overview:
// 			'The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.',
// 		release_date: 1551830400,
// 		genres: ['Action', 'Adventure', 'Science Fiction'],
// 	},
// 	{
// 		id: '522681',
// 		title: 'Escape Room',
// 		poster: 'https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg',
// 		overview:
// 			'Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.',
// 		release_date: 1546473600,
// 		genres: ['Thriller', 'Action', 'Horror', 'Science Fiction'],
// 	},
// 	{
// 		id: '166428',
// 		title: 'How to Train Your Dragon: The Hidden World',
// 		poster: 'https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg',
// 		overview:
// 			'As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.',
// 		release_date: 1546473600,
// 		genres: ['Animation', 'Family', 'Adventure'],
// 	},
// 	{
// 		id: '450465',
// 		title: 'Glass',
// 		poster: 'https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg',
// 		overview:
// 			'In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.',
// 		release_date: 1547596800,
// 		genres: ['Documentary'],
// 	},
// 	{
// 		id: '495925',
// 		title: "Doraemon the Movie: Nobita's Treasure Island",
// 		poster: 'https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg',
// 		overview:
// 			"The story is based on Robert Louis Stevenson's Treasure Island novel.",
// 		release_date: 1520035200,
// 		genres: ['Animation'],
// 	},
// 	{
// 		id: '329996',
// 		title: 'Dumbo',
// 		poster: 'https://image.tmdb.org/t/p/w500/deTOAcMWuHTjOUPQphwcPFFfTQz.jpg',
// 		overview:
// 			'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.',
// 		release_date: 1553644800,
// 		genres: ['Adventure', 'Family', 'Fantasy'],
// 	},
// 	{
// 		id: '299536',
// 		title: 'Avengers: Infinity War',
// 		poster: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
// 		overview:
// 			'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
// 		release_date: 1524618000,
// 		genres: ['Adventure', 'Action', 'Science Fiction'],
// 	},
// 	{
// 		id: '458723',
// 		title: 'Us',
// 		poster: 'https://image.tmdb.org/t/p/w500/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg',
// 		overview:
// 			'Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.',
// 		release_date: 1552521600,
// 		genres: ['Documentary', 'Family'],
// 	},
// 	{
// 		id: '424783',
// 		title: 'Bumblebee',
// 		poster: 'https://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg',
// 		overview:
// 			'On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.',
// 		release_date: 1544832000,
// 		genres: ['Action', 'Adventure', 'Science Fiction'],
// 	},
// 	{
// 		id: '920',
// 		title: 'Cars',
// 		poster: 'https://image.tmdb.org/t/p/w500/qa6HCwP4Z15l3hpsASz3auugEW6.jpg',
// 		overview:
// 			"Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
// 		release_date: 1149728400,
// 		genres: ['Animation', 'Adventure', 'Comedy', 'Family'],
// 	}
// ]


// films.forEach((params) => {
//     let id = "ID:"
//     let taim = new Date (params.release_date)
//     let mon = taim.getDate()
//     let mon1 = taim.getMonth()
//     let mon2 = taim.getFullYear()
//     let mon4 = (`${mon}.${mon1}.${mon2}.`)
//     let newImg = document.createElement("img")
//     let newLi = document.createElement("li")
//     let newHeader = document.createElement("h3")
//     let newP = document.createElement("p")
//     let newWp = document.createElement("p")
//     let newday = document.createElement("p")
    
//     newHeader.textContent = params.title
//     newP.textContent = params.overview
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
    


//     newLi.appendChild(newImg);
//     newLi.appendChild(newHeader);
//     newLi.appendChild(newP);
//     newLi.appendChild(newWp);
//     newLi.appendChild(newday);
//     newLi.appendChild(newP);
//     list.appendChild(newLi);
// })