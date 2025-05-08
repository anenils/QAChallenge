import { Page } from "@playwright/test";
import { BasePage } from "../common/basePage";

export class EstimateVerbruikPage extends BasePage {
  readonly RADIOBUTTONS_LABELS: string = "label[data-label]";
  readonly VERBRUIK_LABELS = "[class*=sparky-text]";
  readonly VERBRUIK_TEXTLINK = "button[class*=sparky-text-link]";
  readonly VERBRUIK_TEXTLINK_BOX = "[class*=sparky-box]";
  readonly HAS_SLIMMETER_RADIOBUTTON = 'button[value = "double"]';
  readonly VERBRUIK_TEXTLINK_SLUITEN =
    'button[data-label="sluiten"][type="button"]';
  readonly VERBRUIK_INPUT_HIGH_ELECTRICITY =
    'input[name="usageElectricityHigh"]';
  readonly VERBRUIK_INPUT_LOW_ELECTRICITY = 'input[name="usageElectricityLow"]';
  readonly VERBRUIK_INPUT_GAS = 'input[name="usageGas"]';
  readonly VOLGENDE_BTN: string =
    'button[data-variant="primary"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText("h1", "Weet je het energieverbruik?");
    await this.elementIsVisibleWithText(
      this.RADIOBUTTONS_LABELS,
      "Ja, ik heb een slimme meter"
    );
    await this.elementIsVisibleWithText(
      this.RADIOBUTTONS_LABELS,
      "Nee, ik heb geen slimme meter"
    );
    await this.elementIsVisibleWithText(
      this.VERBRUIK_LABELS,
      "Heb je een slimme meter?"
    );
    await this.elementIsVisibleWithText(
      this.VERBRUIK_TEXTLINK,
      "Welk type stroommeter heb ik?"
    );
    await this.clickElement(this.VERBRUIK_TEXTLINK);
    await this.elementIsVisibleWithText(
      this.VERBRUIK_TEXTLINK_BOX,
      "Waarom vragen we naar je type stroommeter?"
    );
    await this.elementIsVisibleWithText(
      this.VERBRUIK_TEXTLINK_BOX,
      "Het type stroommeter bepaalt of je tegen één of twee tarieven stroom afneemt"
    );
    await this.clickElement(this.VERBRUIK_TEXTLINK_SLUITEN);
    await this.elementIsVisibleWithText(
      this.VERBRUIK_LABELS,
      "Stroom normaal verbruik per jaar"
    );
    await this.elementIsVisible(this.VERBRUIK_INPUT_HIGH_ELECTRICITY);
    await this.elementIsVisibleWithText(
      this.VERBRUIK_LABELS,
      "Stroom dal verbruik per jaar"
    );
    await this.elementIsVisible(this.VERBRUIK_INPUT_LOW_ELECTRICITY);
    await this.elementIsVisibleWithText(
      this.VERBRUIK_LABELS,
      "Gasverbruik per jaar"
    );
    await this.elementIsVisible(this.VERBRUIK_INPUT_GAS);
  }

  async selectRadioButton(): Promise<void> {
    await this.clickElement(this.HAS_SLIMMETER_RADIOBUTTON);
    console.log("Selected slimme meter");
  }

  async inputConsumption(
    highUsageElectricity: number,
    lowUsageElectricity: number,
    usageGas: number
  ): Promise<void> {
    await this.page.fill(
      this.VERBRUIK_INPUT_HIGH_ELECTRICITY,
      highUsageElectricity.toString()
    );
    await this.page.fill(
      this.VERBRUIK_INPUT_LOW_ELECTRICITY,
      lowUsageElectricity.toString()
    );
    await this.page.fill(this.VERBRUIK_INPUT_GAS, usageGas.toString());
    console.log("Filled in usage for Electricity and Gas");
  }

  async clickVolgende(): Promise<void> {
    await this.elementIsVisible(this.VOLGENDE_BTN);
    await this.clickElement(this.VOLGENDE_BTN);
  }
}
