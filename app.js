const block = document.querySelector(".block")
let positionX = 0
let positionY = 0

const move = ( )=> {
    if(positionX <= 440 && positionY===0){
        positionX += 16
        block.style.left = `${positionX}px`
        setTimeout( move , 200)
    } else if (positionX >= 440 && positionY <= 440) {
        positionY += 16
        block.style.top = `${positionY}px`
        setTimeout( move , 200)
    }else if (positionX > 0 && positionY >= 440) {
        positionX -= 16;
        block.style.left = `${positionX}px`;
        setTimeout(move, 200)
    } else if (positionX === 0 && positionY > 0) {
        positionY -= 16;
        block.style.top = `${positionY}px`;
        setTimeout(move, 200)
    }
}

move()



let time = 0;

let time__counter = setInterval (
    function () {
        time++;
        console.log('Вы пробыли ' + time + ' секунд');
        if (time === 60) {
            clearInterval (time__counter);
        }
    }, 1000);