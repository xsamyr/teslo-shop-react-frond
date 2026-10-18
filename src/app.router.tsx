import { createHashRouter, Navigate } from "react-router";
import { ShopLayouts } from "./shop/layouts/ShopLayouts";
import { HomePages } from "./shop/pages/home/HomePages";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPages } from "./shop/pages/gender/GenderPages";

import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
// import { AdminLayout } from "./admin/layouts/AdminLayout";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { lazy } from "react";
import { AdminRoute, NotAuthenticatedRoute } from "./components/route/ProtectedRoute";


const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));



// export const appRouter = createBrowserRouter([
export const appRouter = createHashRouter([

    //main routes
    {

        path: '/',
        element: <ShopLayouts />,
        children: [
            {
                index: true,
                element: <HomePages />
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage />

            },
            {
                path: 'gender/:gender',
                element: <GenderPages />
            },
        ],
    },

    //auth Routes
    {
        path: '/auth',
        element: <NotAuthenticatedRoute>
            <AuthLayout />
        </NotAuthenticatedRoute>,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
        ]
    },
    //admin routes
    {
        path: '/admin',
        element: <AdminRoute>
            <AdminLayout />
        </AdminRoute>,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'products',
                element: <AdminProductsPage />
            },
            {
                path: 'products/:id',
                element: <AdminProductPage />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    }
])