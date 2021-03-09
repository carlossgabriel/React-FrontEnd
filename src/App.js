import React from 'react';

import Header from './components/Header'

function App() {
    return <Header />;

    // return (
    //     <div>
    //         <Header/>
    //         <Header/>
    //     </div>
    // );

    // Fragments: when you don't wan't the elements to interfeer in your DOM,
    // It will create individual divs without a parent div
    // return (
    //     <>
    //         <Header/>
    //         <Header/>
    //     </>
    // );
}

export default App;