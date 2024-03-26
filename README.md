# myTVshows 
Keep track of what you're watching 

---  
 <img src="https://raw.githubusercontent.com/Pau-c/myTVshows/5ef50e4b52782cb2f430ca30220c1109809c0f23/public/Television-comic.svg" alt="react" widht="70" height="70" />

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
```js
npm install
```
4. `install Firebase`
> [!IMPORTANT]
> Get a `Firestore/Firebase` account and make an `.env` file in root with the  `SDKs` from Firebase and the `API key` TMDB provided 
Add the prefix  `REACT_APP_` to every variable.
 It should look like this:
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

## 🛠️Built with:


<table>
    <tr>
        <td> <img src="https://img.icons8.com/color/30/null/html-5--v1.png" alt="icono de HTML5" width="30" height="30" /> HTML5</td>
        <td> <img src="https://img.icons8.com/color/30/null/bootstrap.png" alt="icono de Bootstrap" width="30" height="30" /> Bootstrap</td>
        <td><a href="https://axios-http.com/">Axios</a></td>
    </tr>
    <tr>
        <td> <img src="https://img.icons8.com/color/30/null/javascript--v1.png" alt="icono de JavaScript" width="30" height="30" /> JavaScript</td>
        <td> <img src="https://img.icons8.com/plasticine/30/null/react.png" alt="icono de React" width="30" height="30" /> React</td>
        <td><a href="https://reactrouter.com/en/main">React Router DOM</a></td>
    </tr>
    <tr>   
        <td> <img src="https://img.icons8.com/color/30/null/css3.png" alt="icono de CSS3" width="30" height="30" /> CSS3</td>
        <td> <img src="https://img.icons8.com/color/30/null/bootstrap.png" alt="icono de Bootstrap" width="30" height="30" /><a href="https://react-bootstrap.github.io/"> React Bootstrap</a></td>
        <td><a href="https://sweetalert2.github.io/">Sweet Alert 2</a> used in error messages</td>
    </tr>
<tr>
 <td><a href="https://www.npmjs.com/package/yup">yup</a> for input validation</td>
    </tr>
</table>

## :tv: [**Demo**](https://my-tvshows.netlify.app/)

