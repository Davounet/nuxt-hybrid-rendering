# Nuxt 3 SSG testing

This repo is deployed [here](https://vermillion-kitten-a87f33.netlify.app/about) through the `yarn run build` command on **netlify**

## Goal

The goal is to have the `useAsyncData` calls not to be made on the client, and for them to be cached at build time.
Currently there are no calls on page load (on `/` and `/about`) but they are made when we navigate between the 2 pages.
