import Signin from '../../component/sign-in-form/signin.component';
import Signup from '../../component/sign-up-form/signup.component';
import {AuthenticationContainer} from './Authentication.styles';


const Auth = () => {


  return (
    <AuthenticationContainer>
      <Signin/>
      <Signup/>
    </AuthenticationContainer>
  )
}

export default Auth