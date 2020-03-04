import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, } from '../../actions/authActions';
import { init } from '../../actions/gameActions';
// import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../utils/assets/coachmelogo-white.svg';

//Component Imports
// import Modal from './Modal';

// //Styling
// import './loginCoach.scss';

const ClientLogin = props => {

    const [creds, setCreds] = useState({ username: '', email: '', password: '' });
    const dispatch = useDispatch()




    const handleChange = e => {
        console.log('hi')
        setCreds({ ...creds, [e.target.name]: e.target.value });
    };

    // useEffect(() => {
    //     setCreds({
    //         username : username,
    //         email: email,
    //         password: password
    //     });
    // }, [email, password, username]);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(loginUser(creds))



    };
    return (
        <>
            {/* {modal ? <Modal setModal={setModal} /> : null} */}
            <div className='Login-Wrapper'>
         
                <div className='Form-Container'>
                    <h1>Login</h1>
                    
                    <form
                        className='Login-Form-Wrapper'
                        onSubmit={e => {
                            handleSubmit(e);
                        }}
                    >
                        <div className='input-Wrapper'>
                            <div className='input-layout'>
                            <label>Username</label>
                                <input
                                    data-cy='input1'
                                    type='text'
                                    placeholder= 'Username'
                                    name='username'
                                    className='username'
                                    onChange={handleChange}
                                    value={creds.username}
                                />
                                <label>Email</label>
                                <input
                                    data-cy='input1'
                                    type='text'
                                    placeholder='Email'
                                    name='email'
                                    className='email'
                                    onChange={handleChange}
                                    value={creds.email}
                                />
                            </div>
                            <div className='input-layout'>
                                <label>Password</label>
                                <input
                                    data-cy='input2'
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    className='password'
                                    onChange={handleChange}
                                    value={creds.password}
                                />

                            </div>
                        </div>
                        <div className='layout-wrapper'>
                            <button type='submit' className='signup-btn'>
                                {' '}
                                Login
                            </button>
                          
                            <div className='register-container'>
                                Don't have an account?{' '}
                                {/* <Link className='register' to='/register'>
                                    Sign up
                                </Link> */}
                            </div>
                        </div>
                    </form>
                    {/* <button type='submit' className='signup-btn' onClick ={ ()=> dispatch(init())}>
                                {' '}
                                get
                            </button> */}
                </div>
            </div>

        </>
    );
};

export default ClientLogin;