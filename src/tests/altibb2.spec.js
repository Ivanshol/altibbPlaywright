const { test, expect } = require('@playwright/test');
const { Base } = require('../page/base.page.js');
const { MedicalArticles } = require('../page/medicalArticles.page.js');

test('Altibb2', async ({ page }) => {
    const base = new Base(page);
    const medical = new MedicalArticles(page);
  
    await base.gotoSite();
    await base.gotoMedicalArticlesPage();
    await medical.clickAnArticleHeader();
    await expect(medical.assertFreeSuggestionsTitle()).toHaveText('أسئلة وإجابات مجانية مقترحة');

    await expect(medical.assertQuestionsAreDisplayed(0)).toBeVisible();
    await expect(medical.assertQuestionsAreDisplayed(1)).toBeVisible();
    await expect(medical.assertQuestionsAreDisplayed(2)).toBeVisible();
    await expect(medical.assertQuestionsAreDisplayed(3)).toBeVisible();

    await expect(medical.assertAllQuestionsPage()).toHaveText('أسئلة واجابات طبية أمراض باطنية');
    await base.goToPreviousPage();
    await medical.goToLatestVideos();
    await expect(medical.assertLatestVideosAreDisplayed)
    await expect(medical.assertLatestVideosAreDisplayed(1)).toBeVisible();
    await expect(medical.assertLatestVideosAreDisplayed(2)).toBeVisible();
    await expect(medical.assertLatestVideosAreDisplayed(3)).toBeVisible();
    await expect(medical.assertLatestVideosAreDisplayed(4)).toBeVisible();
    
  });