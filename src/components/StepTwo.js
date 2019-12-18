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
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="france">France</option>
                </select>
            </div>
            <div className='form-group'>
                <label className='label' for='gender'>
                Gender
                </label>
                <button><img src = 'standing-up-man-.png'/>Male</button>
                <button><img src = 'girl.png'/>Female</button>
            </div>
            <div className='margin-2 about'>
                <label for='about-you'>
                About you
                </label>
                <textarea placeholder='Leave your message here about enquiry' rows='7' cols='40'/>
                <br/>
            </div>
            <div className='textarea-bottom'>
                 <a className='html' href='#'>HTML code allowed</a>
                <p className='para' ><img src ='fountain-pen.png'/>300 chars left</p>
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