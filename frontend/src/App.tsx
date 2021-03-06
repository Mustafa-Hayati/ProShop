import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen/OrderScreen";
import UserListScreen from "./screens/UserListScreen/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen/OrderListScreen";

/* TODO: change all unassigned dispatch types */

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route
              path="/admin/userlist"
              component={UserListScreen}
            />
            <Route
              path="/admin/productlist"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/orderlist"
              component={OrderListScreen}
            />
            <Route
              path="/admin/user/:id/edit"
              component={UserEditScreen}
            />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            {/* NOTE
             * /cart/:id? means that id is optional
             */}
            <Route path="/cart/:id?" component={CartScreen} />
            <Route
              path="/search/:keyword"
              component={HomeScreen}
              exact
            />
            <Route
              exact
              path="/page/:pageNumber"
              component={HomeScreen}
            />
            <Route
              exact
              path="/search/:keyword/page/:pageNumber"
              component={HomeScreen}
            />
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
