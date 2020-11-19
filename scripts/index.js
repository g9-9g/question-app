const  _init =  () => {
  var firebaseConfig = {
      apiKey: "AIzaSyDMa8pA5mGs42E5-YeHVnKoKXK6B07AY1I",
      authDomain: "question-app-1dd72.firebaseapp.com",
      databaseURL: "https://question-app-1dd72.firebaseio.com",
      projectId: "question-app-1dd72",
      storageBucket: "question-app-1dd72.appspot.com",
      messagingSenderId: "168720238212",
      appId: "1:168720238212:web:3b9f64c204d53b1a17a4d1",
      measurementId: "G-8GDS6RTYV3"
    };
    console.log('Hi')

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    model.checkUserState((user)=> {
      // check if user login or out
      view.setActiveScreen('homepage');
      if (user == null) view.setActiveScreen('login');
      else if (!user.emailVerified) view.setActiveScreen('send-verified-email',false);
    })
}

$(_init());