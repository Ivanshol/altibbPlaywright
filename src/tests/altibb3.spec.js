
const { test, expect } = require('@playwright/test');
const { Base } = require('../page/base.page.js');
const { MedicalArticles } = require('../page/medicalArticles.page.js');
const { MedicalNews } = require('../page/medicalNews.page.js');
const arrMedias = [ 'facebook', 'linkedin', 'twitter', 'instagram'];

test('Altibb check buttons on a news article page', async ({ page }) => {
  const base = new Base(page);
  const medicalNews = new MedicalNews(page);

  await base.gotoSite();
  await base.gotoMedicalNewsPage();
  await medicalNews.clickANewsHeader();
  await expect(await medicalNews.clickTalkToDoctorButtonAndVerifyPage()).toContain('اطرح سؤالك الآن ليصل إلى آلاف الأطبا');
  await base.goToPreviousPage();
  await expect(await base.clickAnAppointmentButtonAndVerifyPage()).toContain('ابحث عن طبيب واحجز موعد بكل سهولة');
  await base.goToPreviousPage();
  await expect(await base.assertLatestMedicalVideoIsDisplayed()).toBeVisible();
});

test(' Verify all share links work', async ({ page }) => {
  const base = new Base(page);
  const medicalArticle = new MedicalArticles(page);
  await base.gotoSite();
  await base.gotoMedicalArticlesPage();
  await medicalArticle.clickAFirstArticleHeader();
  for (let i = 0; i < arrMedias.length; i++) {
      await base.socalMediaMenuButton.click();
      let [newPage] = await Promise.all([
          page.context().waitForEvent("page"),
          page.click(`.article-container a[href*="${arrMedias[i]}"]`)
      ])
      await newPage.waitForLoadState()
      expect(newPage.url()).toContain(arrMedias[i]);
      await medicalArticle.visit();
  }
});