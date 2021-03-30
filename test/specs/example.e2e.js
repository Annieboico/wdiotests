import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Authorization', () => {
    it('user log in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('Anyrose823@gmail.com');
        LoginPage.setPassword('Dream2020');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });

    it('Submit button is disabled if login and password absent', () => {
        LoginPage.open();
        LoginPage.submitButtonDisabled();

    })
});


