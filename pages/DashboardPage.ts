import { Locator, Page } from '@playwright/test'

export class DashboardPage {
  // Implementation of DashboardPage class
    readonly page: Page;
    readonly headingDashboard: Locator;


    constructor(page: Page) {
      this.page = page;
      this.headingDashboard = page.getByRole('heading', { name: 'Dashboard' });
    }


}
