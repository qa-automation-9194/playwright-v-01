import {test as baseTest} from './common-fixtures';

type HooksFixtureType =  {
    goToUrl: any;
    logout: any;
}

export const test = baseTest.extend<HooksFixtureType>({
    goToUrl: async({loginPage, commonUtils}, use)=>{
        const url = commonUtils.decryptData(process.env.BASE_URL);
        await loginPage.navigateToOrangeHRM(url);
        await use()
    },
    logout: async({userPage}, use)=>{
        await use();
        await userPage.logOut();
    }
})

export {expect} from '@playwright/test';
