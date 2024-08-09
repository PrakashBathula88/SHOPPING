import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import { ProductProvider } from "./Components/AddCart/CartProviders.js";

// Lazy load components
const Cart = lazy(() => import("./Components/Cart/CartItems.js"));
const About = lazy(() => import("./Components/About/About"));
const Albums = lazy(() => import("./Components/Albums/Albums.js"));
const Contact = lazy(() => import("./Components/Contact/Contact.js"));
const Signin = lazy(() => import("./Components/Signin/Signin.jsx"));
const Profile = lazy(() => import("./Components/Profile/Profile.jsx"));
const Private = lazy(() => import("./Components/Private/Private.jsx"));
const SinglePage = lazy(() => import("./Components/SinglePage/SinglePage.jsx"));
const Dummy = lazy(() => import("./Components/DummyItems/Dummy.js"));

function App() {
  return (
    <>
      <ProductProvider>
        <Router>
          <Nav />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Private />}>
                <Route path="/" element={<Dummy />} exact></Route>
              </Route>
              <Route path="singlepage/:id" element={<SinglePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/album" element={<Albums />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;
