import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the portfolio home page
    await page.goto('/');
  });

  test('should load the homepage and display the Hero section', async ({ page }) => {
    // Expect the title or hero text to be visible
    const heroName = page.locator('text=Cristian Díaz').first();
    await expect(heroName).toBeVisible();

    // Check that the Frontend Developer role is visible
    const roleText = page.locator('text=Frontend Developer');
    await expect(roleText).toBeVisible();
  });

  test('navigation links should scroll to correct sections', async ({ page }) => {
    // Click on "Proyectos" in the navbar or hero button
    const verProyectosBtn = page.getByRole('link', { name: 'Ver Proyectos' });
    await verProyectosBtn.click();

    // The projects section should become visible
    const projectsHeading = page.locator('h2:has-text("Proyectos Destacados")');
    await expect(projectsHeading).toBeVisible();
    await expect(projectsHeading).toBeInViewport();
  });

  test('social links should have correct attributes for accessibility and SEO', async ({ page }) => {
    // Verify GitHub link
    const githubLink = page.locator('a[aria-label="GitHub"]');
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/cristian-diaz2402');
    await expect(githubLink).toHaveAttribute('target', '_blank');

    // Verify LinkedIn link
    const linkedinLink = page.locator('a[aria-label="LinkedIn"]');
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/cristian-diaz-50ab862aa');
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

});
