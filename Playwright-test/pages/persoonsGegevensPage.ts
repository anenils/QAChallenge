import { Page } from "@playwright/test";
import { BasePage } from "../common/basePage";

export class PersoonsGegevensPage extends BasePage {
  readonly PERSOONLIJKEGEGEVENS_PARAGRAPH = 'p[class*="sparky-text"]';
  readonly MEVR_BUTTON = 'label[data-label="Mevr."]';
  readonly DHR_BUTTON = 'label[data-label="Dhr."]';
  readonly VOORNAAM = 'input[name="firstName"]';
  readonly VOORLETTERS = 'input[name="initials"]';
  readonly SURNAME_PREPOSITION = 'input[name="surnamePreposition"]';
  readonly SURNAME = 'input[name="surname"]';
  readonly DAY = 'input[name="day"]';
  readonly MONTH = 'input[name="month"]';
  readonly YEAR = 'input[name="year"]';
  readonly VOLGENDE_BTN: string =
    'button[data-variant="primary"][type="submit"]';

  async verifyPageContent(): Promise<void> {
    await this.waitForElementWithText(
      "h1",
      "Wat zijn je persoonlijke gegevens?"
    );
    await this.elementIsVisibleWithText(
      this.PERSOONLIJKEGEGEVENS_PARAGRAPH,
      "Ben je al klant? Fijn dat je opnieuw voor Eneco kiest. Vul dezelfde persoonsgegevens in, die in je huidige contract staan."
    );
    await this.elementIsVisible(this.MEVR_BUTTON);
    await this.elementIsVisible(this.DHR_BUTTON);
    console.log("Fill in personal data");
  }

  async inputGegevensData(
    VOORNAAM: string,
    VOORLETTERS: string,
    SURNAME_PREPOSITION: string,
    SURNAME: string,
    DAY: number,
    MONTH: number,
    YEAR: number
  ): Promise<void> {
    await this.clickElement(this.MEVR_BUTTON);
    await this.page.fill(this.VOORNAAM, VOORNAAM.toString());
    await this.page.fill(this.VOORLETTERS, VOORLETTERS.toString());
    await this.page.fill(
      this.SURNAME_PREPOSITION,
      SURNAME_PREPOSITION.toString()
    );
    await this.page.fill(this.SURNAME, SURNAME.toString());
    await this.page.fill(this.DAY, DAY.toString());
    await this.page.fill(this.MONTH, MONTH.toString());
    await this.page.fill(this.YEAR, YEAR.toString());
  }

  async clickVolgende(): Promise<void> {
    await this.elementIsVisible(this.VOLGENDE_BTN);
    await this.clickElement(this.VOLGENDE_BTN);
  }
}
