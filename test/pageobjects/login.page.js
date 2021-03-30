import Page from './page';
import ProfilePage from '../pageobjects/profile.page';


class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email') }
    get inputPassword () { return $('#normal_login_password') }
    get btnSubmit () { return $('.login-form-button') }

    open () {
        return super.open('/user/login');
    }

    setLogin (email){
        this.inputUsername.setValue(email)
    }

    setPassword(password){
        this.inputPassword.setValue(password)
    }

    clickSubmitButton(){
        this.btnSubmit.click();
    }

    submitButtonDisabled(){
        expect(this.btnSubmit).toBeDisabled();
    }






}

export default new LoginPage();
