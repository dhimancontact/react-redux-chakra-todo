import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 300px;
  height: auto;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h1`
  font-size: 2em;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  color: green;
  font-size: 1.5em;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 1.2em;
  margin: 20px 0;
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.5em;
`;

const Error = styled.div`
  text-align: center;
  color: red;
  font-size: 1.5em;
`;

const API_URL = 'https://fakestoreapi.com/products';

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>Error: {error.message}</Error>;
  }

  return (
    <Container>
      <Link to="/">Back to Products</Link>
      {product && (
        <ProductDetail>
          <ProductImage src={product.image} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>${product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductDetail>
      )}
    </Container>
  );
};

export default ProductView;
