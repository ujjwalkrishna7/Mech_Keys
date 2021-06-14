# MechKeys
A Keyboard E-commerce platform where u could buy and sell mechanical Keyboards. Payments can be done with both Cryptocurrency and real cash.

## Live Web link:
https://mech-keyz-app.herokuapp.com

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
COINBASE_API_KEY = your coinbase api key
COINBASE_WEBHOOK = your coinbase webhook key

```

### How to Install Dependencies (frontend & backend)
Run this script in your terminal:

```
npm install
cd frontend
npm install
```

### How to Run the app
To run both frontend (:3000) & backend (:5000), use:

```

npm run dev
```

To run just the backend, use:
```
npm run server
```

