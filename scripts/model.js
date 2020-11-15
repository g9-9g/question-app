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