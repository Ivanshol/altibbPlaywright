
const { test, expect } = require('@playwright/test');
const { Base } = require('../page/base.page.js');
const { MedicalArticles } = require('../page/medicalArticles.page.js');
const { MedicalNews } = require('../page/medicalNews.page.js');
const arrMedias = [ 'facebook', 'linkedin', 'twitter', 'instagram'];

test('Altibb', async ({ page }) => {
  const base = new Base(page);
  const news = new MedicalNews(page);

  await base.gotoSite();
  await base.gotoMedicalNewsPage();
  await news.clickANewsHeader();
  await expect(await news.clickTalkToDoctorButtonAndVerifyPage()).toHaveText('اطرح سؤالك الآن ليصل إلى آلاف الأطبا');;
  await base.goToPreviousPage();
  await expect(await news.clickAnAppointmentButtonAndVerifyPage()).toHaveText('ابحث عن طبيب واحجز موعد بكل سهولة');;
  await base.goToPreviousPage();
  await expect(await news.assertLatestMedicalVideoIsDisplayed()).toBeVisible();
});

test(' Verify all share links works', async ({ page }) => {
  const base = new Base(page);
  const article = new MedicalArticles(page);
  await base.gotoMedicalArticlesPage();
  await article.clickAFirstArticleHeader();
  for (let i = 0; i < arrMedias.length; i++) {
      await article.socalMediaMenuButton.click();
      let [newPage] = await Promise.all([
          page.context().waitForEvent("page"),
          page.click('[class="social-network-v2"]')
      ])
      await newPage.waitForLoadState()
      expect(newPage.url()).toContain(arrMedias[i]);
      await article.visit();
  }
  //await article.assertLatestMedicalVideoIsDisplayed();
});