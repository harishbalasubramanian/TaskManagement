import './registration.scss'
import '../../styles/components/_button.scss'
import {useState} from 'react'
import {useDispatch} from 'react-redux';
import {signin} from '../../redux/authSlice';
// This is the SignIn Component. It updates using redux the state of the textboxes and just contains
// a simple sign in form. Upon submitting it will dispatch redux.
const SignIn = () => {
    const dispatch = useDispatch();
    const [state,setState] = useState({
        email:'',
        password:'',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin({
            email:state.email,
            password:state.password,
        }))
    };
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
    };
  return (
    <div>
        <div className="signup-form">
            <div className="signup-form__wrapper">
                <form className='form' onSubmit={handleSubmit}>
                    <h4>Sign In</h4>
                    
                    <div className="form-group">
                        <input type="email" name="email" value = {state.email} id="" placeholder="Enter Email" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Enter Password" id="" />
                    </div>
                    <div className="form-group">
                        <button className='button'>Sign In</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default SignIn