import { expect } from "@playwright/test";
import {test} from "../fixtures/common-fixtures";

test("Global Setup for Auto Login ", async ({page, loginPage, commonUtils})=>{
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    const password = commonUtils.decryptData(process.env.PASSWORD!);    
    const baseUrl: string = commonUtils.decryptData(process.env.BASE_URL!);
    console.log(`Base URL: ${baseUrl}`);
    await loginPage.navigateToOrangeHRM(baseUrl);
    await loginPage.login(username, password);
    await expect (page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.context().storageState({
        path: './playwright/.auth/auth.json'});

}) 