import { useState,useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Create=() => {
    const {products,setProducts}=useContext(ProductContext);

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [id,setId]=useState("");
    const [form,setForm]=useState({
        id: "",
        name: "",
        price: ""
    });

    function handle_submit(e) {
        e.preventDefault();
        if(form.name==""||form.price=="") {
            alert("Please fill all the fields");
        }else{
            let id=Date.now();
            setForm({...form,id:id});
            setProducts([...products,form]);
        }
    }

    function updateFormState(e) {
        setForm({...form,[e.target.name]:e.target.value});
    }

    return (
        <div className="row">
                <div className="col-md-8 offset-md-2 pb-2">
                    <form onSubmit={handle_submit}>
                        <input type="text" name="name" value={form.name} className="form-control mb-2" placeholder="Product name" onChange={updateFormState}/>
                        <input type="number" name="price" value={form.price} className="form-control mb-2" placeholder="Product price" onChange={updateFormState}/>
                        <button className="btn btn-primary btn-sm">Add Product</button>
                    </form>
                </div>
            </div>
    );
}

export default Create;