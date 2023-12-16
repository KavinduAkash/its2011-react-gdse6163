import { Link } from "react-router-dom";
import Input from "./../components/input/input";

function Signup(): JSX.Element {
    return(
      <section className={'flex justify-center items-center p-5'}>
        <div className={'w-fit p-10 border shadow-xl rounded-xl'}>

          <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={'w-24 m-auto'}/>

          <div className={'text-2xl font-bold text-green-600 text-center mt-5'}>
            Sign Up
          </div>

          <div className={'mt-5 min-w-[400px]'}>

            <div className={'flex'}>

              <Input
                type={'text'}
                name={'fname'}
                label={'First Name'}
                placeholder={'Enter your first name'}
                optional={false}/>

              <Input
                type={'text'}
                name={'lname'}
                label={'Last Name'}
                placeholder={'Enter your last name'}
                optional={false}/>

            </div>

            <Input
              type={'text'}
              name={'username'}
              label={'Username'}
              placeholder={'Enter your username'}
              optional={false}/>

            <Input
              type={'email'}
              name={'email'}
              label={'Email'}
              placeholder={'Enter your email'}
              optional={false}/>

            <Input
              type={'password'}
              name={'password'}
              label={'Password'}
              placeholder={'Enter your password'}
              optional={false}/>
          </div>

          <div className={'text-center mt-5'}>
            <button className={'main-btn'}>Sign Up</button>
          </div>

          <div className={'text-center mt-5'}>
            Do have an account? <Link to={'/signin'}><span className={'text-blue-600 underline'}>Sign in now</span></Link>
          </div>

        </div>
      </section>
    );
}

export default Signup;