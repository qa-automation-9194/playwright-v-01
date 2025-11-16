import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton   = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByText('Invalid credentials');
  }

  /**
   * To open OrangeHRM application
   * @param url 
   */
  async navigateToOrangeHRM(baseUrl: string) {
    // const baseUrl = process.env.BASE_URL!;
    await this.page.goto(baseUrl);
  }

  /**
   * To Login into the OrangeHRM application
   * @param username 
   * @param password 
   */
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

}