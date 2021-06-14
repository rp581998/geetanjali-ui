import React, { useState } from 'react';

const Login = () => {

    const [userLogin, setUserLogin] = useState({
        inputEmail:"",
        inputPassword:""
    });



    const handleLoginInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, ": ", value);

        setUserLogin({ ...userLogin, [name]: value});
    }

    const [records, setRecords] = useState([]);

    const handleSignIn = (e) => {
        console.log("Email Address: ",userLogin.inputEmail)
        console.log("Password: ", userLogin.inputPassword)
        e.preventDefault();

        const newRecord = { ...userLogin, id: new Date().getTime().toString()}
        console.log(": ", records);

        setRecords([...records, newRecord]);
        console.log(": ", newRecord);
    }



    return (
        <div className="container">
            <div className="py-4">
                <h1>User Login</h1>
                <form onSubmit={handleSignIn}>
                    <div className="mb-3 py-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" 
                        id="inputEmail" 
                        name="inputEmail"
                        value={userLogin.inputEmail}
                        onChange={handleLoginInput}
                        aria-describedby="emailHelp" 
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" 
                        id="inputPassword" 
                        value={userLogin.inputPassword}
                        name="inputPassword"
                        onChange={handleLoginInput}
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick="">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;