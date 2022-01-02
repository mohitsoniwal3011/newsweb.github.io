let gnewsapi = 'c905d32521672586987bec31c87af27c'
let divs;
fetchNews().then(
    (data) => {
        divs = data
        createContainer(divs)
    }
).catch(
    ()=> document.getElementById('vertical').innerHTML = 'Some Error Occured!!'
)

async function fetchNews() {
    let url = `https://gnews.io/api/v4/search?q=all&token=${gnewsapi}`
    let response = await fetch(url)
    let newsObj = await response.json()

    let divs = [];
    let imageUrl, newsUrl, content, headline
    let articles = newsObj.articles
    articles.forEach((e) => {
        headline = e.title
        imageUrl = e.image;
        newsUrl = e.url
        content = e.content.split('[')[0]
        divs.push(createContainerBox(imageUrl, newsUrl, content, headline))
    })
    return divs;
}
function createContainerBox(imageUrl, url, content, headline) {
    let div = document.createElement('div')
    div.className = 'containerBox'
    //set up the image  
    let image = document.createElement('img')
    image.setAttribute('src', imageUrl)
    image.setAttribute('alt', 'Image')
    image.style.width = '100%'
    image.style.height = '50%'
    //create the link to the news 
    let link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('target', '_blank')
    link.innerHTML = `${headline} `
    //create the short description to show
    let paragraph = document.createElement('p')
    paragraph.innerHTML = content;
    div.appendChild(image)
    div.appendChild(link)
    div.appendChild(paragraph)
    div.style.border = '1px solid black '
    return div;
}

function createContainer(contArray) {
    let cont;
    let vertical = document.getElementById('vertical')

    if (window.matchMedia("(min-width: 900px)").matches) {
        //display 3 boxes per line if the size is greater the 900px
        while (contArray.length >= 3) {
            cont = document.createElement('div')
            cont.className = 'container'
            vertical.appendChild(appendChildToContainer(cont, contArray, 3))
        }
    }
    else if (window.matchMedia("(max-width: 899px) and (min-width: 650px)").matches) {
        //display 2 boxes per line if the size is between 600px to 899px 
        while (contArray.length >= 2) {
            cont = document.createElement('div')
            cont.className = 'container'
            vertical.appendChild(appendChildToContainer(cont, contArray, 2))
        }
    }
    else {
        //display only one box per line for small devices
        while (contArray.length >= 1) {
            cont = document.createElement('div')
            cont.className = 'container'
            vertical.appendChild(appendChildToContainer(cont, contArray, 1))
        }

    }
}

function appendChildToContainer(container, contArray, num) {
    for (let i = 0; i < num; i++) {
        const element = contArray.shift();
        container.appendChild(element)
    }
    return container;
}



