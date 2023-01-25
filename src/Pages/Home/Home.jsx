import React from 'react';
import { Header } from './Header/Header';

const Home = () => {
    document.title= "Home";
    return (
        <div>
            <Header></Header>
        </div>
    );
};

export default Home;