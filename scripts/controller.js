const controller = {};

const regex = {
    'email': [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Invalid email"],
    'pwd-lv1':[/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Password must have minimum eight characters, at least one letter and one number"],
    'pwd-lv2':[/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/,"Password must have minimum eight characters, at least one letter, one number and one special character"],
    'pwd-lv3':[/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Password must have minimum eight characters, at least one uppercase letter, one lowercase letter and one number"],
    'username':[/^[a-zA-Z0-9]+$/,"Username should contain only chars or and numbers"],
}

controller.validate = (type,__input,err_pos) => { 
    if (!regex[type]) throw "INVALID TYPE"
    return (!regex[type][0].test(String(__input))) ? view.setErrorMessage(regex[type][1],err_pos) : !view.setErrorMessage(null,err_pos);
}
controller.comparePWD = (pwd,cf_pwd,err_pos) => (pwd === cf_pwd) ? !view.setErrorMessage(null,err_pos) : view.setErrorMessage('Confirm password must be the same as password',err_pos);

// Email only
controller.login = (_form = {email,pwd}) => {
    if (!controller.validate('email',_form.email,null) || !controller.validate('pwd-lv1',_form.pwd,null)) return;
    return model.login(_form)
    .catch((err)=> {
        console.log(err);
        view.setErrorMessage(err.message,'.err-global-1');
    })
}
// register
controller.register = (_form = {email,pwd,username,cf_pwd}) => {
    if (!controller.validate('email',_form.email,null) || !controller.validate('pwd-lv1',_form.pwd,null) || !controller.validate('username',_form.username,null) || !controller.comparePWD(_form.pwd,_form.cf_pwd,null)) return;
    model.createUser(_form,{
        prototype:'email',
        autoLogin: true,
        updateProfile: true
    })
    .catch((err)=> {
        console.log(err);
        view.setErrorMessage(err.message,".err-global-2");
    })
}

controller.uploadFiles = (files,opt={}) => {
    if (!files[0]) return;
    const curFile = files[0];
    return model.uploadFile(curFile,{path:'images'})
    .catch((err)=>{
        view.setErrorMessage(err.message,".err-display-photoURL");
    })
}

controller.updateProfile = (_form ,opt={}) => {
    if (!controller.validate('email',_form.email,null) || !controller.validate('pwd-lv1',_form.pwd,null) || !controller.validate('username',_form.username,null) || !controller.comparePWD(_form.pwd,_form.cf_pwd,null)) return;
    delete _form['cf-pwd'];
    model.setUserInfo(_form)
    .catch((err)=>{
        console.log(err);
        view.setErrorMessage(err.message,'.change-err');
    })
}