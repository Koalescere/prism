import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import { Container, Col } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer";
import ReactMapGl from "./components/ReactMapGl";
import Slider2 from "./components/Slider2";
// import Timeline from "./components/Timeline";

// import Newmap from "./components/Newmap";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <container className="sidemap">
            <Slider2 />
            <ReactMapGl />
          </container>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

{
  /* <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Timeline />
          <container className="sidemap">
            <ReactMapGl />
          </container>
          <Footer />
        </div>
      </Provider> */
}
{
  /* <row className="listmap">
<Col xs={2}>
  <Sidebar />
</Col>
<Col md={8}>
  <ReactMapGl />
</Col>
</row> */
}
