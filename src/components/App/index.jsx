import 'normalize.css';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { Footer } from 'components/Footer';
import styles from './style.module.scss';

export function App() {
    return (
        <div className={styles}>
            <Header />
            <Main />
            <Footer />
            {/* <div className={styles.app__bg} >
            <div className={styles.app__bg_glass} />
                <div className={styles.app__bg_noise} />
            </div> */}
        </div>
    );
}

export default App;
