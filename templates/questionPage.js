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
let sendQuestion = (question,pos,len) => {
    $('#question-title').text = question.questionTitle;
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
        return `Question ${pos}/${len}`
    })
    $('div').attr('data-value',(pos/len)*100)
}
const timeout = async ms => new Promise(res => setTimeout(res, ms));
let next = false; // this is to be changed on user input

async function waitUserInput() {
    while (next === false) await timeout(50); // pauses script
    next = false; // reset var
}
async function awaitForSubmition(question) {
        sendQuestion(question,1,5);
        var trueAns;
        question.answers.map((item,index) => {
            if (item.isTrue) trueAns = index+1; 
        }) 
        $('.answers button').click(() => {
            next = true;
            if (this.id == `answer-${trueAns}`) {
                return true
            }
            else{
                return false
            }
            
        }) 
}
let startNewGame = async () => {
    for (question of data) {
        console.log(question);
        let result = await awaitForSubmition(question);
        if(result){
            alert('bruh')
        }
        else{
            alert('f u')
        }
    }
}
document.body.onload = () => {
    console.log('vllvlvllv')
    startNewGame();
}