import React from 'react';

const Layout = ({ Header, List, Form }) => (
    <div>
        <header><Header /></header>
        <main>
            <section><List /></section>
            <section><Form /></section>
        </main>
    </div>
);

export default Layout;