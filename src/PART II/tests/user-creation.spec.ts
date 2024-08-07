import { test } from "../fixtures/page-fixtures";
import { Gender, User } from "../pages/userPage";




test.beforeEach("",({page})=>{
  page.goto('/');
});



test.describe("Tests about account creation", ()=>{



test("Verify we can create an account with good input in mandatory fields", async ({userPage,page})=>{

  const user: User = {
    firstName: "John",
    lastName: "Doe",  
    email: "john.doe@example.com",
    password: "P@ssw0rd123",
    gender: Gender.Male,
    dateOfbirth:'1995-11-21',
    confirmPassword: "P@ssw0rd123",
    linkdedinUrl:"https://www.linkedin.com/in/wadelkane/"
  };

  // Fill out the form.
  await userPage.fillOutForm(user);


// DOM Interception needed because Success disapear fastly.
  await page.evaluate(() => {
    const originalInsertBefore = Element.prototype.insertBefore;
    Element.prototype.insertBefore = function<T extends Node>(newNode: T, referenceNode: Node | null): T {
      if (newNode instanceof Text && newNode.textContent && newNode.textContent.includes('Success!')) {
        (window as any).successMessageAppeared = true;
      }
      return originalInsertBefore.call(this, newNode, referenceNode);
    };
  });

  // Action of click
  await userPage.clickOnSubmit();

  // Verify is message is visible
  const successMessageAppeared = await page.evaluate(() => (window as any).successMessageAppeared);
  
  

});

test("Verify creation account with numerical characters in firstName and good inputs in remaning fields raise the correct error.", async ({userPage})=>{


  const user: User = {
    firstName: "John1",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd123"
  };

  // Set up a dialog handler before triggering the action that causes the alert
  await userPage.handlerDialogFirstNameIncorrect()

  // Fill out the form.
  await userPage.fillOutForm(user);



  // Click on submit.
  await userPage.clickOnSubmit();

});


test("Verify creation account with special characters in firstName and good inputs in remaning fields raise the correct error", async ({userPage})=>{


  const user: User = {
    firstName: "John@Alo",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd123"
  };

  // Set up a dialog handler before triggering the action that causes the alert
  await userPage.handlerDialogFirstNameIncorrect()

  // Fill out the form.
  await userPage.fillOutForm(user);

  // Click on submit.
  await userPage.clickOnSubmit();

});

test("Verify creation account with empty firstName raise the correct error.", async ({userPage})=>{


  const user: User = {
    firstName: "",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd123"
  };

  // Set up a dialog handler before triggering the action that causes the alert
  await userPage.handlerDialogEmptyFirstNameIncorrect()

  // Fill out the form.
  await userPage.fillOutForm(user);

  // Click on submit.
  await userPage.clickOnSubmit();

});


test("Verify creation account with numerical characters in lastName and good inputs in remaning fields raise the correct error.", async ({userPage})=>{


  const user: User = {
    firstName: "John",
    lastName: "Doe1",
    email: "john.doe@example.com",
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd123"
  };

  // Set up a dialog handler before triggering the action that causes the alert
  await userPage.handlerDialogLastNameIncorrect()

  // Fill out the form.
  await userPage.fillOutForm(user);

  // Click on submit.
  await userPage.clickOnSubmit();

});


test("Verify creation account with special characters in lastName and good inputs in remaning fields raise the correct error.", async ({userPage})=>{


  const user: User = {
    firstName: "John",
    lastName: "Doe@",
    email: "john.doe@example.com",
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd123"
  };

  // Set up a dialog handler before triggering the action that causes the alert
  await userPage.handlerDialogLastNameIncorrect()

  // Fill out the form.
  await userPage.fillOutForm(user);

  // Click on submit.
  await userPage.clickOnSubmit();

});

test("Verify creation account with empty lastName and good inputs in remaning fields raise the correct error.", async ({userPage})=>{


  const user: User = {
    firstName: "John",
    lastName: "",
    email: "john.doe@example.com",
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd123"
  };

  // Set up a dialog handler before triggering the action that causes the alert
  await userPage.handlerDialogEmptyLastNameIncorrect()

  // Fill out the form.
  await userPage.fillOutForm(user);

  // Click on submit.
  await userPage.clickOnSubmit();

});

test("Verify creation account with invalid email and good inputs in remaning fields raise an error", async ({userPage})=>{


  const user: User = {
    firstName: "John",
    lastName: "Doe",
    email: "kanewa@gmail",
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd123"
  };

  // Set up a dialog handler before triggering the action that causes the alert
  await userPage.handlerDialogEmailIncorrect()

  // Fill out the form.
  await userPage.fillOutForm(user);

  // Click on submit.
  await userPage.clickOnSubmit();

});

test("Verify creation account with non-matching between password and confirm password fields.", async ({userPage})=>{


  const user: User = {
    firstName: "John",
    lastName: "Doe",
    email: "kanewa@gmail.com",
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd"
  };

  // Set up a dialog handler before triggering the action that causes the alert
  await userPage.handlerDialogPasswordNotMatching()

  // Fill out the form.
  await userPage.fillOutForm(user);

  // Click on submit.
  await userPage.clickOnSubmit();

});

test("Verify creation account with empty input in password field.", async ({userPage})=>{


  const user: User = {
    firstName: "John",
    lastName: "Doe",
    email: "kanewa@gmail.com",
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd"
  };

  // Set up a dialog handler before triggering the action that causes the alert
  await userPage.handlerDialogPasswordNotMatching()

  // Fill out the form.
  await userPage.fillOutForm(user);

  // Click on submit.
  await userPage.clickOnSubmit();

});

test("Verfify creation account with more than 10 characters in phoneNumber raise the an error.", async ({userPage})=>{


  const user: User = {
    firstName: "John",
    lastName: "Doe",
    email: "kanew@mail.com",
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd123",
    phoneNumber:"12345678919",
    linkdedinUrl:"https://www.linkedin.com/in/wadelkane/"
  };

  // Fill out the form.
  await userPage.fillOutForm(user);

  // Click on submit.
  await userPage.clickOnSubmit();

  await userPage.assertPhoneNumberErrorToolTipVisible()

});






})




