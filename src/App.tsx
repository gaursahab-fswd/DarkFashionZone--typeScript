
import React, {FC} from 'react';
import HomeSection from './Fullpage/Components/Home';
import AboutPage from './Fullpage/Components/pages/About';
import SignUp from './Fullpage/Components/pages/Signup';
import LogIn from './Fullpage/Components/pages/Login';

const App: FC = () => {
  return(
    <div>
      <HomeSection/>
      <SignUp />
      <LogIn/>
    </div>
  );
}

export default App;
  