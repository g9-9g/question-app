model = {}

model.quizLogic = () => {
    let data = [
        {
            "questionTitle": "What is this instrument?",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAB07LPkteouZ-DsSY4HNiDBgaHy66XdYkbQ&usqp=CAU",
            "answers": [
                {
                    "value" : "lmao",
                    "isTrue" : true
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                }
            ]
        },
        {
            "questionTitle": "What is this instrument2?",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAB07LPkteouZ-DsSY4HNiDBgaHy66XdYkbQ&usqp=CAU",
            "answers": [
                {
                    "value" : "lmao",
                    "isTrue" : true
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                }
            ]
        },
        {
            "questionTitle": "What is this instrument?3",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAB07LPkteouZ-DsSY4HNiDBgaHy66XdYkbQ&usqp=CAU",
            "answers": [
                {
                    "value" : "bruh",
                    "isTrue" : true
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                }
            ]
        },
        {
            "questionTitle": "What is this instrument?4",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAB07LPkteouZ-DsSY4HNiDBgaHy66XdYkbQ&usqp=CAU",
            "answers": [
                {
                    "value" : "bruh",
                    "isTrue" : true
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                }
            ]
        },
        {
            "questionTitle": "What is this instrument?4",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAB07LPkteouZ-DsSY4HNiDBgaHy66XdYkbQ&usqp=CAU",
            "answers": [
                {
                    "value" : "bruh",
                    "isTrue" : true
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                },
                {
                    "value" : "bruh",
                    "isTrue" : false
                }
            ]
        }
    ]
    let score = 0;
    let sendQuestion = (question,pos,len,score) => {
        $('#question-title').text(() => {
            return question.questionTitle;
        });
        $('#answer-1').text(() => {
            return question.answers[0].value;
        })
        $('#answer-2').text(() => {
            return question.answers[1].value;
        })
        $('#answer-3').text(() => {
            return question.answers[2].value;
        })
        $('#answer-4').text(() => {
            return question.answers[3].value;
        })
        
        $('.images img').attr('src',question.image)
        $('.question-container h4').text(() => {
            return `Question ${pos+1}/${len}`
        })
        $('#score').text(() => {
            return score;
        })
        let progress = (pos/(len-1))*100;
        console.log(progress)
        let bar1 = new ldBar('#progress');
        let bar2 = document.getElementById('progress').ldBar;
        bar1.set(progress);
        console.log('hiii')
    }
    
    function showQuestion(question,index) {
        if(index < data.length){
            console.log(index);
            sendQuestion(question,index,data.length);            
        }
        else{
            alert(`You've got ${score}`)
        }
    }
    let startNewGame = () => {
            // console.log(data[index]);
            let index = 0;
            showQuestion(data[index],index,showQuestion);
            
            $('.answers button').click( function() {
                var trueAns;
                data[index].answers.map((item,index) => {
                    if (item.isTrue) trueAns = index+1; 
                }) 
                index+=1;
                console.log(`${this.id} = ${trueAns}`)
                if (this.id == `answer-${trueAns}`) {
                    alert('true');
                    score += 10;
                    showQuestion(data[index],index);
                }
                else{
                    alert('false');
                    showQuestion(data[index],index);
                }
                
            }) 
    }
    
    console.log('vllvlvllv')
    startNewGame();
}


// 
// interact with database and server

model.curUser = {};

model.defaultUser = {
    
}

const supportedAccount = {
    'gaccount': new firebase.auth.GoogleAuthProvider(),
    'facebook':new firebase.auth.FacebookAuthProvider(),
    'twitter': new firebase.auth.TwitterAuthProvider(),
    'github':  new firebase.auth.TwitterAuthProvider(),
}

/* EVENT handler */

// return client state (init only)
model.checkUserState = (callback,opt = {}) => {
    firebase.auth().onAuthStateChanged((response) => {
        console.log(response);
        const user = response ? {
            id:response.uid,
            emailVerified:response.emailVerified,
            ...response.providerData[0],
        } : null
        model.curUser = user
        callback(user);
    })
}

/* basic method */ 
model.getUserInfo = (user_id, opt={})=>{
    const database = firebase.firestore();
    return database.collection('users').doc(user_id)
    .get(opt['getOption'])
    .then((data)=>{
        let user = data;
        console.log(user)
        // analyze user here

        if (opt['setCurrentUser']) model.curUser = user;
    })
}

model.login = ( __form = {email,username,pwd} , opt = {}) => {
    return firebase.auth().signInWithEmailAndPassword(__form['email'],__form['pwd'])
    .then(()=>{
        console.log(firebase.auth().currentUser.uid);
        return model.getUserInfo(firebase.auth().currentUser.uid)
    })
}

model.createUser = (_user = {email,username,pwd},opt = {}) => {
    const database = firebase.firestore();
    switch (opt['prototype']) {
        case 'email':
            return firebase.auth().createUserWithEmailAndPassword(_user['email'],_user['pwd'])
            .then(()=>{
                console.log(_user); 
                database.collection('users').doc(firebase.auth().currentUser.uid).set(_user)
                if (opt['autoLogin']) model.login({email:_user['email'],pwd:_user['pwd']});
                if (opt['updateProfile']) firebase.auth().currentUser.updateProfile({
                    displayName: _user.username,
                    photoURL: "https://petrotimes.vn/stores/news_dataimages/thuhoa/012015/14/09/1Anonymous1.jpg"
                })
            })
        case 'google-account': // updateProfile = true and auto login = true
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().useDeviceLanguage();
            return firebase.auth().signInWithPopup(provider)
            .then((res)=>{
                const token = res.credential.accessToken;
                const user = res.user;
                database.collection('users').doc(firebase.auth().currentUser.uid).set(user)
                console.log(token,user)
            })
        default:
            break;
    }
}

model.logout = (opt) => {
    firebase.auth().signOut()
    .then(() => {
        // Sign-out successful.
    })
}

model.sendVerification = () => {
    const actionCodeSettings = { // example
        url: 'https://www.example.com/cart?email=user@example.com&cartId=123',
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        handleCodeInApp: true
      };
    return firebase.auth().currentUser.sendEmailVerification()
}

model.setUserInfo = async (__change_info,opt={}) => {
    const database = firebase.firestore();
    if (__change_info.pwd) await firebase.auth().currentUser.updatePassword(__change_info.pwd)
    if (__change_info.email) await firebase.auth().currentUser.updateEmail(__change_info.email);
    if (__change_info.username) await firebase.auth().currentUser.updateProfile({displayName:__change_info.username});
    if (__change_info.photoURL) await firebase.auth().currentUser.updateProfile({photoURL:__change_info.photoURL});
    return await database.collection('users').doc(firebase.auth().currentUser.uid).set(__change_info);
}

model.uploadFile = (file,opt = {}) => {
    const filePath = `${opt.path}/${(opt.path || file.name)}`;
    const fileRef = firebase.storage().ref().child(filePath)
    return fileRef.put(file)
    .then(() => `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`)
}


model.bindAccount = (opt) => {
    const provider = supportedAccount[opt.prototype];
    if (opt.display == 'popup') {
        return auth.currentUser.linkWithPopup(provider)
        .then((res)=> {
            console.log(res);
        })
    } else if (opt.display == 'redirect') {
        return auth.currentUser.linkWithRedirect(provider)
        .then((res)=> {
            console.log(res);
            return auth.getRedirectResult();
        })
        .then((res)=>{
            if (res.credential) {
                console.log(result.credential,result.user)
            }
        })
    }
}

model.unbindAccount = (opt) => {

}