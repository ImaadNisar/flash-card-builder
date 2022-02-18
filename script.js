let fronts = JSON.parse(localStorage.getItem('fronts')) || [];
let backs = JSON.parse(localStorage.getItem('backs')) || [];
function createFlashcard()
{
    var front_val = document.getElementById('front').value;
    var back_val = document.getElementById('back').value;
    if (front_val == '' || back_val == '') {
        alert('Please fill both fields')
    }else{
        fronts.push(front_val);
        backs.push(back_val);
        localStorage.setItem('fronts', JSON.stringify(fronts));
        localStorage.setItem('backs', JSON.stringify(backs));
        document.getElementById('front').value = ''
        document.getElementById('back').value = ''
        alert('Flashcard Created');
                

        }
}



function deleteFlashcard()
{
    if (fronts.length==0){
        alert("You currently have no flashcards to delete")
    }else{
        var result = confirm("Are you sure you want to delete");
        if (result) {
            fronts = [];
            backs = [];
            localStorage.removeItem('fronts');
            localStorage.removeItem('backs')
            alert('All Flashcards Deleted')
        }
    }
    
            
}


var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
});


var cardnum = 0
function nextFront() {
    if (cardnum == fronts.length) {
        cardnum = 0
    }
    document.getElementById('front_text').innerHTML = fronts[cardnum]
    document.getElementById('back_text').innerHTML = backs[cardnum]
    cardnum ++
}

// Not working at the moment :/
// var newlistfronts = []
// var newlistbacks = []
// function nextFront() {
//     if (fronts.length == 0) {
//         var tempf = newlistfronts
//         fronts = tempf.reverse()
//         var tempb = newlistbacks
//         backs = tempb.reverse()
//         newlistfronts = []
//         newlistbacks = []
//     }
//     var front = fronts.pop();
//     var back = backs.pop();
//     document.getElementById('front_text').innerHTML = front
//     document.getElementById('back_text').innerHTML = back
//     newlistfronts.push(front)
//     newlistbacks.push(back)
// }

function checkList() {
    if(fronts.length==0) {
        alert("You currently have no flashcards")
    }else{
        window.location.href = 'flashcards.html';
    }
}