# Recover.ws website - Lost & Found service

Lost & Found service based on Ethereum, IPFS and Kleros.

## Getting started

`cp .airtable.development .airtable # to set up the configuration`

Add your __Airtable__ credentials to `.airtable`.

`yarn start # to run the application`

`yarn test # to run the tests`

`yarn build # to build the application`

## Note

A priori, we cannot test the Mail Subscription service in the development environnement. Because this service uses Netlify Form, and we cannot test it in this environnement.
See https://community.netlify.com/t/netlify-form-in-development-application/9424 .

It's not a big deal, but it's a matter of knowing.