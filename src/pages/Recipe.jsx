import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let param = useParams();
  const [detail, setDetail] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState("instruction");
  const fetchRecipe = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const result = await data.json();
    setDetail(result);
    console.log(detail.extendedIngredients);
  };

  React.useEffect(() => {
    fetchRecipe(param.name);
  }, [param.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instruction" ? "active" : ""}
          onClick={(e) => setActiveTab("instruction")}
        >
          Instruction
        </Button>
        <Button
          className={activeTab === "ingredient" ? "active" : ""}
          onClick={(e) => setActiveTab("ingredient")}
        >
          Ingredient
        </Button>
        {activeTab === "instruction" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: detail.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: detail.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredient" && (
          <ul>
            {detail.extendedIngredients.map((ingredient) => {
              <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
