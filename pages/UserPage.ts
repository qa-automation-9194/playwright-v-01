import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { log } from "console";



export class UserPage {
  readonly page : Page;
  readonly userProfileIcon : Locator;
  readonly logOutButton : Locator;

  constructor(page: Page) {
    this.page = page;
    this.userProfileIcon = page.getByRole('img', { name: 'profile picture' });
    this.logOutButton = page.getByRole('menuitem', { name: 'Logout' });
  }

  async logOut(){
    await this.userProfileIcon.click();
    await this.logOutButton.click();
    const loginPage = new LoginPage(this.page);
    await loginPage.usernameInput.waitFor({state:'visible'});
  }
}