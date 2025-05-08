import { BasePage } from "../common/basePage";

export class CompensateCO2page extends BasePage {
  readonly TEXTLINK_TITLE = "button[class*=sparky-text-link]";
  readonly CLOSE_DIALOG_BUTTON = 'button[data-label="sluiten"]';
  readonly NAAR_JE_AANBOD_BTN: string =
    'button[data-variant="primary"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText("h1", "Help je mee CO2 te verminderen");
    await this.clickLocator(
      this.page.locator(this.TEXTLINK_TITLE, {
        hasText: "Alles over CO₂-GecompenseerdGas",
      })
    );
    await this.clickLocator(this.page.locator(this.CLOSE_DIALOG_BUTTON));
  }
  async clickNaarJeAanbod(): Promise<void> {
    await this.elementIsVisible(this.NAAR_JE_AANBOD_BTN);
    await this.clickElement(this.NAAR_JE_AANBOD_BTN);
  }
}
