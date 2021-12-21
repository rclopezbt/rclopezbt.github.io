var httpRequest;
notify();
// document.getElementById("ajaxButton").addEventListener('click', makeRequest);

// function makeRequest() {
//     httpRequest = new XMLHttpRequest();

//     if (!httpRequest) {
//         alert('Giving up :( Cannot create an XMLHTTP instance');
//         return false;
//     }
//     httpRequest.onreadystatechange = alertContents;
//     httpRequest.open('GET', 'test.html');
//     httpRequest.send();
// }

// function alertContents() {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//         if (httpRequest.status === 200) {
//             alert(httpRequest.responseText);
//         } else {
//             alert('There was a problem with the request.');
//         }
//     }
// }

async function notify() {
    // // init.js
    // if (Notification.permission === 'denied') {
    //     // Pede ao usuário para utilizar a Notificação Desktop
    //     await Notification.requestPermission();
    //     spawnNotification('YOU TOTAL LOSER. How could you do this to me?', null, 'Emogotchi says');
    // } else {
    //     await Notification.requestPermission();
    //     spawnNotification('YOU TOTAL LOSER. How could you do this to me?', null, 'Emogotchi says');
    // }

    if (Notification.permission !== 'granted') {

        Notification.requestPermission().then(function (permission) {
            console.log(permission);
            spawnNotification('YOU TOTAL LOSER. How could you do this to me?', null, 'Emogotchi says');
        });

    }
}

function spawnNotification(theBody, theIcon, theTitle) {
    var options = {
        body: theBody,
        icon: theIcon
    }
    var n = new Notification(theTitle, options);
    // setTimeout(n.close.bind(n), 4000);
}