
import React, {FC} from 'react';
import HomeSection from './Fullpage/Components/Home';
import AboutPage from './Fullpage/Components/pages/About';
import SignUp from './Fullpage/Components/pages/Signup';

const App: FC = () => {
  return(
    <div>
      <HomeSection/>
      <SignUp />
    </div>
  );
}

export default App;
  