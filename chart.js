// Initialize Cloud Firestore through Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDMa8pA5mGs42E5-YeHVnKoKXK6B07AY1I",
//   authDomain: "question-app-1dd72.firebaseapp.com",
//   databaseURL: "https://question-app-1dd72.firebaseio.com",
//   projectId: "question-app-1dd72",
//   storageBucket: "question-app-1dd72.appspot.com",
//   messagingSenderId: "168720238212",
//   appId: "1:168720238212:web:3b9f64c204d53b1a17a4d1",
//   measurementId: "G-8GDS6RTYV3"
// };
// firebase.initializeApp(firebaseConfig);

const sortedResults = (doc) => {
    let scores = [];
    let players = [];
    for (const key in doc) {
      players.push(key);
      scores.push(doc[key]);
    }
    scores.sort(function (a,b) {return b - a});
    let top5scores = []; 
    let top5players = [];
    let i = 0;
    while (i < 5) {
      top5scores.push(scores[i]);
      for (let j = 0; j < players.length; j++) {
        if (doc[players[j]] === scores[i]) {
          if (top5players.includes(players[j])) {
            continue;
          }
          top5players.push(players[j]);
        }
      }
      i++;
    }
    document.getElementById('show-results').innerHTML = '';
    for (i = 0; i < top5scores.length; i++) {
      document.getElementById('show-results').innerHTML +=
        `<tr>
        <th scope="row">${i + 1}</th>
        <td>${top5players[i]}</td>
        <td>${top5scores[i]}</td>
      </tr>`
    }
  }

const map = {"name1" : 1, "name2" : 2, "name3": 1300, "name4": 1300, "name5": 20, "name6": 21,
"name7": 22, "name8": 23, "name9": 270, "name10": 100};
sortedResults(map);
