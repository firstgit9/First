import{by,browser, element} from "protractor"

var login=function()
{
   this.openurl=function()
   {
       browser.get("https://www.amazon.in/");
    }

    this.sigin=function()
    {
        var siginicon=element(by.linkText('Sign in'));
        siginicon.click();
        var username=element(by.id('ap_email'));
        username.sendKeys("8341017721");
        var continue_btn=element(by.className('a-button-input'));
        continue_btn.click();
        var password=element(by.id('ap_password'));
        password.sendKeys("Apples2211");
        var submit_btn=element(by.id('signInSubmit'));
        submit_btn.click();
        browser.sleep(5000)
    } 
  

   }


module.exports=new login;