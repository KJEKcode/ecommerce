# ecommerce
Next.js | Strapi | Magic | Stripe | eCommerce

## Getting Started
**Starting the Backend**
1. cd ecommerce-backend
2. touch .env
3. add STRIPE_SK=YOUR KEY HERE to .env
4. npm i
5. npm run build
6. npm run develop
  - http://localhost:1337/admin
7. Setup admin account
8. Settings -> Users & Permissions plugin -> Roles -> Authenticated -> Permissions -> order -> Check the following:
  - create
  - find
  - findone
9. Settings -> Users & Permissions plugin -> Roles -> Public -> Permissions -> check the following
  - Order
    - confirm
  - product
    - find
    - findone

**Starting the Frontend**

1. add magic public key to ecommerce-frontend\utils\urls.js
2. add stripe public key to ecommerce-frontend\utils\urls.js
3. cd ecommerce-frontend
4. npm i
5. npm run dev
  - http://localhost:3000

## Customers Can:
* Select a login link if they are unverified
* Select an account link if they are verified
* Login by providing a email address
  - login persist though reload
* Verify email for account activation
  - Magic Verification Link sent via email
* Select products from the list
* View Product Details
  - Name
  - Image
  - Description
  - Price
* Purchase products
  - Secure checkout using Stripe
* View Account page
  - Displays list of orders
  - Displays current logged in user
* Logout

## Updates

###### 12-21-2020-0833pm
created success page

**NEW**
* ecommerce-frontend\pages\success.js

**EDIT**
* ecommerce-backend\api\order\config\routes.json
* ecommerce-backend\api\order\controllers\order.js

###### 12-21-2020-0226pm 
modified order controller to create new orders and created a buy button with Stripe functionality 

**NEW**
* ecommerce-frontend\components\BuyButton.js
* ecommerce-frontend\styles\BuyButton.module.css

**EDIT**
* ecommerce-backend\api\order\controllers\order.js
* ecommerce-backend\.env.example
* ecommerce-frontend\pages\products\[slug].js
* ecommerce-frontend\utils\urls.js
* ecommerce-frontend\package.json


###### 12-19-2020-0914pm
Created orders functionality, added orders to strapi, created find and findOne endpoints, limited users to only seeing orders for their account

**NEW**
* ecommerce-backend\api\order

**EDIT**
* ecommerce-backend\api\order\controllers\order.js
* ecommerce-frontend\context\AuthContext.js
* ecommerce-frontend\pages\account.js

###### 12-16-2020-0836pm
Connected Magic and Strapi by installing strapi user permissions plugin and adding magic secret key in strapi dashboard

**NEW**
* ecommerce-backend/extensions/user/permissions/policies/permissions.js
* 
**EDIT**
* ecommerce-frontend/context/AuthContext.js

###### 12-16-2020-0745pm
added user authentication, added user icon to header, created login and account pages

**NEW**
* context/AuthContext
* public/user-icon.png
* pages/account
* pages/login

**EDIT**
* components/Header.js
* pages/app.js
* styles/header.module.css
* utils/urls.js
* package.json

###### 12-14-2020-1028pm
created header and footer component

**NEW** 
* ecommerce-frontend/components
* ecommerce-frontend/components/Footer.js
* ecommerce-frontend/components/Header.js

**EDIT**
* ecommerce\ecommerce-frontend\pages\_app.js
* ecommerce\ecommerce-frontend\styles\globals.css

###### 12-14-20-200-0900pm
allow next.js frontend to utilize strapi backend

**EDIT**
* ecommerce-frontend/pages/product/slug.js
* ecommerce-frontend/pages/index.js
* ecommerce-frontend/utils/urls.js

###### 12-14-2020-0800pm
created strapi backend and next.js frontend
* setup admin
* setup product collection
* added products
* rendered: ecommerce\ecommerce-frontend\products.json

**NEW**
* ecommerce\ecommerce-frontend\utils\format.js
* ecommerce\ecommerce-frontend\utils\urls.js
* 
**EDIT**
* ecommerce\ecommerce-frontend\pages\index.js
* ecommerce\ecommerce-frontend\styles
