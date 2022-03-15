## Create a personal token
You need a “personal token” before you can validate purchase codes for your items. This is similar to a password that grants limited access to your account, but it’s exclusively for the API.

Go to [https://build.envato.com/create-token/](https://build.envato.com/create-token/) (sign in if prompted).
For purchase code verification you must select the following permissions:

- View and search Envato sites (selected by default)
- View the user’s items’ sales history

After creating the token, copy and save it somewhere. Envato won’t show the token to you again.

## Secure your personal token

Your personal token is like a password that grants limited access to your account. You need to keep it private and secure.

Follow the steps below after generating your token:

- Rename `.env.local` to `.env`
- Paste the copied token from the section above after `=` inside `.env`

## Start Development Server

```js	
npm run develop
```

🍻Cheers!