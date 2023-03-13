import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.comoponent";
import SignIn from "./routes/sign-in/sign-in.component"

const Shop = () => {
  return <h1>The main Shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path ='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;