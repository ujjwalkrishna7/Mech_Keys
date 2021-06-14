import React from "react";
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "./Loader";
// import Message from "./Message";
// import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  // const dispatch = useDispatch();

  // const productTopRated = useSelector((state) => state.productTopRated);
  // const { loading, error, products } = productTopRated;

  // useEffect(() => {
  //   dispatch(listTopProducts());
  // }, [dispatch]);

  // return loading ? (
  //   <Loader />
  // ) : error ? (
  //   <Message variant="danger">{error}</Message>
  // ) : (
  //   <Carousel pause="hover" className="bg-dark">
  //     {products.map((product) => (
  //       <Carousel.Item key={product._id}>
  //         <Link to={`/product/${product._id}`}>
  //           <Image src={product.image} alt={product.name} fluid />
  //           <Carousel.Caption className="carousel-caption">
  //             <h2>
  //               {product.name} (${product.price})
  //             </h2>
  //           </Carousel.Caption>
  //         </Link>
  //       </Carousel.Item>
  //     ))}
  //   </Carousel>
  // );

  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <Image
          src="https://images.unsplash.com/photo-1616933067642-ac31e646d4f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="image"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h4>OUR PRODUCT</h4>
          <h1> Mechanical Keyboard</h1>
          <h3>Made to provide the ultimate typing experience</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://images.unsplash.com/photo-1616776571584-d50c488056d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"
          alt="image"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h4>NOW AVAILABLE</h4>
          <h1>KEYCHRON K2</h1>
          <h3>Switch to wireless for a completely new experience</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://assets3.razerzone.com/vuxzlpnHXJ4TyWQXs9kexBDBxNo=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha6%2Fheb%2F9081233932318%2Frazer-pbt-keycap-upgrade-set-black-gallery-hero-1500x1000.jpg"
          alt="image"
          fluid
        />
        <Carousel.Caption className="carousel-caption-2">
          <h1>RAZER HUNTSMAN</h1>
          <h3>Now in Stock</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://tompkinswake.co.nz/assets/Uploads/Cryptocurrency-is-Property-Website-Banner.png"
          alt="image"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h1>CRYPTO PAYMENTS AVAILABLE</h1>
          <h3>Now pay with your preffered cryptocurrenncy</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
