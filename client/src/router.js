import Vue from "vue";
import Router from "vue-router";

//admin console
import DashboardLayout from "@/components/Admin/Layout/DashboardLayout.vue"
import Collections from "@/components/Admin/View/Collections.vue"
import ManageCollection from "@/components/Admin/View/ManageCollection.vue"

//signup pages
import LoginLayout from "@/components/Signin/LoginLayout.vue"
import Login from "@/components/Signin/Login.vue"
import Register from "@/components/Signin/Register.vue"
import PasswordReset from "@/components/Signin/PasswordReset.vue"

import Home from "@/components/Home.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: '/dash',
    name: 'dashboard',
    component: DashboardLayout,
    redirect: 'dash/collections',
    children: [
      {
        path: 'collections',
        name: 'collections',
        component: Collections
      },
      {
        path: 'managecollection',
        name: 'managecollection',
        component: ManageCollection
      }
    ]
  },
  {
    path: '/signin',
    name: 'signin',
    component: LoginLayout,
    redirect: '/signin/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      },
      {
        path: 'passwordreset',
        name: 'passwordreset',
        component: PasswordReset
      }
    ]
  }
]

export default routes;
