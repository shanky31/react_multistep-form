import React from "react";

const StepTwo = (props) => {
    return (
        <>
        <header>
            <img src="user.png" />
            <h4>Create account for full access</h4>
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
            <div className='form-group'>
                <label for='fname'>
                Full name
                </label>
                <input className='center' type='text' name= 'fname'/>
            </div>
            <div className='form-group'>
                <label for='country'>
                Country
                </label>
                <select>
                  <option value="grapefruit">India</option>
                  <option value="lime">USA</option>
                  <option value="coconut">UK</option>
                  <option value="mango">France</option>
                </select>
            </div>
            <div className='form-group'>
                <label for='password'>
                Password
                </label>
                <input type='password' className='center' name= 'password'/>
                <button className='checkbox' type='checkbox'></button>
                <p>
                    Show Password
                </p>
            </div>
            <div className='form-group last-one'>
                <label for='avatar'>
                Select Avatar
                </label>
                <input type='file' className='center' name= 'avatar'/>
            </div>
        </form>
        <hr></hr>
        <footer>
            <div>
                Step 2 of 3
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

export default StepTwo;