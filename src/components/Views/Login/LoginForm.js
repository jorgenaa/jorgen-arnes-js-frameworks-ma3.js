import React from 'react';
import {useForm } from "react-hook-form";
import * as yup from "yup";

//import ErrorMessage from './ErrorMessage';

const schema = yup.object().shape({
	userName: yup.string().required("Username is required"),
    password: yup.string().required()
	.min(4, "Password must be at least 4 characters long")
	.max(30, "Password must be less than 10")
 });

const LoginForm = () =>  {
	const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

	const onSubmit = (data) => {
		console.log("data", data);
    }
    
    return (
           <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__element">
                    <label className="form__label">Username</label>    
                    <input className="form__input" name="userName" placeholder="Enter your name" ref={register} />
			        {errors.userName && <p>{errors.userName.message}</p>}            
                </div>

                <div className="form__element">
                    <label className="form__label">Password</label>
                    <input className="form__input" name="password" default="4" placeholder="Enter a password of min 4 characters" ref={register} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <div className="form__element">
                    <label className="form__label"></label>
                    <button className="form__btn-submit" type="submit">Submit</button>
                </div>
           </form>
     
    );
}

 
export default LoginForm;