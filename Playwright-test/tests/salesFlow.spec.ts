import { test } from "@playwright/test";
import { StartPage } from "../pages/startPage.ts";
import { BerekenPage } from "../pages/berekenenPage.ts";
import { GegevensPage } from "../pages/gegevensPage.ts";
import { TypeVerblijfPage } from "../pages/typeVerblijfPage.ts";
import { VerbruikPage } from "../pages/verbruikPage.ts";
import { EstimateVerbruikPage } from "../pages/estimateUsagePage.ts";
import { SolarPanelPage } from "../pages/solarpanelsPage.ts";
import { VerhuizenPage } from "../pages/verhuizenPage.ts";
import { ProductKeuzePage } from "../pages/productKeuzepage.ts";
import { AanbodPage } from "../pages/aanbodPage.ts";
import { CompensateCO2page } from "../pages/compensateCO2Page.ts";
import { PersoonsGegevensPage } from "../pages/persoonsGegevensPage.ts";
import { ContactGegevensPage } from "../pages/contactGegevensPage.ts";
import { ControlePage } from "../pages/controlePage.ts";

test.describe("SalesFlow", () => {
  let startPage: StartPage;
  let berekenPage: BerekenPage;
  let estimateVerbruikPage: EstimateVerbruikPage;
  let gegevensPage: GegevensPage;
  let typeVerblijfPage: TypeVerblijfPage;
  let solarPanelPage: SolarPanelPage;
  let verhuizenPage: VerhuizenPage;
  let productkeuzePage: ProductKeuzePage;
  let aanbodPage: AanbodPage;
  let persoonsGegevensPage: PersoonsGegevensPage;
  let verbruikPage: VerbruikPage;
  let contactGegevensPage: ContactGegevensPage;
  let controlePage: ControlePage;
  let compensateCO2page: CompensateCO2page;

  test("Complete sales flow for E&G", async ({ page }) => {
    startPage = new StartPage(page);
    berekenPage = new BerekenPage(page);
    verbruikPage = new VerbruikPage(page);
    estimateVerbruikPage = new EstimateVerbruikPage(page);
    solarPanelPage = new SolarPanelPage(page);
    verhuizenPage = new VerhuizenPage(page);
    productkeuzePage = new ProductKeuzePage(page);
    aanbodPage = new AanbodPage(page);
    persoonsGegevensPage = new PersoonsGegevensPage(page);
    contactGegevensPage = new ContactGegevensPage(page);
    controlePage = new ControlePage(page);
    gegevensPage = new GegevensPage(page);
    typeVerblijfPage = new TypeVerblijfPage(page);
    compensateCO2page = new CompensateCO2page(page);

    // Step 1: Fill in address
    await startPage.loadStartPageAndAcceptCookies("https://www.eneco.nl");
    await startPage.completeAddressCalculationTool("9713RD", "63");

    // Step 2: Select type of energy (E&G)
    await berekenPage.verifyPageContent();
    await berekenPage.selectEnergyType();
    await berekenPage.clickVolgende();

    // Step 3: Estimate usage
    await verbruikPage.verifyPageContent();
    await verbruikPage.verifyAndSelectUsageButton();
    await verbruikPage.clickVolgende();
    await estimateVerbruikPage.verifyPageContent();
    await estimateVerbruikPage.inputConsumption(3000, 1000, 1100);
    await estimateVerbruikPage.selectRadioButton();
    await estimateVerbruikPage.clickVolgende();

    // Step 4: Verify Solar Panel page
    await solarPanelPage.verifyPageContent();
    await solarPanelPage.verifyAndSelectSolarPanelButtons();
    await solarPanelPage.clickVolgende();

    // Step 5: Verify Move Out page
    await verhuizenPage.verifyPageContent();
    await verhuizenPage.selectVerhuizingRadioButton();
    await verhuizenPage.clickVolgende();

    // Step 6: Verify Product Choice page
    await productkeuzePage.verifyPageContent();
    await productkeuzePage.selecProduct();
    await productkeuzePage.clickVolgende();

    // await compensateCO2page.verifyPageContent();
    // await compensateCO2page.clickNaarJeAanbod();

    // Step 7: Verify Offer page
    await aanbodPage.verifyPageContent();
    await aanbodPage.clickNaarJeGegevens();

    // Step 8: Verify Start Delivery page
    await gegevensPage.verifyPageContentStartDelivery();
    await gegevensPage.clickVolgende();

    // Step 9: Verify Type of Stay page
    await typeVerblijfPage.verifyPageContent();
    await typeVerblijfPage.selectRadioButton();
    await typeVerblijfPage.clickVolgende();

    // Step 10: Insert personal data
    await persoonsGegevensPage.verifyPageContent();
    await persoonsGegevensPage.inputGegevensData(
      "Anna",
      "A",
      "De",
      "Jong",
      31,
      10,
      1970
    );
    await persoonsGegevensPage.clickVolgende();

    // Step 10: Insert contact data
    await contactGegevensPage.verifyPageContent();
    await contactGegevensPage.inputContactData(
      "0612345678",
      "ATest@testmail.com"
    );
    await contactGegevensPage.clickControleerJeBestelling();

    // Step 11: Verify Control page
    await controlePage.verifyPageContent();
  });
});
