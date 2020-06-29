"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var login = function () {
    this.openurl = function () {
        protractor_1.browser.get("https://www.amazon.in/");
    };
    this.sigin = function () {
        var siginicon = protractor_1.element(protractor_1.by.linkText('Sign in'));
        siginicon.click();
        var username = protractor_1.element(protractor_1.by.id('ap_email'));
        username.sendKeys("8341017721");
        var continue_btn = protractor_1.element(protractor_1.by.className('a-button-input'));
        continue_btn.click();
        var password = protractor_1.element(protractor_1.by.id('ap_password'));
        password.sendKeys("Apples2211");
        var submit_btn = protractor_1.element(protractor_1.by.id('signInSubmit'));
        submit_btn.click();
        protractor_1.browser.sleep(5000);
    };
};
module.exports = new login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL2xvZ2lucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUE2QztBQUU3QyxJQUFJLEtBQUssR0FBQztJQUVQLElBQUksQ0FBQyxPQUFPLEdBQUM7UUFFVCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQTtJQUVELElBQUksQ0FBQyxLQUFLLEdBQUM7UUFFUCxJQUFJLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM5QyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyxJQUFJLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3pELFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMzQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLElBQUksVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzlDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDLENBQUE7QUFHRixDQUFDLENBQUE7QUFHSixNQUFNLENBQUMsT0FBTyxHQUFDLElBQUksS0FBSyxDQUFDIn0=