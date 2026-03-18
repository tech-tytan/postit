
import { useContext, useState } from "react";
import Create from "./inventory_components/Create";
import Products from "./inventory_components/Products";
import { AppNameContext } from "./context/AppNameContext";
import { ProductContext } from "./context/ProductContext";

const Inventory=() => {
    const {appName}=useContext(AppNameContext);
    const {products}=useContext(ProductContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>{appName}</h1>
                    <h4>Total Products: {products.length}</h4>
                </div>
                <Create/>
                <Products/>
            </div>
        </div>
    );
}

export default Inventory;