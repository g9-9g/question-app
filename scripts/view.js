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

view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'quizPage':
            $('body').html(() => {
                return components.quizPage;
            })
            view.startNewGame();
        break;
    }
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