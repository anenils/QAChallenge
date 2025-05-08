import { Locator } from "@playwright/test";
import { Page } from "@playwright/test";
import { BasePage } from "../common/basePage";

export class VerhuizenPage extends BasePage {
  readonly ERROR_MESSAGE: string = "h4[class*=sparky-heading]";
  readonly RADIOBUTTONS_LABELS: string = "label[data-label]";
  readonly VOLGENDE_BTN: string =
    'button[data-variant="primary"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText("h1", "Ga je verhuizen?");
    await this.elementIsVisibleWithText(
      this.RADIOBUTTONS_LABELS,
      "Ja, ik ga verhuizen"
    );
    await this.elementIsVisibleWithText(
      this.RADIOBUTTONS_LABELS,
      "Nee, ik ga niet verhuizen"
    );
  }

  async selectVerhuizingRadioButton(): Promise<void> {
    const ISMOVING_RADIOBUTTON: Locator = this.page.locator(
      'label[data-label="Ja, ik ga verhuizen"]'
    );
    await ISMOVING_RADIOBUTTON.waitFor({ state: "visible", timeout: 30000 });
    await this.clickLocator(ISMOVING_RADIOBUTTON);
  }

  async clickVolgende(): Promise<void> {
    await this.elementIsVisible(this.VOLGENDE_BTN);
    await this.clickElement(this.VOLGENDE_BTN);
  }
}
