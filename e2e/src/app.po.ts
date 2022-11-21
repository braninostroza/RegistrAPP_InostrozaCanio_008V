import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }


  async getTitleText():Promise<string> {
    return element(by.css('app-root ion-title')).getText();
  }

  async getLabelText():Promise<string> {
    return element(by.css('app-root label')).getText();
  }

  async getIconText():Promise<string> {
    return element(by.css('app-root ion-icon')).getText();
  }
}
