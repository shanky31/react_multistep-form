import React from "react";

const StepOne = (props) => {
    return (
        <>
        <header>
            <img src="add-user.png" />
            <h4>Sign-up to create account</h4>
        </header>
        <hr></hr>
        <ul>
            <li>
                <span>1</span>
                <h5>
                    Account<br/> Information
                </h5>
            </li>
            <li>
                <span>2</span>
                <h5>
                    Personal<br/> Information
                </h5>
            </li>
            <li>
                <span>3</span>
                <h5>
                    Payment<br/> Details

                </h5>
            </li>
        </ul>
        <hr></hr>
        <form>
            <div className='form-group flex'>
                <label for='username'>
                Username
                </label>
                <input className='center' type='text' name= 'username'/>
            </div>
            <div className='form-group flex'>
                <label for='email'>
                Email
                </label>
                <input type='email' className='center' name= 'email'/>
            </div>
            <div className='form-group flex'>
                <label for='password'>
                Password
                </label>
                <input type='password' className='center' name= 'password'/>
                <button className='checkbox' type='checkbox'></button>
                <p>
                    Show Password
                </p>
            </div>
            <div  className=' flex form-group last-one'>
                <label for='avatar'>
                Select Avatar
                </label>
                <input type='file' className='center' name= 'avatar'/>
            </div>
        </form>
        <hr></hr>
        <footer>
            <div>
                Step 1 of 3
            </div>
            <div>
                <a href='#'>cancel</a>
                <span className='or'>or</span>
                <button className='next'>Next Step</button>
            </div>
        </footer>
        </>
    )
}

export default StepOne;