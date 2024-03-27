# myTVshows <img src="https://raw.githubusercontent.com/Pau-c/myTVshows/5ef50e4b52782cb2f430ca30220c1109809c0f23/public/Television-comic.svg" alt="react" widht="70" height="70" />

Keep track of what you're watching

---


 <div align="center">
  
<!-- PROJECT SHIELDS -->
[![ReactBadge][react-shield]][react-url]
[![axiosBadge][axios-shield]][axios-url]
[![yupBadge][yup-shield]][yup-url]
[![sweetAlert2Badge][sweetAlert2-shield]][sweetAlert2-url]
[![firebaseBadge][firebase-shield]][firebase-url]
[![bootstrapBadge][bootstrap-shield]][bootstrap-url]
<!-- PROJECT SHIELDS -->
  
 </div>
 
TV Series app utilizing the TMDB API. Features include:

- Displaying the most popular series in a grid format.
- Searching for shows by name, returning basic information.
- Allowing users to create usernames and maintain a list of favorite shows.

---

# Getting started

Installation:

1. Make an account at [TMDB](https://www.themoviedb.org/) and get API Key
2. Clone the repo

```
git clone https://github.com/Pau-c/myTVshows.git
```

3. Install NPM packages

```
npm install
```

4. `install Firebase`
   
> [!IMPORTANT]
> Get a `Firestore/Firebase` account and make an `.env` file in root with the `SDKs` from Firebase and the `API key` TMDB provided.
> Add the prefix `REACT_APP_` to every variable.
> It should look like this:

```
//firebase env variables. paste values without ""
REACT_APP_FIREBASE_apiKey=
REACT_APP_FIREBASE_authDomain=
REACT_APP_FIREBASE_projectId=
REACT_APP_FIREBASE_storageBucket=
REACT_APP_FIREBASE_messagingSenderId=
REACT_APP_FIREBASE_appId=
//key for tmdb api
REACT_APP_MOVIE_API_KEY=
```

---
## :tv: [**Demo**](https://my-tvshows.netlify.app/)

<!-- PROJECT SHIELDS VARIABLES-->


[axios-shield]:https://img.shields.io/badge/Routes-axios-black?labelColor=black&color=teal
[axios-url]:https://axios-http.com/
[bootstrap-shield]:https://img.shields.io/badge/CSS-React_Bootstrap-black?labelColor=black&color=teal
[bootstrap-url]: https://react-bootstrap.github.io/
[firebase-shield]:https://img.shields.io/badge/DB-Firebase-black?labelColor=black&color=teal
[firebase-url]:https://firebase.google.com/
[react-shield]:https://img.shields.io/badge/Front-React%2FJs-red
[react-url]:https://www.npmjs.com/package/react
[sweetAlert2-shield]: https://img.shields.io/badge/Alerts-SweetAlerts2-black?labelColor=black&color=teal
[sweetAlert2-url]: https://sweetalert2.github.io/
[yup-shield]:https://img.shields.io/badge/Validation-yup-black?labelColor=black&color=teal
[yup-url]: https://www.npmjs.com/package/yup
