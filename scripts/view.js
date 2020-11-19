view = {};

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

view.setActiveScreen = (screenName,clear=true) => {
    if (clear) $("#app-container").empty();
    switch (screenName) {
        case 'quizPage':
            $('body').html(() => {
                return components.quizPage;
            })
            view.startNewGame();
        break;
        case "login":
            $(()=> {
                // init element
                $("#app-container").append(components.loginPage)
                // event
                $('#login-with-email').click((e)=> {
                    const email = $("#email-inp").val();
                    const pwd = $("#pwd-inp").val();
                    console.log(email,pwd)
                    controller.login({
                        email:email,
                        pwd:pwd,
                    })
                })
                $('#login-with-gaccount').click((e)=> {
                    model.createUser(null,{prototype:'google-account'})
                })
                $('#to-register').click(()=>view.setActiveScreen('register'));
                // err-event (thay event click thanh event khac)
                $('#email-inp').keyup(()=>{
                    controller.validate('email',$('#email-inp').val(),'.err-email-inp')
                    return true;
                });
                $('#pwd-inp').keyup(()=>{
                    controller.validate('pwd-lv1',$('#pwd-inp').val(),'.err-pwd-inp')
                    return true;
                });
            })
            break;
        case "register":
            $(()=> {
                // init element
                $("#app-container").append(components.registerPage)
                // event
                $('#register-with-email').click((e)=> {
                    const email = $("#email-inp").val();
                    const pwd = $("#pwd-inp").val();
                    const username = $('#username-inp').val();
                    const cf_pwd = $('#cf-pwd-inp').val();
                    controller.register({
                        email:email,
                        pwd:pwd,
                        cf_pwd:cf_pwd,
                        username:username,
                    })
                })
                $('#register-with-gaccount').click((e)=> {
                    console.log(e);
                    model.createUser(null,{prototype:'google-account'})
                })
                // err-event (thay event click thanh event khac)
                $('#email-inp').keyup(()=>{
                    controller.validate('email',$('#email-inp').val(),'.err-email-inp')
                    return true;
                });
                $('#pwd-inp').keyup(()=>{
                    controller.validate('pwd-lv1',$('#pwd-inp').val(),'.err-pwd-inp')
                    return true;
                });
                $('#username-inp').keyup(()=>{
                    controller.validate('username',$('#username-inp').val(),'.err-username-inp')
                    return true;
                })
                $('#cf-pwd-inp').keyup(()=>{
                    controller.comparePWD($('#pwd-inp').val(),$('#cf-pwd-inp').val(),'.err-cf-pwd-inp')
                    return true;
                })
            })        
            break;
        case 'send-verified-email':
            $(()=> {
                $('#app-container').append(components.verifiedEmail);
                $('#send-verification-mail').click((e)=> {
                    // send email ver
                    model.sendVerification()
                    .then(()=>{
                        // done
                        console.log('done!!!')
                    })
                    .catch((err) => {
                        view.setErrorMessage(err,'.err-veri');
                    })
                })
            })
            break;
        case 'homepage':
            $(()=> {
                // init element
                $("#app-container").prepend(components.homepage);
                // event
                console.log(model.curUser);
            })

            break;
        case 'userInfo':
            $(()=> {
                // init element
                $("#app-container").append(components.userInfo(
                    model.curUser.displayName,
                    model.curUser.email,
                    '............',
                    model.curUser.photoURL
                ))
                // event
                $('#save-change').click((e)=>{
                    e.preventDefault();   
                    controller.uploadFiles( $('#display-photoURL > input')[0].files)
                    .then((url) => {
                        controller.updateProfile({
                            username:$('#display-username').html(),
                            email:$('#display-email').html(),
                            pwd:$('#display-pwd').html(),
                            cf_pwd:$('#display-cf-pwd').html(),
                            photoURL:url
                        });
                    })
                })
                // err
                $('#display-email').keyup(()=>{
                    controller.validate('email',$('#display-email').html(),'.err-display-email')
                    return true;
                });
                $('#display-pwd').keyup(()=>{
                    controller.validate('pwd-lv1',$('#display-pwd').html(),'.err-display-pwd')
                    return true;
                });
                $('#display-username').keyup(()=>{
                    controller.validate('username',$('#display-username').html(),'.err-display-username')
                    return true;
                })
                $('#display-cf-pwd').keyup(()=>{
                    controller.comparePWD($('#display-pwd').html(),$('#display-cf-pwd').html(),'.err-display-cf-pwd')
                    return true;
                })
                console.log(model.curUser);
            })

            break;
        default:
            break;
    }

}

view.setErrorMessage = (errMsg,pos,clr=true) => {
    if (clr) $(`${pos}`).empty();
    $(`${pos}`).html(errMsg);
    return false;
}

let score = 0;
view.sendQuestion = (question,pos,len) => {
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
view.showQuestion = (question,index,data) => {
    if(index < data.length){
        console.log(index);
        view.sendQuestion(question,index,data.length);            
    }
    else{
        alert(`You've got ${score}`)
    }
}
view.startNewGame = () => {
    // console.log(data[index]);
    let index = 0;
    view.showQuestion(data[index],index,data);
    
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
            
            view.showQuestion(data[index],index,data);
        }
        else{
            alert('false');
            view.showQuestion(data[index],index,data);
        }
        
    }) 
}