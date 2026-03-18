import { createContext,useState } from "react";

export const ProductContext=createContext();

export const ProductProvider=({children}) => {
    const defaultProducts=[
            {
                id: 197656,
                name: "product1",
                price: 1200
            },
            {
                id: 197657,
                name: "product2",
                price: 1300
            }
        ];
        const [products,setProducts]=useState(defaultProducts);

        function delete_product(idToDelete) {
        const filteredProducts=products.filter((prod) => prod.id!=idToDelete);
        setProducts(filteredProducts);
    }
    return (<ProductContext.Provider value={{products,setProducts,delete_product}}>
        {children}
    </ProductContext.Provider>)
}