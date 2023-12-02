import React, { useState } from  'react';
    
const HookForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const {personList, setPersonList} = props;  
    
const createUser = (e) => {
       
        e.preventDefault();
        setPersonList([...personList,{firstname:firstname,lastname:lastname,email:email,password:password,confirmpassword:confirmpassword}]);
        console.log(personList);
    
        setFirstName("");
        setLastName(""); 
        setEmail(""); 
        setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <div>
        <form onSubmit={(e) => createUser (e)}>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
    
export default HookForm;
