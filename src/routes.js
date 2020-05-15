import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Login from './views/login';
import signUp from './views/signUp'
import AddNewPost from "./views/addNewPost";
import BlogOverview from "./views/blogOverview";
import UserProfileLite from "./views/userProfileLite";
import Errors from "./views/errors";
import ComponentsOverview from "./views/componentsOverview";
import Tables from "./views/tables";
import BlogPosts from "./views/blogPosts";
import AddSlot from "./views/addSlot"

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
