// import { test } from "../fixtures/pom-fixture";
import CommonUtil from "../utils/commonUtils";
import {test} from "../fixtures/common-fixtures"

// import { LoginPage } from "../pages/LoginPage";

// test("Temp Test", async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.navigateToOrangeHRM();
//   await loginPage.login('Admin', 'admin123');
// })
// test("temp test", async ({page, loginPage, commonUtils})=>{
//     // console.log(process.env.BASE_URL);
//     // console.log(process.env.USER_NAME);
//     // console.log(process.env.PASSWORD);
//     console.log(process.env.ENV_NAME);

//     // commonUtils.encryptData(process.env.BASE_URL!);
//     // commonUtils.encryptData(process.env.USER_NAME!);
//     // commonUtils.encryptData(process.env.PASSWORD!);
    
//     // await loginPage.navigateToOrangeHRM();
//     // const username = commonUtils.decryptData(process.env.USER_NAME!);
//     // const password = commonUtils.decryptData(process.env.PASSWORD!);
//     // await loginPage.login(username, password);

// })

// test("Another Temp Test", async ({page, loginPage, commonUtils})=>{
    
//     console.log( await page.title());
// })

test.skip("Autologin with login and logout", async({page,commonUtils, loginPage,dashboardPage})=>{
    const baseUrl = commonUtils.decryptData(process.env.BASE_URL!);
    await loginPage.navigateToOrangeHRM(baseUrl);
    

    })