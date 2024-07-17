import React, { useState, useRef, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Form, Link, useSearchParams, useNavigate } from 'react-router-dom';
import classes from './AuthForm.module.css';
import { addUser,login ,handleClearErrors} from '../../store/Auth/auth-action';

function AuthForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const loginUser = useSelector((store)=> store.auth.user);
    
    const errors = useSelector((store)=>store.auth.errors);

    const isLoginSuccess = useSelector((store)=> store.auth.isLoginSuccess);
    
    
    const [searchParams] = useSearchParams();
    // const isLogin = searchParams.get('mode') === 'login';
    const [isLogin, setIsLogin] = useState(true);
    const toggleIsLogin = () => {
        setIsLogin(prevIsLogin => !prevIsLogin);
    };
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const ageRef = useRef();
    const professionRef = useRef();
    const diseaseRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSave = (event) => {
        event.preventDefault(); // Prevent default form submission
        

        // Dispatch an action to clear errors
        dispatch(handleClearErrors()); // Assuming you have a clearErrors action creator
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    
        if (isLogin) {
            
            let userObj = {
                email: email,
                password: password
            }
            dispatch(login(userObj));
            
            
        } else {
            const firstName = firstNameRef.current ? firstNameRef.current.value : '';
            const lastName = lastNameRef.current ? lastNameRef.current.value : '';
            const age = ageRef.current ? ageRef.current.value : '';
            const profession = professionRef.current ? professionRef.current.value : '';
            const disease = diseaseRef.current ? diseaseRef.current.value : '';
            let newUserObj = { 
                firstName: firstName,
                lastName: lastName,
                age: age,
                gender: selectedGender,
                profession: profession,
                disease: disease,
                email: email,
                password: password
            }
            dispatch(addUser(newUserObj));
            if (!errors || Object.keys(errors).length === 0) {
                alert("User successfully signed up.");
                setIsLogin(true);
                navigate('/auth/login?mode=login');
            }
            
            
        }
        // Reset the form after successful login or signup
        // Reset the form fields
        emailRef.current.value = '';
        passwordRef.current.value = '';
        if (firstNameRef.current) firstNameRef.current.value = '';
        if (lastNameRef.current) lastNameRef.current.value = '';
        if (ageRef.current) ageRef.current.value = '';
        if (professionRef.current) professionRef.current.value = '';
        if (diseaseRef.current) diseaseRef.current.value = '';
        }


    useEffect(() => {
        if (isLoginSuccess) {
            navigate('/home');
        }
       

    }, [isLoginSuccess, errors]);

return (
    <>
    
        {errors && (
            <p className={classes.errorsDiv}>{Object.values(errors)}</p>
        )}

        <form method="post" className={classes.form}>
            <h2>{isLogin ? 'Log in' : 'Create a new user'}</h2>
           

            {!isLogin && (
                <>
                    <p>
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" ref={firstNameRef} name="firstName" required />
                    </p>

                    <p>
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" ref={lastNameRef} name="lastName" required />
                    </p>

                    <p>
                        <label htmlFor="age">Age</label>
                        <input id="age" type="text" ref={ageRef} name="age" required />
                    </p>

                    <div className={classes.radioContainer}>
                    
                        
                    <p className={classes.radioContainer}>
                        <input 
                            type="radio" 
                            value="male" 
                            checked={selectedGender === 'male'} 
                            onChange={handleGenderChange} />
                        <label>Male</label>
                    </p>
                    <p className={classes.radioContainer}>
                        <input 
                            type="radio" 
                            value="female" 
                            checked={selectedGender === 'female'} 
                            onChange={handleGenderChange} />
                        <label>Female</label>
                    </p>
                            
                    </div>

                    <p>
                        <label htmlFor="profession">Profession</label>
                        <input id="profession" type="text" ref={professionRef} name="profession" required />
                    </p>

                    <p>
                        <label htmlFor="disease">Any Diseases</label>
                        <input id="disease" type="text" ref={diseaseRef} name="disease" required />
                    </p>

                </>
            )}
            

            <p>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" ref={emailRef} name="email" required />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input
                    placeholder='at least 6 numbers or characters'
                    id="password"
                    type="password"
                    ref={passwordRef}
                    name="password"
                    required
                />
            </p>
            

            <div className={classes.actions}>

            <Link to={`?mode=${!isLogin ? 'login' : 'signup'}`} onClick={toggleIsLogin}>
                {isLogin ? 'Create new user' : 'Log in'}
            </Link>
              

            <button onClick={handleSave}>
                Save
            </button> 
        
            </div>
        </form>
    </>
)};
export default AuthForm;