components = {}

components.quizPage = `
<div class="container-fluid">
            <div class="question-container container-fluid row ">
                <!-- <div class="col-1">| |</div> -->
                <h4 class="text-center col-12">Question 5/10</h4>
                <h1 class="col-12 text-center" id="question-title">What is this instrument?</h1>

            </div>
            <div class="row">
                <div class="col-lg-2 time-container d-flex align-items-center justify-content-center">
                    <div id="progress" class=" label-center time d-flex align-items-center justify-content-center" data-preset="bubble" data-type="stroke" style="width: 100%; height: 200px" stroke-width="100px">
                        <!-- <div class="ldBar "  data-value="0" ></div> -->
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="images">
                        <img src="https://via.placeholder.com/1080x350" alt="" style="height: 350px; max-width: 100%;">
                    </div>
                </div>
                <div class="col-lg-2 d-flex align-items-center justify-content-center"> 
                    <div class="score-container d-flex align-items-center justify-content-center">
                      <h1 id="score">100+</h1>
                    </div>
                </div>
            </div>
            <div class="row container-fluid mt-4">
                <div class="col-lg-6">
                    <div class="answers row mb-2"><button class="btn ans-btn" id="answer-1">bruh</button></div>
                    <div class="answers row mb-2"><button class="btn ans-btn" id="answer-2">bruh</button></div>
                </div>
                <div class="col-lg-6">
                    <div class="answers row mb-2"><button class="btn ans-btn" id="answer-3">bruh</button></div>
                    <div class="answers row mb-2"><button class="btn ans-btn" id="answer-4">bruh</button></div>
                </div>                
            </div>
        </div>`