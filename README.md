# Proyecto-semilla

## Configuración
- HTML Template 
- Sass
- Webpack
- React
- TypeScript
- Environment variable
- Husky 
- Prettier
- Lint-staged 

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

## Vendor (optional)
```
// webpack.prod.js
splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: (module) => {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )?.[1];
            return packageName
              ? `vendor/${packageName.replace("@", "")}`
              : null;
          },
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },

    dist/
      vendor/
        react.8akfihde.js
        react-dom.f78sdjsd8.js
        ....

```