# React

- Some commands to create and set up an React app

    ```bash
    yarn init -y
    ```

    If it's a web page you're going to use `react-dom` and if it's a mobile app, you'll need `react-native`

    ```bash
    yarn add react react-native
    yarn add react react-dom
    ```

    To install Babel, the loaders and all dependeces:

    ```bash
    yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
    yarn add @babel/cli
    yarn add babel-loader
    ```

---

## The browser can't undestand React and it's components, what should I do?

- Babel is the answer

    What does Babel do?

    Babel transpiles the code so that the browser can undestand. Using webpacks, loaders and presets, now it can undestand React and it's modules.

    So now you have to create an `babel.config.js` file in the root directory of your application.

    This file will keep the configurations to the Babel enviromment, your presets and other stuffs related.

    For an basic application, you can go to BabelJs docs and see their examples.

    [Configure Babel · Babel](https://babeljs.io/docs/en/configuration#babelconfigjson)

    ```jsx
    module.exports = {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ]
        }
    ```

    Then, you can call the JS file so babel can convert it:

    ```jsx
    yarn babel /path/to/file.js --out-file /path/to/bundle.js
    ```

- Complements to Babel

    [Webpacks](https://webpack.js.org/concepts/)

    > webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.
    Tip

    - Create an `webpack.config.js` file,

        ```jsx
        const path = require('path');

        module.exports = {
            entry: path.resolve(__dirname, 'src', 'index.js'),
            output: {
                path: path.resolve(__dirname, 'public'),
                filename: 'bundle.js',
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                        }
                    }
                ]
            }
        }
        ```

    Run the following command:

    ```bash
    yarn webpack --mode development
    ```
