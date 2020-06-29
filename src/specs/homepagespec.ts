var home=require('../pages/homepage')

describe("hompage scenario",function()
{
    it("add item to the cart",function()
    {
     home.additem();
     home.verifycart();

    })
})