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
    const path = require('path');

    module.exports = {
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
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
    yarn webpack serve --mode development
    ```

All ready? Nice

Now let's see some *automagic* stuff appear inside your browser:

Inside the `index.js` , assuming that you already have a *`index.html`* basic file too, insert a simple `<div>` inside the `body` tag, with id="app".

```jsx
<div id="app"></div>
<script src="bundle.js"></script>
```

Ps.: Don't forget to include the script to the `bundle.js` file so Babel can work.

### Now with the JSX

JSX what?

JavaScript XML == JSX is the tool to manipulate and create HTML via Javascript

Wanna try?
Create a `App.js`file with the `React` import, and write a function like the following:

```jsx
function App() {
    return <h1>Hello Go Stack</h1>;
}
```

"How about the magic?" You may ask. Well, in order to run it, first you need to call this component in your `index.js`, calling `render()` and finally passing the created component and the HTML's id that will be rendered:

```jsx
render(<App /> , document.getElementById('app'));
```

About Fragments:

When you don't wan't the elements to interfeer in your DOM, it will create individual divs without a parent div: 

```jsx
return (
        <>
            <Header/>
            <Header/>
        </>
    );
```

https://reactjs.org/docs/getting-started.html
