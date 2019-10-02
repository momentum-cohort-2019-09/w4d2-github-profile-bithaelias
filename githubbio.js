fetch('https://swapi.co/api/people/5/')
    .then(res => res.json())
    .then(data => {

        const title = document.querySelector('.title')
        title.innerText = data.name
        const nameBasics = document.querySelector('.name')
        nameBasics.innerText = `Name: ${data.name}`
        return data.films
    })

    .then(filmURLs => {
        const fetches = filmURLs.map(url => fetch(url))
        console.log(fetches)
        return Promise.all(fetches)
    })
    .then(responses => {
        console.log(responses)
        return Promise.all(responses.map(res => res.json()))
    })
    .then(dataArray => {
        console.log(dataArray)
        const ul = document.createElement('ul')
        for (let film of dataArray) {
            const li = document.createElement('li')
            li.innerText = film.title
            ul.appendChild(li)
        }
        const filmography = document.querySelector('.filmography')
        filmography.appendChild(ul)
    })


