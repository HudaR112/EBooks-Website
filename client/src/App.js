import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home  from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddEdit from "./pages/AddEdit";
import login from "./pages/login";
import Front from "./pages/Front";
import viewerMenu from "./pages/ViewerMenu"


function App() {
  return (
    <div className='App'> 
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Front}/>
        <Route path="/login" exact component={login}/>
        <Route path="/Home"  exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/addbook"   exact component={AddEdit} />
        <Route path="/update/:book_id"  exact component={AddEdit} />
        <Route path="/viewerMenu" exact component={viewerMenu}/>
      </Switch>
      <Footer />
      </Router>
      </div>    
  );
}

export default App;
