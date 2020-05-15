import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Login from './views/Login';
import signUp from './views/SignUp';
import BlogOverview from "./views/BlogOverview";
import BlogPosts from "./views/BlogPosts";
import AddSlot from "./views/AddSlot"
import AddNewPost from "./views/AddNewPost";
import UserProfileLite from "./views/UserProfileLite";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";

export default [
  {
    path: "/dashboard",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/signUp",
    layout: DefaultLayout,
    component: signUp
  },
  {
    path: "/",
    exact:true,
    layout: Login
  },
  {
    path: "/login",
    layout:  () => <Redirect to="/login" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/slots",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/add-slot",
    layout: DefaultLayout,
    component: AddSlot
  }
];
