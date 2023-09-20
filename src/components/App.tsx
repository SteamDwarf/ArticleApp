import { Link, Route, Routes } from 'react-router-dom';
import styles  from './App.module.scss';
import { Suspense } from 'react';
import { AboutLazy } from './pages/About/AboutLazy';
import { HomeLazy } from './pages/Home/HomeLazy';

const App = () => {
    return (
        <div className='app'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Suspense fallback="Подождите...">
                <Routes>
                    <Route path='/' element={<HomeLazy />}/>
                    <Route path='/about' element={<AboutLazy />}/>
                </Routes>
            </Suspense>
        </div>
            
    );
}

export default App;