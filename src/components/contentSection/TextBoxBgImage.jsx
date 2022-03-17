import React from "react";
import styled from "styled-components";
import CssVariables from "../../utils/CssVariables";
import { mediaQueries } from "../../utils/Mixins";

const TextBoxBgImageDiv = styled.div`
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 24.875em;
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.color ? props.color : CssVariables.ColorDark)};
  padding-bottom: 2em;
  grid-column: ${(props) =>
    props.desktopGridColumn ? props.desktopGridColumn : ""};
  grid-row: ${(props) => (props.desktopGridRow ? props.desktopGridRow : "")};

  ${mediaQueries.tabletS`
    grid-column: ${(props) =>
      props.mobileGridColumn ? props.mobileGridColumn : ""};
    grid-row: ${(props) => (props.mobileGridRow ? props.mobileGridRow : "")};
    padding-left: 1.25em;
    padding-right: 1.25em;
  `}
`;

const Header = styled.h2`
  font-family: ${CssVariables.FontFamilyFraunces};
  font-weight: ${CssVariables.FontWeight900};
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
  font-weight: ${CssVariables.FontWeight600};
`;

const TextBoxBgImage = (props) => {
  return (
    <TextBoxBgImageDiv
      backgroundImg={props.backgroundImg}
      desktopGridColumn={props.desktopGridColumn}
      desktopGridRow={props.desktopGridRow}
      mobileGridRow={props.mobileGridRow}
      mobileGridColumn={props.mobileGridColumn}
      color={props.color}
    >
      <Header>{props.headerText}</Header>
      <Paragraph>{props.text}</Paragraph>
    </TextBoxBgImageDiv>
  );
};

export default TextBoxBgImage;
