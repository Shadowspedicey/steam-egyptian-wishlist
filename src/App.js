import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import "./App.css";
import "flag-icon-css/css/flag-icon.min.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/wishlist" component={Wishlist}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
