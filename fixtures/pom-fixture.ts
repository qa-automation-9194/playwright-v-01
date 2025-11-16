import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { UserPage } from "../pages/UserPage";
import { LeftNavPannelPage } from "../pages/LeftNavPannelPage";
import { PimPage } from "../pages/PimPage";

type  PomFixturesType = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage: UserPage;
    leftNavPannel: LeftNavPannelPage;
    pimPage: PimPage;
}

export const test = baseTest.extend<PomFixturesType>({
    loginPage: async ({page}, use) =>{
        const loginPageObj = new LoginPage(page);
        await use(loginPageObj);
    },
    dashboardPage: async ({page}, use) =>{
        const dashboardPageObj = new DashboardPage(page);
        await use(dashboardPageObj);
    },
    userPage: async ({page}, use) =>{
        const userPageObj = new UserPage(page);
        await use(userPageObj);
    },
    leftNavPannel: async ({page}, use) =>{
        const leftNavPannelObj = new LeftNavPannelPage(page);
        await use(leftNavPannelObj);
    },
    pimPage: async ({page}, use) =>{
        const pimPageObj = new PimPage(page);
        await use(pimPageObj);
    }   


})