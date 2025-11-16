import { Page, Locator } from "@playwright/test";

export class LeftNavPannelPage {
    readonly page : Page;
    readonly pimTab : Locator;
    readonly pimTabHeader: Locator;
    readonly brandLogo: Locator;
    readonly sideNavPanel : Locator;

    constructor(page: Page){
        this.page = page;
        this.pimTab = page.getByRole('link', { name: 'PIM' });
        this.pimTabHeader = page.getByRole('heading', { name: 'PIM' });
        this.brandLogo = page.getByRole('link', { name: 'client brand banner' })
        this.sideNavPanel = page.locator('.oxd-sidepanel-body');
    }

    async navigateToPIM(){
        await this.pimTab.click();
    }

}