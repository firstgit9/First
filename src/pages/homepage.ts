import { by, browser, element } from 'protractor';
var homepage = function () {

    this.additem = function () {
        var inputbox = element(by.id('twotabsearchtextbox'));
        inputbox.sendKeys('iphone7');
        var searchicon = element(by.xpath("//input[@value='Go']"));
        searchicon.click();
        var item = element(by.linkText('Apple iPhone 7 (32GB) - Gold'));
        item.click();
        var handlePromise = browser.driver.getAllWindowHandles();
        handlePromise.then(function (handles: object) {
        
            // parentHandle = handles[0];
            var popUpHandle = handles[1];

            // Change to new handle
            browser.driver.switchTo().window(popUpHandle);

            var popUpHandleFinal = browser.driver.getWindowHandle();
            expect(popUpHandleFinal).toEqual(popUpHandle);
            var additem = element(by.id('add-to-cart-button'));
            additem.click();
        });
    }
    this.verifycart = function () {
        element(by.tagName('h1')).getText().then(function (text: Object) {
            expect(text).toEqual("Added to Cart");
        });

        var carticon = element(by.id('nav-cart'));
        carticon.click();
        element(by.linkText('Apple iPhone 7 (32GB) - Gold')).getText().then(function (text: Object) {
         var expected_value:String='Apple iPhone 7 (32GB) - Gold';
            expect(text).toEqual(expected_value);
            browser.sleep(10000);
        })


    }

}
module.exports = new homepage;

