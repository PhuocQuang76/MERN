import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import HomePage from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";

import AuthForm from "./pages/Auth/AuthForm";

import Vaccines from "./pages/Vaccine/Vaccines";
import AddVaccine from "./pages/Vaccine/AddVaccine";
import VaccineDetail from "./pages/Vaccine/VaccineDetail";
import AddDisplayVaccine from "./pages/Vaccine/AddDisplayVaccine";

import Hospitals from "./pages/Hospital/Hospitals";
import AddHospital from "./pages/Hospital/AddHospital";
import HospitalDetail from "./pages/Hospital/HospitalDetail";
import AddDisplayHospital from "./pages/Hospital/AddDisplayHospital";

import Register from "./pages/Register/Register";
import Registers from "./pages/MyProfile/Registers";
import RegisterDetail from "./pages/MyProfile/RegisterDetail";

import UserList from "./pages/Admin/UserList";
import AllRegister from "./pages/Admin/AllRegister";

import Chart from "./pages/Chart/Chart";
import AgeBarChart from "./pages/Chart/AgeBarChart";
import AgePieChart from "./pages/Chart/AgePieChart";
import GenderBarChart from "./pages/Chart/GenderBarChart";
import GenderPieChart from "./pages/Chart/GenderPieChart";

import './App.css';



function App() {
    return (
        <>
           
            <BrowserRouter>
                {/* <ToastContainer /> */}
                <Header />
    
                <div id="routes-page">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/auth/login" element={<AuthForm />} />
                        {/* <Route path="/login" element={<AuthForm />} /> */}
                        
                        {/* <Route path="/admin/*" element={<Admin />} >
                            <Route path="hospital" element={<AddHospital />} />
                            <Route path="vaccine" element={<AddVaccine />} />
                        </Route> */}
                       
                       <Route path="/profile" element={<Registers />}/>


                       <Route path="/chart" element={<Chart />} />
                       <Route path="/ageBarChart" element={<AgeBarChart />}/>
                       <Route path="/agePieChart" element={<AgePieChart />}/>
                       <Route path="/GenderBarChart" element={<GenderBarChart />}/>
                       <Route path="/GenderPieChart" element={<GenderPieChart />}/>
                       

                            {/* <Route path="accepted" element={<RegisterDetail status="accepted" />} />
                            <Route path="vaccinated" element={<RegisterDetail status="vaccinated" />} />
                            <Route path="rejected" element={<RegisterDetail status="rejected" />} />
                            <Route path="canceled" element={<RegisterDetail status="canceled" />} /> */}
                        


                        <Route path="/vaccine" element={<AddDisplayVaccine />} />
                        <Route path="/hospital" element={<AddDisplayHospital />} />

                        <Route path="/contact" element={<Contact />} />

                        <Route path="/register" element={<Register />} />

                        <Route path="/admin" element={<Admin />} />
                        <Route path="/addVaccine" element={<AddVaccine />} />
                        <Route path="/addHospital" element={<AddHospital />} />

                        <Route path="/vaccines" element={<Vaccines />} />
                        <Route path="/vaccine/:vaccineId" element={<VaccineDetail />} />

                        <Route path="/hospitals" element={<Hospitals />} />
                        <Route path="/hospital/:hospitalId" element={<HospitalDetail />} />

                        <Route path="/userList" element={<UserList />} />
                        <Route path="/allRegister" element={<AllRegister />} />
                    </Routes>
                </div>
    
                <Footer /> 
            </BrowserRouter>
        </>
    );
}

export default App;

/*
----- Admin:
register vaccine page
register hospital page
approval screen



------ *User:
register user
user select screen with - Hospital Info, Vaccine, (Number of Doses Required), Appointment, Charges To Payment

payment
done pay navigate to schedule page
    ( On Schedule screen if Current date is less than the Scheduled Date show all details of schedule for the user, if its more then show successfully vaccinated

*/