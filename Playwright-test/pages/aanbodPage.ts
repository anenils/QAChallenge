import { BasePage } from "../common/basePage";

export class AanbodPage extends BasePage {
  readonly NAAR_JE_GEGEVENS: string =
    'button[data-variant="primary"][type="button"]';
  readonly TEXTLINK_TITLE = "button[class*=sparky-text-link]";
  readonly CLOSE_DIALOG_BUTTON = 'button[data-label="sluiten"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText("h1", "Je aanbod");
    await this.clickLocator(
      this.page.locator(this.TEXTLINK_TITLE, { hasText: "Bekijk je tarieven" })
    );
    await this.clickLocator(this.page.locator(this.CLOSE_DIALOG_BUTTON));
  }
  async clickNaarJeGegevens(): Promise<void> {
    await this.elementIsVisible(this.NAAR_JE_GEGEVENS);
    await this.clickElement(this.NAAR_JE_GEGEVENS);
    console.log("Selected 1 year contract");
  }
}
