import { Formik, ErrorMessage, Field, Form } from 'formik';
import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { HOST } from '../../settings/settings';
import Cookies from 'universal-cookie';
import { calculaExtraccionSesion } from '../../components/helpers/helpers';



const cookies = new Cookies();

function SignUp (params) {

    return( 
        <div className="form-signin text-center">
            <Formik
                initialValues = {{
                    username:"",
                    email:"",
                    password:""
                }}

                validate = {(values) => {
                    const errors = {};

                    if(!values.email) errors.email = "Ingrese un correo";
                    if(!values.username) errors.username = "Ingrese el usuario"; 
                    if(!values.password) errors.password = "Ingrese la contraseña";                  
                    return errors;
                }}

                onSubmit = {(values) => {    
                    axios.post(`${HOST}/api/auth/signup`, values)
                    .then((response) => {
                        if(response.status === 200){
                            cookies.set('_s', response.data.token, {
                                path: '/',
                                expires: calculaExtraccionSesion(),
                            });
                            params.history.push('/home');
                        };
                    })
                    .catch((err) => {
                        if(err.response.status === 400){
                            Swal.fire({
                                icon:'error',
                                title: 'Ha ocurrido un error!',
                                text: err
                            });
                        } 
                    });                    
                }}
            
            >
            {() => (
                <Form>
                    <img className="mb-3 mt-2" src="iniciallogo.png" alt="" />
                    <h1 className="h3 mb-2 fw-normal">Sign up</h1>

                    <div className="form-floating">
                        <Field
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="example@correo.com"
                        />
                        <label htmlFor="email">E-mail</label>
                        <ErrorMessage ErrorMessage name="email">
                            {message => <div className="text-danger">{message}</div>}
                        </ErrorMessage>
                    </div>

                    <div className="form-floating">
                        <Field
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            placeholder="example@correo.com"
                        />
                        <label htmlFor="username">User name</label>
                        <ErrorMessage ErrorMessage name="username">
                            {message => <div className="text-danger">{message}</div>}
                        </ErrorMessage>
                    </div>

                    <div className="form-floating">
                        <Field
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        <label htmlFor="password">Password</label>
                        <ErrorMessage ErrorMessage name="password">
                            {message => <div className="text-danger">{message}</div>}
                        </ErrorMessage>
                    </div>

                    <button
                        className="mt-1 w-100 btn btn-lg btn-primary" 
                        type="submit"
                    >
                        Login
                    </button>
                </Form>                
            )}    
            </Formik>
            
            <hr/>

            <p className="mt-3 mb-3 text-muted">© Munchique Software, Inc. All rights reserved 2021</p>
        </div>        
    )
} 

export default SignUp;
