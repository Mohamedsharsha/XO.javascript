let turn = 'x'
let title = document.getElementById('dashboard')
let sqr = []

function game_turn(id) {
    let ele = document.getElementById(id)
    if (turn === 'x' && ele.innerHTML === '') {
        ele.innerHTML = 'x'
        turn = 'o'
        title.innerHTML = 'o'
    }
    else if (turn === 'o' && ele.innerHTML === '') {
        ele.innerHTML = 'o'
        turn = 'x'
        title.innerHTML = "x"
    }
    winner()
}


function winner() {
    for (let i = 1; i <= 9; i++) {
        sqr[i] = document.getElementById('item' + i).innerHTML
    }
    if (sqr[1] == sqr[2] && sqr[1] == sqr[3] && sqr[2] == sqr[3] && sqr[3] != '') {
        title.innerHTML = `${sqr[1]} winner`
        document.getElementById('item'+1).style.backgroundColor='#000'
        document.getElementById('item'+2).style.backgroundColor='#000'
        document.getElementById('item'+3).style.backgroundColor='#000'
        setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if (sqr[4] == sqr[5] && sqr[4] == sqr[6] && sqr[5] == sqr[6] && sqr[6] != '') {
        title.innerHTML = `${sqr[4]} winner`
        document.getElementById('item'+4).style.backgroundColor='#000'
        document.getElementById('item'+5).style.backgroundColor='#000'
        document.getElementById('item'+6).style.backgroundColor='#000'
         setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if (sqr[7] == sqr[8] && sqr[7] == sqr[9] && sqr[8] == sqr[9] && sqr[9] != '') {
        title.innerHTML = `${sqr[8]} winner`
        document.getElementById('item'+7).style.backgroundColor='#000'
        document.getElementById('item'+8).style.backgroundColor='#000'
        document.getElementById('item'+9).style.backgroundColor='#000'
         setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if (sqr[1] == sqr[4] && sqr[1] == sqr[7] && sqr[4] == sqr[7] && sqr[7] != '') {
        title.innerHTML = `${sqr[1]} winner`
        document.getElementById('item'+1).style.backgroundColor='#000'
        document.getElementById('item'+4).style.backgroundColor='#000'
        document.getElementById('item'+7).style.backgroundColor='#000'
         setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if (sqr[2] == sqr[5] && sqr[2] == sqr[8] && sqr[5] == sqr[8] && sqr[8] != '') {
        title.innerHTML = `${sqr[5]} winner`
        document.getElementById('item'+2).style.backgroundColor='#000'
        document.getElementById('item'+5).style.backgroundColor='#000'
        document.getElementById('item'+8).style.backgroundColor='#000'
         setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if (sqr[3] == sqr[6] && sqr[3] == sqr[9] && sqr[6] == sqr[9] && sqr[9] != '') {
        title.innerHTML = `${sqr[6]} winner`
        document.getElementById('item'+3).style.backgroundColor='#000'
        document.getElementById('item'+6).style.backgroundColor='#000'
        document.getElementById('item'+9).style.backgroundColor='#000'
         setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)

    }
    else if (sqr[1] == sqr[5] && sqr[1] == sqr[9] && sqr[5] == sqr[9] && sqr[9] != '') {
        title.innerHTML = `${sqr[9]} winner`
        document.getElementById('item'+1).style.backgroundColor='#000'
        document.getElementById('item'+5).style.backgroundColor='#000'
        document.getElementById('item'+9).style.backgroundColor='#000'
         setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)

    }
    else if (sqr[3] == sqr[5] && sqr[3] == sqr[7] && sqr[5] == sqr[7] && sqr[7] != '') {
        title.innerHTML = `${sqr[3]} winner`
        document.getElementById('item'+3).style.backgroundColor='#000'
        document.getElementById('item'+5).style.backgroundColor='#000'
        document.getElementById('item'+7).style.backgroundColor='#000'
         setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)

    }
   

}