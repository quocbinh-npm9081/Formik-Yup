import React, {
    useState,
    useEffect,
} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './signup.css';
const Signup = () => {

    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmedPassword, setConfirmedPassword] = useState('');

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmedPassword: ''
    });

    const formik = useFormik({
        initialValues: user,
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Require")
                .min(4, "must be 4 characters or more"),
            email: Yup.string()
                .required("Require")
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter your email'),
            password: Yup.string()
                .required("Require")
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must be 7-19 character and contain at least ne letter, one number and a special character'),
            confirmedPassword: Yup.string()
                .required("Require")
                .oneOf([Yup.ref('password'), null], 'Password must match'),
            phone: Yup.string()
                .required("Require")
                .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Must be invalid')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(formik.errors);


            console.log("submit ok", values);
            resetForm();

        }
    });

    // console.log(formik.errors);

    return (
        <section>
            <form
                className='infoform'
                onSubmit={formik.handleSubmit}
            >
                <span htmlFor='name'>Your name: </span>
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder='Enter your name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />

                <span htmlFor='email'>Your email: </span>
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />

                <span htmlFor='phone'>Your phone: </span>
                <input
                    type="text"
                    id='phone'
                    name='phone'
                    placeholder='Enter your phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                />

                <span htmlFor='password'>Your password: </span>
                <input
                    type="password"
                    id='password'
                    name='password'
                    placeholder='Enter your password'
                    value={formik.values.password}
                    onChange={formik.handleChange}

                />

                <span htmlFor='confirmedPassword'>Confirmed password: </span>
                <input
                    type="password"
                    id='confirmedPassword'
                    name='confirmedPassword'
                    placeholder='Enter your confirmed'
                    value={formik.values.confirmedPassword}
                    onChange={formik.handleChange}
                />


                <button type='submit'>Submit</button>
            </form>

        </section>
    );
};

export default Signup;