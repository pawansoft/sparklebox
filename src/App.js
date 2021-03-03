import Footertop from "./component/pages/footers/footerTop/footerTop.jsx";
import GotAQuestion from "./component/pages/footers/footerMiddle/GotAQuestion.jsx"
import FooterAbout from "./component/pages/footers/footerMiddle/FooterAbout.jsx"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <FooterAbout/>
        <GotAQuestion/>
        <Route path="/" component={Footertop} />
      </Router>
    </div>
  );
}

export default App;
