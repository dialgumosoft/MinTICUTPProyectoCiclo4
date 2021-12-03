import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import { HOST } from '../../settings/settings.json';

const cookies = new Cookies();

const EditProduct = () => {
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams(); //The useParams() hook helps us to access the URL parameters from a current route.

  const [user, setUser] = useState({
    name: "",
    category: "",
    price: "",
    imgURL: ""
    //salary: "",
  })

  const { name, category, price, imgURL } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  useEffect(() => {
    loadProduct();
  }, []);

  const token = cookies.get("_s");
  const config = {
    headers: { token: token }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    //(`http://localhost:5000/api/v1/employee/${id}`, user);
    await axios.put(`${HOST}/api/products/${id}`, user, config);
    history.push("/productsDetails");
  };

  const loadProduct = () => {
    fetch(`${HOST}/api/products/${id}`, config, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(function (myJson) {
        setUser(myJson);
        console.log(myJson);
      });
      /*.then((result) => {
        console.log(result);
        setUser({
          id: id,
          update: true,
          name: result.response[0].name,
          category: result.response[0].category,
          price: result.response[0].price,
          imgURL: result.response[0].imgURL,
          //salary: result.response[0].salary,
        });
      })*/
      //.catch((error) => console.log("error", error));
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
          <h4 className="text-center mb-4">Editar Producto</h4>

          <h5 className="text-success">Producto ID : {user._id} </h5>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Digite la Categoria"
              name="category"
              value={category}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Digite el precio"
              name="price"
              value={price}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Digite la ruta img"
              name="imgURL"
              value={imgURL}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          
          <button
            onClick={updateProduct}
            className="btn btn-secondary btn-block"
          >
            Actualizar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
