let astronauta = document.getElementById('astronauta');

document.addEventListener('keypress', e => setAnimation(e.key))

let posX = 200
function setAnimation(key){
    switch(key){
        case 'w':
            astronauta.classList.add('pular');

            setTimeout(() => {
                astronauta.classList.remove('pular')
                astronauta.style.left = '200px'
            }, 2000)
            break;
        }
}