import { argosScreenshot } from "@argos-ci/playwright"
import { expect, test } from "@playwright/test"

test("create project", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByAltText("Vercel Logo")).toBeVisible()
  await expect(page.getByAltText("Next.js Logo")).toBeVisible()
  await expect(page.getByText("Docs")).toBeVisible()
  await argosScreenshot(page, "Homepage")
})