import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Context/AuthProvider';







const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, signinGoogle,setLoading } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate()
    // const [cratedUseremail,setCratedUseremail ]= useState('')

    


  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

 // email Singup
     
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                swal('User Created Successfully.')
                navigate(from, {replace: true});
                const userInfo = {
                    displayName: data.name,
                }
               
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }
// Google SingIn
    
    const handleGoogleSignin = () => {
            signinGoogle().then(result => {
              console.log(result.user)
            swal('User Created Successfully.')
              setLoading(false)
              navigate(from, { replace: true })
            })
          }


        
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 whiteColor rounded-lg border'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-black">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-black ">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-black">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-black">Are You a Admin or a User?</span></label>
                    <select className="input input-bordered w-full max-w-xs"  {...register("role")}>
   
                    <option  value="Admin">Admin</option>
                      <option value="User">User</option>
                     </select>
                    </div>
                    <input className='btn btn-accent  w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='text-black'>Already have an account <Link className=' text-blue-500' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn text-black btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;