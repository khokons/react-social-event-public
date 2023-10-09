
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";





const Login = () => {

const {singIn} = useContext(AuthContext);
const location = useLocation()
const navgate = useNavigate()
const [registerError, setRegisterError] = useState('')
const [success, setSuccess] = useState('')

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        setRegisterError('')
        setSuccess('')


        singIn(email,password)
        .then(result =>{
          console.log(result.user);
          setSuccess('User Login Successfully')
          navgate(location?.state ? location.state : "/");
          
          
          
        })

        .catch(error =>{
          console.error(error);
          setRegisterError(error.message)
         
       
        })


    }


  return (
    <div>
        <h2 className="text-2xl text-center font-poppins py-10">Please Login</h2>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
     
      </form>
      <p className="text-center mt-4 text-black">Do not have account? <Link className="text-blue-700 font-bold" to="/register">Register</Link></p>
      <div className="flex justify-center items-center mt-2">
        <button className="btn">Google Login</button>
      </div>
      {
        registerError && <p className='text-center mt-2 text-red-700'>{registerError}</p>
      }

{
    success && <p className='text-center mt-2 text-green-500'>{success}</p>
      }
    </div>
  );
};

export default Login;


