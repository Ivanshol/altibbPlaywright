
const { test, expect } = require('@playwright/test');
const { Base } = require('../page/base.page.js');
const { MedicalVideos } = require('../page/medicalVideos.page.js');
const arrMedias = [ 'facebook', 'linkedin', 'twitter', 'instagram'];

test('Verify buttons on a medical video page', async ({ page }) => {
  const base = new Base(page);
  const medicalVideos = new MedicalVideos(page);

  await base.gotoSite();
  await base.gotoMedicalVideosPage();
  await medicalVideos.clickAVideoHeader();
  await expect(await base.clickAnAppointmentButtonAndVerifyPage()).toContain('ابحث عن طبيب واحجز موعد بكل سهولة');
  await base.goToPreviousPage();
  await expect(await medicalVideos.assertFreeSuggestionsLabel()).toContain('أسئلة واجابات طبية الامراض المعدية');
  await base.goToPreviousPage();
  await expect(await medicalVideos.assertMedicalNewsSectionIsDisplayed()).toBeVisible();
  await expect(await base.assertLatestMedicalVideoIsDisplayed()).toBeVisible();
});

test('Verify all share links work', async ({ page }) => {
  const medical = new MedicalVideos(page);
  const base = new Base(page);
  await medical.visit();
  for (let i = 0; i < arrMedias.length; i++) {
      await base.socalMediaMenuButton.click();
      let [newPage] = await Promise.all([
          page.context().waitForEvent("page"),
          page.click(`.video-container a[href*="${arrMedias[i]}"]`)
      ])
      await newPage.waitForLoadState();
      expect(newPage.url()).toContain(arrMedias[i]);
      await medical.visit();
  }
});