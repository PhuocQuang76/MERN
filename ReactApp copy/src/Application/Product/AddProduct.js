import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AddProductToDB,getProducts } from '../../store/Product/productAction';



const AddProduct = () => {
    debugger;
    let product = useSelector((store) => store.product); // reads defined data in reducer
  
  const dispatchToDB = useDispatch();

  const [name, setName] = useState(product.product.name);
//   const [stuAge, setStudentAge] = useState(student.student.studentAge);
//   const [stuAddress, setStudentAddress] = useState(student.student.studentAddress);

  useEffect(() => {
    // Set default values for the form
    setName(product.product.name);

  }, [product]);

//   const saveStudentData = (evt) => {
//     evt.preventDefault();

//     const newStudent = {
//       studentName: stuName,
//       studentAge: stuAge,
//       studentAddress: stuAddress,
//     };

    //dispatchToDB(AddProductToDB(newStudent));
  

    return(
        <>
            <h1>Create New Product</h1>

            <form >
                <p>
                    <label htmlFor="title">Product Name</label>
                    <input id="name" type="text" name="name" required />
                </p>
                <p>
                    <label htmlFor="image">Image</label>
                    <input id="image" type="url" name="image" required />
                </p>
                <p>
                    <label htmlFor="date">Price</label>
                    <input id="price" type="number" name="price" required />
                </p>
                <p>
                    <label htmlFor="desc">Product Code</label>
                    <input id="productCode" name="productCode" required />
                </p>
                <p>
                    <label htmlFor="desc">Description</label>
                    <textarea id="desc" name="desc" rows="5" required />
                </p>



                <div >
                    <button type="button" >
                    Cancel
                    </button>
                    <button>Save</button>
                </div>
            </form>
        </>
    )
}
export default AddProduct;