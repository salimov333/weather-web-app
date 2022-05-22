# Weather-web-app
- `JavaScript` 
- `Node.js`
- `HTML`
- `CSS`
## Use the weather API to create a weather web-app that gets the weather based on a city name.
---
### Resources:
#### [weather api](https://www.weatherapi.com/)
#### [axios documentation](https://www.npmjs.com/package/axios)
---
### Install:
```bash
`not completed`
npm i
```
### Run:
```bash
`not completed`
```
---
### Starter cmd:
```bash
npm init -y
echo "node_modules/" > .gitignore
npm i axios
npm i gh-pages -D
mkdir src styles
touch index.html src/index.js styles/style.css 
```

### Constructor:
#### package.json
```JSON
"script":{
    "build": "rm dist -rf && mkdir dist && cp -r src/* dist",
    "publish": "gh-pages -d dist"
}
```
#### deploy
```bash
npm-run-all build publish
```