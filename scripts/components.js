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



// 
components.loginPage = `
    <div class="loginPage">
        <input type="email" id="email-inp">
        <div class="err-email-inp"></div>
        <input type="password" id="pwd-inp">
        <div class="err-pwd-inp"></div>
        <button id="login-with-email">Log in with email</button>
        <div class="err-global-1"></div>
        <button id="login-with-gaccount">Login with google account</button>
        <button id="to-register">register</button>
    </div>
`
components.registerPage = `
    <div class="registerPage">
        <input type="email" id="email-inp">
        <div class="err-email-inp"></div>
        <input type="password" id="pwd-inp">
        <div class="err-pwd-inp"></div>
        <input type="password" id="cf-pwd-inp">
        <div class="err-cf-pwd-inp"></div>
        <input type="text" id="username-inp">
        <div class="err-username-inp"></div>
        <button id="register-with-email">Register with email</button>
        <div class="err-global-2"></div>
        <button id="register-with-gaccount">Register with google account</button>
    </div>
`

components.verifiedEmail = `
    <div class="veri-container">
        <div>Please verified your email</div>
        <div class="err-veri"></div>
        <button id='send-verification-mail'>Send verification</button>
    </div>
`

components.userInfo = (username,email,pwd,photoURL) => {
 return `
 <div class="userInfo-container">
 <!-- https://petrotimes.vn/stores/news_dataimages/thuhoa/012015/14/09/1Anonymous1.jpg -->
 <form id="user-info">
     <div contenteditable="true" id="display-username" class="display-container">${username}</div>
     <div class="err-display-username"></div>
     <div contenteditable="true" id="display-email" class="display-container">${email}</div>
     <div class="err-display-email"></div>
     <div contenteditable="true" id="display-pwd" class="display-container">${pwd}</div>
     <div class="err-display-pwd"></div>
     <div contenteditable="true" id="display-cf-pwd" class="display-container">${pwd}</div>
     <div class="err-display-cf-pwd"></div>
     <div id="display-photoURL">
         <img src="${photoURL}" alt="">
         <div class="err-display-photoURL"></div>
         <input type="file">
     </div>
     
     <div class="change-err"></div>
     <button id="save-change">Save change</button>
 </form>
</div>
`
} 