const { test, expect } = require('@playwright/test');
const { Base } = require('../page/base.page.js');
const { MedicalArticles } = require('../page/medicalArticles.page.js');

test('Altibb check free suggestions and all questions page', async ({ page }) => {
    const base = new Base(page);
    const medicalArticles = new MedicalArticles(page);
  
    await base.gotoSite();
    await base.gotoMedicalArticlesPage();
    await medicalArticles.clickAnArticleHeader();
    await expect(await medicalArticles.assertFreeSuggestionsTitle()).toContain('أسئلة وإجابات مجانية مقترحة');
    await expect(await medicalArticles.assertAllQuestionsPage()).toHaveText('أسئلة واجابات طبية أمراض باطنية');
    await base.goToPreviousPage();
    
  });

  test('Altibb check questions section', async ({ page }) => {
    const base = new Base(page);
    const medicalArticles = new MedicalArticles(page);
    await base.gotoSite();
    await base.gotoMedicalArticlesPage();
    await medicalArticles.clickAnArticleHeader();
    await expect(await medicalArticles.assertQuestionsSectionIsDisplayed()).toBeVisible();
  });

  test('Altibb check latest videos section', async ({ page }) => {  
    const base = new Base(page);
    const medicalArticles = new MedicalArticles(page);
    await base.gotoSite();
    await base.gotoMedicalArticlesPage();
    await medicalArticles.clickAnArticleHeader();
    await expect(await medicalArticles.assertLatestVideosAreDisplayed()).toBeVisible();
  });