import React from 'react';
import Header from './components/Header/Header.component';
import ListContainer from './containers/List.container';
import FormContainer from './containers/Form.container';
import styles from './App.module.css';

const App = () => (
    <div className="App">
        <header>
            <Header />
        </header>
        <main className={styles.main}>
            <section>
                <ListContainer />
            </section>
            <section>
                <FormContainer />
            </section>
        </main>
    </div>
);

export default App;
