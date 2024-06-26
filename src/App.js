import React from "react";
import styled from 'styled-components';

// Styled components for styling
const Container = styled.div`
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  color: green;
  font-size: 1.1em;
  margin: 10px 0;
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



// const productComp = () => {
//   console.log('test');

// // return <div>
// //   {props.map(product => (
// //         <li key={product.id}>
// //           {product.title}<br/>
// //           {product.description}<br/>
// //           {product.category}<br/>
// //           {product.image}<br/>
// //           {product.price}<br/>
// //           {product.rating.rate} - {product.rating.count}<br/>
// //         </li>
// //       ))}
// // </div>;
// }


function App() {

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>Error: {error.message}</Error>;
  }

  return (
    <Container>
      <Box products = {products}/>
    </Container>
  );
};


function Box({products}){
  return (
      <ProductGrid>
        {products.map(product => {
          return <Product product={product}/>
        })}
      </ProductGrid>
  );
}

function Product({product}) {
  return <>
    <ProductCard key={product.id}>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
    </ProductCard>
  </>;
}
export default App;
