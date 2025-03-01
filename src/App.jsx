import React, { memo, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Home, Onboarding, Profile } from './pages'
import { useStateContext } from "./context";
import MedicalRecords from './pages/records/index'


const App = () => {
    const { user, authenticated, ready, login, currentUser } = useStateContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (ready && !authenticated) {
            login();
        } else if (user && !currentUser) {
            navigate("/onboarding");
        }
    }, [user, authenticated, ready, login, currentUser, navigate]);

    return (
        <div className='sm:-8 relative flex min-h-screen flex-row bg-[#13131a] p-4'>
            <div className='relative mr-10 hidden sm:flex'>
                {/*sidebar*/}
                <Sidebar />
            </div>
            <div className='mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5'>
                {/*Navbar*/}
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/onboarding' element={<Onboarding />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path="/medical-records" element={<MedicalRecords />} />
                </Routes>
            </div>
        </div>
    )
}

export default memo(App)