import { argosScreenshot } from "@argos-ci/playwright"
import { expect, test } from "@playwright/test"

test("create project", async ({ page }) => {
  await page.goto("/")
  await argosScreenshot(page, "Homepage")
})