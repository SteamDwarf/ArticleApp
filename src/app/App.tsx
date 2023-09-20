import { Link, Route, Routes } from 'react-router-dom';
import styles  from 'app/style.scss';
import { Suspense } from 'react';
import { AboutPage } from 'pages/About';
import { HomePage } from 'pages/Home';

const App = () => {
    return (
        <div className='app'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Suspense fallback="Подождите...">
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
            
    );
}

export default App;