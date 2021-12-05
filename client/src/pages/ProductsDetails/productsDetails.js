//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { HOST } from "../../settings/settings";
import Cookies from "universal-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
//import NavBar2 from "../../../src/components/nav/Navbar2";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";



const cookies = new Cookies(); //Se crea la cookies para poder tener el token y enviarselo a las peticiones

//Funcion Detalles del productos donde tendra Insertar, editar, eliminar productos
function ProductsDetails() {
  const [search, setSearch] = useState(''); // Search para tomar los caracteres para buscar un producto
  const [list, setList] = useState([]); // Estado para capturar los datos en un array

  //Estrucutra de los datos que vendran del formulario 
  const [user, setUser] = useState({  
    name: "",
    category: "",
    price: "",
    imgURL: ""
    
  });

  //  Object Destructuring
  const { name, category, price, imgURL } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  //Mandamos el token al headers para poder enviarlo a las peticiones
  const token = cookies.get('_s');
  const config = {
      headers: { token: token }
  }
  // Listar todos los productos
  const listProducts = async () => {
      
    //var response = fetch("http://localhost:5000/api/v1/employee")
    var response = fetch(
      `${HOST}/api/products/`, config
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setList(myJson);
      });
  };
  useEffect(() => {
    listProducts();
    
  }, []);

 // Agregar Producto
  const addProduct = async (e) => {
    e.preventDefault();
    e.target.reset();
    //await axios.post("http://localhost:5000/api/v1/employee", user);
    console.log(user);
    console.log(config)
    await axios.post(`${HOST}/api/products/`, user, config);
    
    alert("Producto Agregado con exito");

    listProducts();
  };

  // Buscar Producto
  const searchRecords = () => {
    alert(search);
    axios
      .get(`${HOST}/api/products/searchRecord/${search}`, config)
      .then((response) => {
        setList(response.data);
      });
  }; 

  // Eliminar Producto
  const deleteProduct = (productId) => {
    console.log(productId)
    axios
      .delete(`${HOST}/api/products/${productId}`, config)
      .then((result) => {
        alert("Producto Eliminado con exito");
        listProducts();
      })
      .catch(() => {
        alert("Error En el codigo");
      });
  };

  return (
    <>
    <Nav />
      {/*<NavBar2 />*/}

      
        {/*<nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active ">sssssssss</li>
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Detail
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Address
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav > */}

        <div className="container">
          <div className="row mt-3">
            <div className="col-sm-4">
              <div
                className="box p-3 mb-3 mt-5"
                style={{ border: "1px solid #d0d0d0" }}
              >
                <form onSubmit={addProduct}>
                  <h5 className="mb-3 ">Agregar Producto</h5>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control  mb-4"
                      name="name"
                      value={name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Ingrese Nombre"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control  mb-4"
                      name="category"
                      value={category}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Ingrese Categoria"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control mb-4"
                      name="price"
                      value={price}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Ingrese Precio"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-4"
                      name="imgURL"
                      value={imgURL}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Ingrese imgUrl"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  >
                    Agregar Producto
                  </button>
                </form>
              </div>
            </div>
            <div className="col-sm-8">
              <h4 className="text-center  ml-4 mt-4  mb-5">
                Lista De Productos
              </h4>
              <div className="input-group mb-4 mt-3">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form1"
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-control"
                    placeholder="Buscar Producto"
                    style={{ backgroundColor: "#ececec" }}
                  />
                </div>
                <button
                  type="button"
                  onClick={searchRecords}
                  className="btn btn-success"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <table className="table table-hover  table-striped table-bordered ml-4 ">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((name) => (
                    <tr key={name._id}>
                      {/*<td>{name.id}</td>*/}
                      <td>{name.name}</td>
                      <td>{name.category}</td>
                      <td>{name.price}</td>

                      <td>
                        <a
                          className="text-danger mr-2"
                          onClick={() => {
                            const confirmBox = window.confirm(
                              "Deseas Eliminar el producto " + name.name + "?"
                            );
                            if (confirmBox === true) {
                              deleteProduct(name._id);
                            }
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-trash"
                            style={{ fontSize: "25px", marginRight: "1px" }}
                          ></i>{" "}
                        </a>

                        <Link
                          className=" mr-2"
                          to={`/editProduct/editID/${name._id}`}
                        >
                          <i
                            className="fa fa-edit"
                            aria-hidden="true"
                            style={{ fontSize: "25px" }}
                          ></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default ProductsDetails;
