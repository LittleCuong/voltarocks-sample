import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Login from './layouts/Login';
import SignUp from './layouts/SignUp';
import AdminDashboard from './layouts/AdminDashboard';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/dashboard" element={<AdminDashboard />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
