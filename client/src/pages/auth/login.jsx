import { Formik, ErrorMessage, Field, Form } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import { HOST } from '../../settings/settings';
import Cookies from 'universal-cookie';
import { calculaExtraccionSesion } from '../../components/helpers/helpers';

import './login.css';

const cookies = new Cookies();

function Login () {
    function signup(e){
        Swal.fire({
            icon: 'signup',
            title: 'Registrarse'
        });
    };

    return( 
        <div className="form-signin">
            <Formik
                initialValues = {{
                    email:"",
                    password:""
                }}

                validate = {(values) => {
                    const errors = {};

                    if(!values.email) errors.email = "Ingrese un usuario";
                    if(!values.password) errors.password = "Ingrese la contraseña";                  
                    return errors;
                }}

                onSubmit = {(values) => {    
                    axios.post(`${HOST}/api/auth/signin`, values)
                    .then((response) => {
                        console.log(response)
                        if(response.status === 200){
                            cookies.set('_s', response.data.token, {
                                path: '/',
                                expires: calculaExtraccionSesion(),
                            });
                        };
                    })
                    .catch((err) => {
                        if(err.response.status === 400){
                            Swal.fire({
                                icon:'error',
                                title: 'Ha ocurrido un error!',
                                text:'Usuario no encontrado'
                            });
                        } else if(err.response.status === 401){
                            Swal.fire({
                                icon:'error',
                                title:'Ha ocurrido un error!',
                                text:'La contraseña ingresada no es valida.'
                            });
                        };
                    });                    
                }}
            
            >
            {() => (
                <Form>
                    <img className="mb-2" src="iniciallogo.png" alt="" />
                    <h1 className="h3 mb-2 fw-normal">Sign in</h1>

                    <div className="form-floating">
                        <Field
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="example@correo.com"
                        />
                        <label htmlFor="email">User name</label>
                        <ErrorMessage ErrorMessage name="email">
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

                    <div className="checkbox mb-3">
                        <label>
                            <Field 
                                type="checkbox"
                                value="remember-me"
                                id="remember"
                                name="remember"
                            /> Remember Me
                        </label>
                    </div>

                    <button
                        className="w-100 btn btn-lg btn-primary" 
                        type="submit"
                    >
                        Sign in
                    </button>

                    <hr/>
                   
                    <button
                        className="w-100 btn btn-lg btn-dark" 
                        type="submit"
                        onClick={signup}
                    >
                        Sign up
                    </button>
                    <p className="mt-3 mb-3 text-muted">© Munchique Software, Inc. All rights reserved 2021</p>
                </Form>
            )}    
            </Formik>
        </div>        
    )
} 

export default Login;