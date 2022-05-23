# Weather-web-app

- `JavaScript` 
- `HTML`
- `CSS`
## Use the weather API to create a weather web-app that gets the weather based on a city name.
### [APP-Link](https://salimov333.github.io/weather-web-app/)
---
<img src="./src/images/mobile.png" alt="mobile-img" title="mobile" width="250" height="350" />\
<img src="./src/images/tablet.png" alt="tablet-img" title="tablet" width="400" height="300" />\
<img src="./src/images/desktop.png" alt="desktop-img" title="desktop" width="500" height="250" /> 
---
### Resources:
#### [weather api](https://www.weatherapi.com/)
#### [axios documentation](https://www.npmjs.com/package/axios)
---
### Install:
```bash
npm i
```
### Run:
> run index.html using live-server
---
### Starter cmd:
```bash
npm init -y
echo "node_modules/" > .gitignore
echo "dist/" >> .gitignore
npm i axios
npm i gh-pages -D
mkdir src src/styles src/scripts src/images
touch src/index.html src/scripts/index.js src/styles/style.css 
```

### Constructor:
#### package.json
```JSON
"script":{
    "build": "rm dist -rf && mkdir dist && cp -r src/* dist",
    "publish": "gh-pages -d dist",
    "deploy": "npm run build & npm run publish"
}
```
#### deploy
```bash
npm run deploy
```