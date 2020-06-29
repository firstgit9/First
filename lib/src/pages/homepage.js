"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var homepage = function () {
    this.additem = function () {
        var inputbox = protractor_1.element(protractor_1.by.id('twotabsearchtextbox'));
        inputbox.sendKeys('iphone7');
        var searchicon = protractor_1.element(protractor_1.by.xpath("//input[@value='Go']"));
        searchicon.click();
        var item = protractor_1.element(protractor_1.by.linkText('Apple iPhone 7 (32GB) - Gold'));
        item.click();
        var handlePromise = protractor_1.browser.driver.getAllWindowHandles();
        handlePromise.then(function (handles) {
            // parentHandle = handles[0];
            var popUpHandle = handles[1];
            // Change to new handle
            protractor_1.browser.driver.switchTo().window(popUpHandle);
            var popUpHandleFinal = protractor_1.browser.driver.getWindowHandle();
            expect(popUpHandleFinal).toEqual(popUpHandle);
            var additem = protractor_1.element(protractor_1.by.id('add-to-cart-button'));
            additem.click();
        });
    };
    this.verifycart = function () {
        protractor_1.element(protractor_1.by.tagName('h1')).getText().then(function (text) {
            expect(text).toEqual("Added to Cart");
        });
        var carticon = protractor_1.element(protractor_1.by.id('nav-cart'));
        carticon.click();
        protractor_1.element(protractor_1.by.linkText('Apple iPhone 7 (32GB) - Gold')).getText().then(function (text) {
            var expected_value = 'Apple iPhone 7 (32GB) - Gold';
            expect(text).toEqual(expected_value);
            protractor_1.browser.sleep(10000);
        });
    };
};
module.exports = new homepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvaG9tZXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBa0Q7QUFDbEQsSUFBSSxRQUFRLEdBQUc7SUFFWCxJQUFJLENBQUMsT0FBTyxHQUFHO1FBQ1gsSUFBSSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUNyRCxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLElBQUksVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDM0QsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6RCxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBZTtZQUV4Qyw2QkFBNkI7WUFDN0IsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTdCLHVCQUF1QjtZQUN2QixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFOUMsSUFBSSxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUMsSUFBSSxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUNuRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUE7SUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHO1FBQ2Qsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBWTtZQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBWTtZQUN6RixJQUFJLGNBQWMsR0FBUSw4QkFBOEIsQ0FBQztZQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JDLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBR04sQ0FBQyxDQUFBO0FBRUwsQ0FBQyxDQUFBO0FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyJ9