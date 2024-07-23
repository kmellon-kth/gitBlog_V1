import { BrowserRouter } from 'react-router-dom';
import CommonLayoutContainer from './container/CommonLayoutContainer';
import './reset.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <CommonLayoutContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
