# ecommerce
eCommerce built with Next.js, Strapi, Magic and Stripe

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



