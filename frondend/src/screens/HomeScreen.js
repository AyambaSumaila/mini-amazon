
import React, { useEffect, useReducer } from "react";
import axios from "axios";

import logger from 'use-reducer-logger';
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };

    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };

    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;

  }
}


function HomeScreen() {

  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });


  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });

      }
      catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }

      // setProducts(result.data);
    };

    fetchData();

  }, []);


  return (
    <div>
      <h1 className="text-center pt-1 ml-2">Featured products</h1>
      <div className="products">
        {
          loading ? <div>Loading...</div>
            :
            error ? (
              <div>{error}</div>
            ) :
              (
                <Row>
                  {products.map((product) => (
                    <Col sm={6} md={4} lg={3} className="mb-3">
                      <Product product={product}></Product>
                    </Col>

                  ))}
                </Row>

              )}
      </div>
    </div>

  );

}

export default HomeScreen;