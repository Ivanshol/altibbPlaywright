
const { test, expect } = require('@playwright/test');
const { Base } = require('../page/base.page.js');
const { MedicalVideos } = require('../page/medicalVideos.page.js');
const arrMedias = [ 'facebook', 'linkedin', 'twitter', 'instagram'];

test('Altibb', async ({ page }) => {
  const base = new Base(page);
  const medical = new MedicalVideos(page);

  await base.gotoSite();
  await base.gotoMedicalVideosPage();
  await medical.clickAVideoHeader();
  await expect(await medical.clickAnAppointmentButtonAndVerifyPage()).toHaveText('ابحث عن طبيب واحجز موعد بكل سهولة');
  await base.goToPreviousPage();
  await expect(await medical.assertFreeSuggestionsIsDisplayed()).toHaveText('اسئلة-طبية');
  await base.goToPreviousPage();
  await expect(await medical.assertMedicalNewsSectionIsDisplayed()).toBeVisible();
  await expect(await medical.assertLatestMedicalVideoIsDisplayed()).toBeVisible();
});

test.skip(' Verify all share links works', async ({ page }) => {
  const medical = new MedicalVideos(page);
  await medical.visit();
  for (let i = 0; i < arrMedias.length; i++) {
      await medical.socalMediaMenuButton.click();
      let [newPage] = await Promise.all([
          page.context().waitForEvent("page"),
          page.click(`.video-container a[href*="${arrMedias[i]}"]`)
      ])
      await newPage.waitForLoadState();
      expect(newPage.url()).toContain(arrMedias[i]);
      await medical.visit();
  }
});