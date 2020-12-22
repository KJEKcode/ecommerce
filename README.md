# ecommerce
Next.js | Strapi | Magic | Stripe | eCommerce

## Getting Started
Starting the Backend
1. cd ecommerce-backend
2. npm i
3. npm run build
4. npm run develop
  - http://localhost:1337
  - http://localhost:1337/admin

Starting the Frontend

5. New Terminal
6. cd ecommerce-frontend
7. npm i
8. npm run dev
  - http://localhost:3000

### Customers Can:
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


###### 12-21-2020-0833pm
created success page

Added
* ecommerce-frontend\pages\success.js

edit
* ecommerce-backend\api\order\config\routes.json
* ecommerce-backend\api\order\controllers\order.js

###### 12-21-2020-0226pm 
modified order controller to create new orders and created a buy button with Stripe functionality 

Added
* ecommerce-frontend\components\BuyButton.js
* ecommerce-frontend\styles\BuyButton.module.css

Edit
* ecommerce-backend\api\order\controllers\order.js
* ecommerce-backend\.env.example
* ecommerce-frontend\pages\products\[slug].js
* ecommerce-frontend\utils\urls.js
* ecommerce-frontend\package.json


###### 12-19-2020-0914pm
Created orders functionality, added orders to strapi, created find and findOne endpoints, limited users to only seeing orders for their account

Added
* ecommerce-backend\api\order
Edit
* ecommerce-backend\api\order\controllers\order.js
* ecommerce-frontend\context\AuthContext.js
* ecommerce-frontend\pages\account.js

###### 12-16-2020-0836pm
Connected Magic and Strapi by installing strapi user permissions plugin and adding magic secret key in strapi dashboard

Created
* ecommerce-backend/extensions/user/permissions/policies/permissions.js

Edited
* ecommerce-frontend/context/AuthContext.js

###### 12-16-2020-0745pm
Added user authentication

Added user icon to header 

Created login and account pages

Edited in ecommerce-frontend
* components/Header.js
* pages/app.js
* styles/header.module.css
* utils/urls.js
* package.json

Created
* context/AuthContext
* public/user-icon.png
* pages/account
* pages/login

###### 12-14-2020-1028pm
Created Header Component

Created Footer Component

Added Back Button to Header

Edited
* pages/_app.js
* style/global.css

Created 
* ecommerce-frontend/components
* ecommerce-frontend/components/Footer.js
* ecommerce-frontend/components/Header.js

###### 12-14-20-200-0900pm
hooked front-end to back-end

Edited
* ecommerce-frontend/pages/product/slug.js
* ecommerce-frontend/pages/index.js
* ecommerce-frontend/utils/urls.js

###### 12-14-2020-0800pm
created ecommerce back-end using strapi
* setup admin
* setup sku
* added products
* rendered products.json for work with

created ecommerce front-end using nextjs
* edited pages/index.js
* edited pages/styles
* created pages/utils
* created pages/utils/format
* created pages/utils/urls



