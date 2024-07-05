import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Shop from "../pages/shop/Shop";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Checkout from "../pages/checkout/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/product-details",
                element: <ProductDetails />
            },
            {
                path: "/checkout",
                element: <Checkout/>    
            },
        ]
    },
]);


export default router