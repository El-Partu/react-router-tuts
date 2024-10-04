import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Login from "../Login";
import { LoginAction, SignUpAction } from "../utils/actionLoader";
import NotFoundPage from "../NotFoundPage";
import Dashboard from "../Dashboard";
import HomePage from "../HomePage";
import SignUp from "../SignUp";
import PointOfSale from "../PointOfSale";
import Products from "../Products";
import Categories from "../Categories";
import Inventory from "../Inventory";
import SalesHistory from "./../SalesHistory";
import Records from "../Records";
import Users from "./../Users";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} action={LoginAction} />
      <Route path="sign-up" element={<SignUp />} action={SignUpAction} />

      <Route element={<RootLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sales" element={<PointOfSale />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sales-history" element={<SalesHistory />} />
        <Route path="/records" element={<Records />} />
        <Route path="/users" element={<Users />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);
