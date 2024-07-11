# Proyecto-semilla

## Configuración
- HTML Template 
- Sass
- Webpack
- React
- TypeScript

### Webpack (v.5.92.1)
 - webpack
 - webpack-cli
 - babel/cli babel/core babel/preset-env
 - dev-server
 #### Loaders
 - babel-loader
 - style-css/css-loader
 - html-loader
 - ts-loader
 ### Plugins 
 - html-webpack-plugin
 - mini-css-extract-plugin
 - sass/sass-loader
 ### Libraries
 - React
 - React-dom


## Scripts
``` 
  "scripts": {
    "start": "run-p -l type-check:watch start:dev",
    "start-dev": "webpack serve --mode development",
    "type-check": "tsc --noEmit --watch",
    "type-check:watch": "npm run type-check -- --watch",
    "build": "tsc --noEmit && webpack --mode development"
  },
```