import React, { useState, useEffect } from "react";
import { useTheme } from "../context/theme.jsx";


const Home = () => {
  // States Declared
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showProducts, setShowProducts] = useState([]);

  // imported Context theme value
  const theme = useTheme();

  // function to fetch data from API
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setCategories([...new Set(data.products.map((item) => item.category))]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // filtering items to show dark theme's selected list 
  const viewCategory = (cat) => {
    const filteredProducts = products.filter((item) => item.category === cat);
    setShowProducts(filteredProducts);
  };

  // adding dynamic title of page
  useEffect(() => {
  switch (theme.theme) {
    case "theme1":
      document.title = "Minimalist-Theme";
      break;
    case "theme2":
      document.title = "Dark-Theme";
      break;
    case "theme3":
      document.title = "Playful-Theme";
      break;
    default:
      document.title = "ThemeSwitcher App";
  }
}, [theme.theme]);

  return (
    <div>
   
      {theme.theme === "theme1" && (
        <div className="container pt-5 mt-3">
          <h1 className="mb-4 text-center">Welcome to the Theme Switcher App</h1>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 mb-4">
              {products.map((item, index) => (
                <div className="card mt-4 backgroundImg shadow-card animate-fade-in pointer" key={index} >
                  <div className="card-body d-md-flex">
                    <img
                      src={item.images[0] || "noImage.png"}
                      alt={item.title || "Product Image"}
                      width="30%"
                      className="border rounded shadow-sm bg-light responsive-img hover-scale"
                    />
                    <div className="w-100 ps-3 h5">
                      <p className="card-text">
                        <strong>Product</strong> : <span>{item.title}</span>
                      </p>
                      <p className="card-text">
                        <strong>Availability</strong> : <span>{item.availabilityStatus || "In Stock"}</span>
                      </p>
                      <p className="card-text">
                        <strong>Category</strong> : <span>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                      </p>
                      <p className="card-text">
                        <strong>Description</strong> : <span>{item.description}</span>
                      </p>
                      <p className="card-text">
                        <strong>Price</strong> : <span>${item.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

     
      {theme.theme === "theme2" && (
        <div className="container pt-5 mt-4">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-4 col-lg-4 mb-4 animate-fade-in">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <ul>
                    {categories.map((item, index) => (
                      <li
                        key={index}
                        className="border p-3 rounded mt-2 category-item"
                        onClick={() => viewCategory(item)}
                      >
                        {item.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-md-8 col-lg-8 mb-4">
              <div className="w-100">
                {showProducts.length > 0 ? (
                  showProducts.map((item, index) => (
                    <div className="card mt-4 bg-dark backgroundImg2 shadow-card animate-fade-in  pointer" key={index}>
                      <div className="card-body d-lg-flex">
                        <img
                          src={item.images[0] || "noImage.png"}
                          alt={item.title || "Product Image"}
                          width="20%"
                          className="border rounded shadow-sm bg-light responsive-img2 hover-scale"
                        />
                        <div className="w-100 ps-3 h5 text-light">
                          <p className="card-text">
                            <strong>Product</strong> : <span>{item.title}</span>
                          </p>
                          <p className="card-text">
                            <strong>Availability</strong> : <span>{item.availabilityStatus || "In Stock"}</span>
                          </p>
                          <p className="card-text">
                            <strong>Description</strong> : <span>{item.description}</span>
                          </p>
                          <p className="card-text">
                            <strong>Price</strong> : <span>${item.price}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="card mt-4 bg-dark animate-fade-in">
                    <div className="card-body text-light h4 text-center pt-5">
                      <p>Please Select Category</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

     
      {theme.theme === "theme3" && (
        <div className="container pt-5 mt-4">
          <h1 className="mb-4 text-center">Welcome to the Theme Switcher App</h1>
          <div className="row justify-content-center">
            {products.map((item, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4 pointer " key={index}>
                <div className="card h-100 shadow-card animate-fade-in hover-scale">
                  <div className="card-body d-flex flex-column">
                    <img src={item.images[0]} width="100%" className="backgroundImg hover-scale" />
                    <p className="h5 text-center">
                      <strong>{item.title}</strong>
                    </p>
                    <p>
                      <strong>Description :</strong> {item.description}
                    </p>
                    <p>
                      <strong>Price :</strong> ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
