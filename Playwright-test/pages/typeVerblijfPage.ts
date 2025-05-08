import { BasePage } from "../common/basePage.ts";

export class TypeVerblijfPage extends BasePage {
  readonly MEER_WETEN_TEXTLINK =
    'button[class*=sparky-text-link][data-label="Meer weten?"]';
  readonly CLOSE_DIALOG_BUTTON = 'button[data-label="sluiten"]';
  readonly JA_BUTTON = 'label[data-label="Ja"]';
  readonly NEE_BUTTON = 'label[data-label="Nee"]';
  readonly ADRESGEGEVENS_LABELS = "[class*=sparky-text]";
  readonly TEXTLINK_DIALOG_TEXT = "h2[class*=sparky-heading]";
  readonly VOLGENDE_BTN: string =
    'button[data-variant="primary"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText("h1", "Woon of werk je op dit adres?");
    await this.clickElement(this.MEER_WETEN_TEXTLINK);
    await this.elementIsVisibleWithText(
      this.TEXTLINK_DIALOG_TEXT,
      "Over verblijfsfuncties"
    );
    await this.clickLocator(this.page.locator(this.CLOSE_DIALOG_BUTTON));
    await this.elementIsVisibleWithText(
      this.ADRESGEGEVENS_LABELS,
      "Het adres wat je hebt ingevoerd:"
    );
    await this.elementIsVisibleWithText(
      this.ADRESGEGEVENS_LABELS,
      "Woon of werk je op dit adres?"
    );
  }

  async selectRadioButton(): Promise<void> {
    await this.clickElement(this.NEE_BUTTON);
    await this.clickLocator(this.page.locator(this.JA_BUTTON).nth(1));
  }

  async clickVolgende(): Promise<void> {
    await this.elementIsVisible(this.VOLGENDE_BTN);
    await this.clickElement(this.VOLGENDE_BTN);
  }
}
