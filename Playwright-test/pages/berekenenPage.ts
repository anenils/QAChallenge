import { BasePage } from "../common/basePage";

export class BerekenPage extends BasePage {
  readonly RADIOBUTTONS_EG: string =
    'button[role="radio"][value="electricityAndGas"]';
  readonly RADIOBUTTONS_GAS: string = 'button[role="radio"][value="gas"]';
  readonly RADIOBUTTONS_STROOM: string =
    'button[role="radio"][value="electricity"]';
  readonly VOLGENDE_BTN: string =
    'button[data-variant="primary"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText(
      "h1",
      "Welk type energie wil je in je berekening?"
    );
    await this.elementIsVisible(this.RADIOBUTTONS_GAS);
    await this.elementIsVisible(this.RADIOBUTTONS_STROOM);
    await this.elementIsVisible(this.RADIOBUTTONS_EG);
  }

  async selectEnergyType(): Promise<void> {
    await this.clickElement(this.RADIOBUTTONS_EG);
  }

  async clickVolgende(): Promise<void> {
    await this.elementIsVisible(this.VOLGENDE_BTN);
    await this.clickElement(this.VOLGENDE_BTN);
  }
}
