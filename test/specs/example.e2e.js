import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Authorization', () => {
    beforeEach( () => {
        LoginPage.open();
    })

    it('user log in with valid data', () => {

        LoginPage.setLogin('Anyrose823@gmail.com');
        LoginPage.setPassword('Dream2020');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });

    it('Submit button is disabled if login and password absent', () => {

        LoginPage.submitButtonDisabled();

    })
    afterEach(()=> {
        browser.execute('window.localStorage.clear()');
    });
});


