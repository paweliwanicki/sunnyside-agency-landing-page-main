import React from "react";
import styled from "styled-components";
import cssVariables from "../../utils/cssVariables";

const TextBoxBgImageDiv = styled.div`
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : "")};
  grid-row: ${(props) => (props.gridRow ? props.gridRow : "")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 24.875em;
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.color ? props.color : cssVariables.COLOR_DARK)};
  padding-bottom: 2em;
`;

const Header = styled.h2`
  font-family: ${cssVariables.FONT_FAMILY_FRAUNCES};
  font-weight: ${cssVariables.FONT_WEIGHT_900};
  max-width: 21.25em;
  margin-top: 0;
  font-size: 1.75em;
  margin-bottom: 1em;
  line-height: 2.1575em;
`;

const Paragraph = styled.p`
  margin: 0;
  line-height: 1.6875em;
  max-width: 21.25em;
  font-weight: ${cssVariables.FONT_WEIGHT_600};
`;

const TextBoxBgImage = (props) => {
  return (
    <TextBoxBgImageDiv
      backgroundImg={props.backgroundImg}
      gridColumn={props.gridColumn}
      gridRow={props.gridRow}
      color={props.color}
    >
      <Header>{props.headerText}</Header>
      <Paragraph>{props.text}</Paragraph>
    </TextBoxBgImageDiv>
  );
};

export default TextBoxBgImage;
