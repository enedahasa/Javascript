import React, { useState } from  'react';

const Forms = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstnameError, setFirstNameError] = useState ("");
    const [lastname, setLastName] = useState("");
    const [lastnameError, setLastNameError]= useState ("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError]= useState ("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError]= useState ("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const {personList, setPersonList} = props;
    

const createUser = (e) => {

        e.preventDefault();
        setPersonList([...personList,{firstname:firstname,lastname:lastname,email:email,password:password,confirmpassword:confirmpassword}]);
        console.log(personList);

        const newUser = { firstname,lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);

        setFirstName("");
        setLastName(""); 
        setEmail(""); 
        setPassword("");
        setConfirmPassword("");

        setHasBeenSubmitted( true );
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    };

    const handlepassword = (e) => {
        setPassword (e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError ("Password must be at least 8 characters Passwords must match");
        } else {
            setPasswordError("");
        }
    };



   
    return(
        <div>
        <form onSubmit={(e) => createUser (e)}>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ handleFirstName } />
                {
                    firstnameError ?
                    <p>{firstnameError}</p>:
                    ''
                }
            </div>
           

            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ handleLastName } />
                {
                    lastnameError ?
                    <p>{lastnameError}</p>:
                    ''
                }
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="email" value={email} onChange={handleEmail} />
                {
                    emailError ?
                    <p>{emailError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={handlepassword} />
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
    );
};

    export default Forms;