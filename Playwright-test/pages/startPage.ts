import { Page } from "@playwright/test";
import { BasePage } from "../common/basePage";

export class StartPage extends BasePage {
  protected page: Page;
  protected basePage: BasePage;
  public url: string;
  readonly POSTAL_CODE: string = 'input[name="postalCode"]';
  readonly HOUSE_NMR: string = 'input[name="houseNumber"]';
  readonly ADDRESS: string =
    '[data-scope="HeroCard"] div[data-scope="AddressFinder"] span[class*="size-BodyS sparky-text"]';
  readonly BEREKEN_MAANDBEDRAG_BTN: string =
    'button[data-label="Bereken je maandbedrag"]';

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.url = "eneco.nl";
    this.basePage = new BasePage(page);
  }

  public loadStartPageAndAcceptCookies = async (
    startPageUrl: string
  ): Promise<void> => {
    await this.page.context().clearCookies();
    await this.page.context().clearPermissions();
    await this.page.goto(startPageUrl);
    await this.basePage.acceptCookies();
  };
  public completeAddressCalculationTool = async (
    postalCode: string,
    houseNmr: string
  ): Promise<void> => {
    await this.fillElement(this.POSTAL_CODE, postalCode);
    await this.fillElement(this.HOUSE_NMR, houseNmr);
    await this.waitForElementWithText(
      this.ADDRESS,
      `${houseNmr}, ${postalCode}`
    );
    await this.clickElement(this.BEREKEN_MAANDBEDRAG_BTN);
  };
}
