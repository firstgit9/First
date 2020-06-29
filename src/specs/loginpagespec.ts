import { browser } from "protractor";

var login =require('../pages/loginpage');
describe("Login page operations",function()
{
    it("openurl",function()
    {
        login.openurl();
        login.sigin();
        
    })
   
    

    
})