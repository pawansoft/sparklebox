import "./global.scss"
import FooterBottom from './component/pages/footers/footerBottom/FooterBottom'
import UsefulLinks from "./component/pages/footers/footerMiddle/UsefulLinks";
import Signup from "./component/pages/footers/footerMiddle/Signup";


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <UsefulLinks/>
      <FooterBottom/>
      <Signup />
    </div>
  );
}

export default App;
