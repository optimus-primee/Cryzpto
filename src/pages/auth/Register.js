import React,{useState} from 'react';
import bg from "../../assests/bg.mp4"
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { Button } from '../../components/buttons/Button';
import google from "../../assests/google.png"
import facebook from "../../assests/facebook.png"

function Register() {
  const [values, setValues] = useState({
    showPass: false,
  });
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  return (
    <div>
      <div className='w-full h-screen'>
        <div className='grid grid-cols-1  sm:grid-cols-6'>
        <div className="flex flex-col justify-center items-center py-8 sm:py-0 bg-[#030205] col-span-2 sm:order-first order-last">
          <div className="flex justify-center items-center gap-5 mb-4">
            <Button variant="primary" imgSrc={google} imgAlt="google">
              Google
            </Button>
            <Button variant="primary" imgSrc={facebook} imgAlt="google">
              Facebook
            </Button>
          </div>
          <div className="flex justify-center items-center font-medium">Or</div>
          <form className="px-4 sm:px-6 lg:px-10 xl:px-14 w-[100%]">
            <div className="mb-4">
              <label className="mb-3 text-base font-medium text-white">Full Name</label>
              <input
                className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg"
                type="text"
                placeholder="Limo"
              />
            </div>
            <div className="mb-4">
              <label className="mb-3 text-base font-medium text-white">
                Email Address
              </label>
              <input
                className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg"
                type="text"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="mb-3 text-base font-medium  text-white">Username</label>
              <input
                className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg"
                type="text"
                placeholder="isaaclimo"
              />
            </div>
            <div className="mb-6 relative ">
              <label className="mb-3 text-base font-medium text-white">Password</label>
              <input
                type={values.showPass ? "text" : "password"}
                label="Password"
                required
                className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg"
              />
              <span className="absolute right-[8px] top-[40px] text-white cursor-pointer">
                <span onClick={handlePassVisibilty}>
                {values.showPass ? <IoEyeSharp /> : <IoEyeOffSharp />}
                </span>
              </span>
            </div>
            <div className="flex items-start gap-[10px] text-base font-medium w-[100%] sm:max-w-[340px]">
              <input type="checkbox" className="mt-[5px]" />
              <h5 className="text-white">
                By creating an account you agree to the{" "}
                <a className="text-[#ffffff]">terms of use</a> and our
                <a className="text-[#ffffff]"> privacy policy.</a>
              </h5>
            </div>
            <div className="sm:my-6 my-4 ">
              <Button
                variant="secondary"
                paddingLess="true"
                className="w-[100%] h-[48px] text-[#ffffff] text-base"
              >
                Create account
              </Button>
            </div>

            <h5 className=" text-center text-base font-medium text-white">
              Already have an account?{" "}
              <a href="/login" className="underline text-[#ffffff]">
                Login
              </a>
            </h5>
          </form>
        </div>
          
          <div className='col-span-4 relative sm:h-screen h-[40vh]'>
          <div className='absolute top-0 left-0 w-full h-full overflow-hidden bg-black'>
          <video
            className='min-h-full min-w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover'
            autoPlay
            loop
            muted
            type='video/mp4'
          >
            <source src={bg} />
          </video>
        </div>

            </div>
      
        </div>
      </div>
    </div>
  );
}

export default Register;