import { test as base } from "@playwright/test";
import { UserPage } from "../pages/userPage";



type PageFixture = {
  userPage: UserPage;
};

export const test = base.extend<PageFixture>({
  
    userPage: async ({ page }, use) => {
    const userPage = new UserPage(page);
    await use(userPage);
  },

});

export { expect } from "@playwright/test";
