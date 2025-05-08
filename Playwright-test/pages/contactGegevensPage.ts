import { BasePage } from "../common/basePage.ts";

export class ContactGegevensPage extends BasePage {
  readonly CONTACT_GEGEVENS_PARAGRAPH = 'p[class*="sparky-text"]';
  readonly TEL = 'input[name="phoneNumber"]';
  readonly EMAIL = 'input[name="emailAddress"]';
  readonly CONTROLEER_JE_BESTELLING_BTN =
    'button[data-label="Controleer je bestelling"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText("h1", "Hoe kunnen we je bereiken?");
    await this.elementIsVisibleWithText(
      this.CONTACT_GEGEVENS_PARAGRAPH,
      "Als we een vraag hebben, nemen we contact met je op."
    );
    console.log("Fill in Contact information phone and email");
  }

  async inputContactData(TEL: string, ADDRESS: string): Promise<void> {
    await this.page.fill(this.TEL, TEL.toString());
    await this.page.fill(this.EMAIL, ADDRESS.toString());
  }

  async clickControleerJeBestelling(): Promise<void> {
    await this.elementIsVisible(this.CONTROLEER_JE_BESTELLING_BTN);
    await this.clickElement(this.CONTROLEER_JE_BESTELLING_BTN);
  }
}
