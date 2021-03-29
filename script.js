let text = document.getElementById('textData');
let tags = document.getElementsByClassName('tags')[0];

text.addEventListener('keyup', function(e) {
    let value = text.value.split(',').filter(val => val.trim() != '').map(val => val.trim());
    console.log(value)

    tags.innerHTML = '';
    if (value.length > 0) {
        value.forEach(data => {
            let tag = document.createElement('div');
            tag.classList.add('tag');
            tag.innerText = data;
            tags.appendChild(tag);
        });
    }

    if (e.key == 'Enter') {
        setTimeout((e) => {
            text.value = '';
        })
        randomSector();
    }
});

function randomSector() {
    let times = 20;
    let interval = setInterval(() => {
        let tag = getRandomTag()
        highlight(tag);

        setTimeout(() => {
            unhighlight(tag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            let randomTag = getRandomTag()
            highlight(randomTag);
        }, 100);
    }, times * 100);
}

function highlight(tag) {
    tag.classList.add('active');
}

function unhighlight(tag) {
    tag.classList.remove('active');
}

function getRandomTag() {
    let tags = document.querySelectorAll('.tag');

    return tags[Math.floor(Math.random() * tags.length)]
}