import { connect } from 'react-redux';
import { getIsLogin } from './store/User/userReducer';
import React, { Component } from "react";
import './App.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import NotFound from './components/NotFound';
import UserComponent from './components/User/UserContainer';
import UserHook from "./Application/UserHookComponent";
import Student from "./Application/StudentComponent";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Payment/Checkout";
import Coupon from "./components/Coupon/Coupon";
import AddProduct from "./components/Product/AddProduct";
import ReviewModal from "./components/Modal/ReviewModal";
import Review from "./components/Product/Review";
import MyOrder from "./components/MyOrder/MyOrder";
import Authentication from './components/Authentication/Authentication';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }
    }

    updateName = (value) => {
        this.setState({
            name: value
        })
    }

    render() {
        const { isLogin } = this.props; 
        
        return(
           <>
           
            <Router>
                <ToastContainer />
                <Header userName={this.state.name} />
    
                <div id="routes-page">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/user" element={isLogin ? <Navigate to="/home" /> : <UserComponent />} />
                        <Route path="/auth" element={<Authentication />} />
                        <Route path="/userHook" element={<UserHook />} />
                        <Route path="/student" element={<Student />} />
                        <Route path="/product" element={<AddProduct />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about/:id" element={<About />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/coupon" element={<Coupon />} />
                        <Route path="/order" element={<MyOrder />} />
                        <Route path="/reviewModal" element={<ReviewModal />} />
                        <Route path="/review/:productId" element={<Review />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
    
                <Footer /> 
            </Router>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: getIsLogin(state)
    };
};

export default connect(mapStateToProps)(App);