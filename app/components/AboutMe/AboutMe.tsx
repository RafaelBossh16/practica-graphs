/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const AboutMe = () => {
  const sectionStyle = css`
    background-color: #333;
    color: white;
    padding: 1rem;
  `;

  const h2Style = css`
    font-size: 2rem;
  `;

  const pStyle = css`
    font-size: 1.2rem;
  `;

  return (
    <div css={sectionStyle}>
      <h2 css={h2Style}>Sobre mi</h2>
      <p css={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet
        atque debitis ducimus tempore laborum nobis iusto dolore necessitatibus
        aliquam, minus similique dolorum soluta, nemo veritatis accusamus
        consequatur quaerat id.
      </p>
    </div>
  );
};