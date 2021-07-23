import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const CardContainer = css`
  background: linear-gradient(140deg, #f0f0f0, #fff 70%);
  box-shadow: -5px -5px 5px #fff, -5px -5px 20px #fff, 5px 5px 20px #dfdfdf;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  max-width: 500px;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.2);
  }
`;

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div css={CardContainer}>
      <h2>
        #{pokemon.id} - {pokemon.name}
      </h2>
      <img src={pokemon.sprites.front_default} alt="pokemon front image" />
    </div>
  );
};

export default PokemonCard;