import {
    test,
    expect,
    type Page,
    defineConfig,
    Locator,
  } from "@playwright/test";


  export type User = {
    firstName: string;
    lastName: string;
    email : string;
    password:string;
    confirmPassword: string;
    gender?: string; // Is become with'?'
    dateOfbirth? : string;
    phoneNumber?: string;
    adress?: string;
    linkdedinUrl? : string;
    githubUrl?: string;
  }

  export enum Gender {
    Male = "Male",
    Female = "Female",
    PreferNotToSay = "Prefer Not To Say"
  }
  
  export class UserPage {
    readonly page: Page;
  
    readonly tf_FirstName:Locator;
    readonly tf_LastName:Locator;
    readonly tf_Email:Locator;
    readonly tf_Password:Locator;
    readonly tf_ConfirmPassword:Locator;
    readonly rb_GenderMale : Locator;
    readonly rb_GenderFemale : Locator;
    readonly rb_GenderPreferNotToSay : Locator;
    readonly tf_DateOfBird : Locator;
    readonly tf_PhoneNumber:Locator;
    readonly tf_Adress:Locator;
    readonly tf_LinkedinUrl:Locator;
    readonly tf_GithubUrl:Locator;

    readonly successfulMessage : Locator;
    readonly errorPhoneNumber :Locator;





    readonly btn_Submit: Locator;

  
    constructor(page: Page) {
      this.page = page;
    

      this.tf_FirstName = page.locator('id=firstName');
      this.tf_LastName = page.locator('id=lastName');
      this.tf_Email = page.locator('id=email');
      this.tf_Password = page.locator('id=password');
      this.tf_ConfirmPassword = page.locator('id=confirmPassword');
      this.tf_ConfirmPassword = page.locator('id=confirmPassword');
      this.rb_GenderMale = page.locator('id=male');
      this.rb_GenderFemale = page.locator('id=female');
      this.rb_GenderPreferNotToSay = page.locator('id=preferNotToSay');

      this.tf_DateOfBird = page.getByLabel('Date ofBirth (optional):');//page.locator('id=dob');
      this.tf_PhoneNumber = page.locator('id=phone');
      this.tf_Adress = page.locator('id=address');
      this.tf_LinkedinUrl = page.locator('id=linkedIn');
      this.tf_GithubUrl = page.locator('id=address');


      this.btn_Submit = page.getByRole("button", { name: "Submit" });


      this.successfulMessage = page.getByText(/Success!/);
      this.errorPhoneNumber =  page.getByRole('tooltip', { name: 'Please match the request format.' });


    }
  
    // Fill the form with an User object.
    async fillOutForm(user: User){
      await this.tf_FirstName.fill(user.firstName);
      await this.tf_LastName.fill(user.lastName);
      await this.tf_Email.fill(user.email);
      await this.tf_Password.fill(user.password);
      await this.tf_ConfirmPassword.fill(user.confirmPassword);

      await this.checkGender(user.gender ?? ''); // If user.phoneNumber is null or undefined, an empty string ('') will be used
      await this.tf_DateOfBird.fill(user.dateOfbirth ?? '');
      await this.tf_PhoneNumber.fill(user.phoneNumber ?? '');
      await this.tf_Adress.fill(user.adress ?? '');
      await this.tf_LinkedinUrl.fill(user.linkdedinUrl ?? '');
      await this.tf_GithubUrl.fill(user.githubUrl ?? '');

     
    }

    // Check the correct gender rabio button.
    async checkGender(gender : string){

        switch (gender) {
            case Gender.Male:
                await this.rb_GenderMale.check();
                break;
            case Gender.Female:
                await this.rb_GenderFemale.check();
                break;
            case Gender.PreferNotToSay:
                await this.rb_GenderPreferNotToSay.check();
                break;
          }
    }

    // Click On the Submit Botton.
    async clickOnSubmit(){
        await this.btn_Submit.click();
        console.log("Nothin");
    }


    async assertSuccessCreation(){
        await expect(this.successfulMessage).toBeVisible();
      }
    
    async assertPhoneNumberErrorToolTipVisible(){
        await expect(this.errorPhoneNumber).toBeVisible();
      }


    async handlerDialogFirstNameIncorrect(){
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('First name must contain alphabetical characters only');
            await dialog.accept();
          });
        
        }
      
        async handlerDialogEmptyFirstNameIncorrect(){
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('First name must be filled out');
            await dialog.accept();
          });
        
        }

    async handlerDialogLastNameIncorrect(){
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('Last name must contain alphabetical characters only');
            await dialog.accept();
            });
        
        }

    async handlerDialogEmptyLastNameIncorrect(){
          this.page.on('dialog', async (dialog) => {
              expect(dialog.type()).toBe('alert');
              expect(dialog.message()).toBe('Last name must be filled out');
              await dialog.accept();
              });
          
          }

    async handlerDialogEmailIncorrect(){
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('Email must be a valid email address');
            await dialog.accept();
            });
        }

    async handlerDialogPasswordNotMatching(){
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('Passwords do not match');
            await dialog.accept();
            });
        }
  }



  
  export { expect } from "@playwright/test";
