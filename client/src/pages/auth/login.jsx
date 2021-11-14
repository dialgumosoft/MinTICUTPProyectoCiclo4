import { Formik, ErrorMessage, Field, Form } from 'formik';
import './login.css'

function Login () {
    return(        
        <div className="form-signin">
            <Formik
            
            >
            {() => (
                <Form>
                    <img className="mb-4" src="iniciallogo.png" alt="" />
                    <h1 className="h3 mb-3 fw-normal">Sign in</h1>

                    <div className="form-floating">
                        <Field
                            type="text"
                            className="form-control"
                            name="user"
                            id="user"
                            placeholder="example@correo.com"
                        />
                        <label htmlFor="user">User name</label>
                    </div>

                    <div className="form-floating">
                        <Field
                            type="password"
                            className="form-control"
                            name="pass"
                            id="pass"
                            placeholder="Password"
                        />
                        <label htmlFor="pass">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <Field 
                                type="checkbox"
                                value="remember-me"
                            /> Remember Me
                        </label>
                    </div>

                    <button
                        className="w-100 btn btn-lg btn-primary" 
                        type="submit"
                    >
                        Sign in
                    </button>
                </Form>
            )}    
            </Formik>
        </div>
    )
};

export default Login;