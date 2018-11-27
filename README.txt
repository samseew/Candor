App asks you which store you are in (search bar), 
then it grabs your location and the finds the nearest 
store with that name -

then it opens up a list of coupons and deals for that store,
you can click on each one which takes you to the view for that 
coupon, and if it is scannable, should show you the bar code in 
which to scan to give you said deal.

you should have a scan feature on the app in which the user can 
scan an item, and can tell you whether there is deal for it in 
that particular store or not, also it should give you price 
comparisons to amazon, other stores etc.

you should be able to save your coupons that you like, 
for easy access later.

oAuth configuration - log in with your facebook - 
or sign up with email, 2 step phone authentication?

more stretch =
take picture of a coupon and be able to add that coupon -
exp dates and all - crowd supported coupons - to weed out 
bad coupons from ones that work 
Honey ext


APIs to consider:
Groupon API
Discount API
Coupons.com API
//

---

---

Models

- User
- Coupons
- (Auth)

User has many coupons
Coupons has many users

---

Controllers
Users
Coupons




***********
Component Hierarchy

App
|_User Login (Token = False)
|_User Main Page (Token = True)
    |_ Nav
        |_Side Nav
            |_Favorited Coupons
            |_ Settings 
                |_Profile
                |_Default Settings
            |_ LogOut Button

    |_Search Container
        |_Search Input
        |_Filters 
    |_ Item Container
        |_Items List
            |_Item (preview of deal/exp date/photo preview)
                |_View (Barcode/details/bigger photo/compare prices
                         with other stores/chains?)

    ///////////








    ##
    lots of styling 
    - cards,
    - card details 
    - main page 
    token auth  
    - create new acc 
    - reset password to email 
    - auth0?
    advanced search 
    - location 
    - category 

    -scrolling down renders new items 
    -drag down rerenders the item container
