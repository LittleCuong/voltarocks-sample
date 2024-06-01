import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Login from './layouts/Login';
import SignUp from './layouts/SignUp';
import AdminDashboard from './layouts/AdminDashboard';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <h3>Feature branch</h3>
                <Route path="https://main.d5ufku8xusx57.amplifyapp.com/login" element={<Login />}></Route>
                <Route path="https://main.d5ufku8xusx57.amplifyapp.com/sign-up" element={<SignUp />}></Route>
                <Route path="https://main.d5ufku8xusx57.amplifyapp.com/dashboard" element={<AdminDashboard />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
