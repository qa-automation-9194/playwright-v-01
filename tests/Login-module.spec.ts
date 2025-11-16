import { expect } from '@playwright/test';
import {test} from '../fixtures/hooks-fixture'
import * as loginData from '../data/login-module.json';
//Overriding AutoLogin functionallity 

test.use({storageState:{
    cookies:[],
    origins:[]}
});

test.skip('Login with with valid credentials', async({page,goToUrl,logout,loginPage,commonUtils, dashboardPage})=>{

    await loginPage.login(
        commonUtils.decryptData(process.env.USER_NAME!),
        commonUtils.decryptData(process.env.PASSWORD!)
    );
    await expect(dashboardPage.headingDashboard).toBeVisible();

})

test.skip('Login with invalid credentials', async({goToUrl,loginPage,})=>{
    await loginPage.login(loginData.wrong_username, loginData.wrong_password);
    await expect(loginPage.errorMessage).toBeVisible();
})