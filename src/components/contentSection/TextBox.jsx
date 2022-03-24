import React from "react";
import styled from "styled-components";
import CssVariables from "../../utils/CssVariables";
import { mediaQueries } from "../../utils/Mixins";
import propTypes from "prop-types";
import Link from "./Link";

const TextBoxDiv = styled.div`
  grid-column: ${(props) =>
    props.desktopGridColumn ? props.desktopGridColumn : ""};
  grid-row: ${(props) => (props.desktopGridRow ? props.desktopGridRow : "")};
  display: flex;
  align-items: ${(props) =>
    props.desktopGridColumn === "1/3" ? "flex-end" : "flex-start"};
  justify-content: center;
  text-align: inherit;
  flex-flow: column;
  padding-right: ${(props) =>
    props.desktopGridColumn === "1/3" ? "6.875em" : ""};
  padding-left: ${(props) =>
    props.desktopGridColumn === "3/5" ? "6.875em" : ""};
  font-family: ${CssVariables.FontFamilyBarlow};
  font-weight: ${CssVariables.FontWeight600};
  color: ${CssVariables.ColorGray};
  line-height: 30px;
  font-size: 1.125em;

  ${mediaQueries.tabletS`
    grid-column: ${(props) =>
      props.mobileGridColumn ? props.mobileGridColumn : ""};
    grid-row: ${(props) => (props.mobileGridRow ? props.mobileGridRow : "")};
    padding-top: 64px;
    padding-bottom: 64px;
    text-align: left;
  `};

  ${mediaQueries.laptopL`
    padding-right:24px;
    padding-left:24px;
    align-items:center;
  `}
`;

const Header = styled.h2`
  font-weight: ${CssVariables.FontWeight900};
  font-size: 40px;
  line-height: 49px;
  font-family: ${CssVariables.FontFamilyFraunces};
  color: ${CssVariables.ColorDark};
  margin-top: 0;
  margin-bottom: 32px;
  width: 100%;

  ${mediaQueries.laptopL`
    font-size: 25px;
    line-height:30px;
  `};
`;

const Paragraph = styled.p`
  margin-bottom: 40px;
  margin-top: 0;
  width: 100%;
  letter-spacing: -0.13px;
`;

const ContentDiv = styled.div`
  width: fit-content;
  height: fit-content;
  max-width: 445px;

  ${mediaQueries.laptopS`
  font-size:0.7em;
  `}

  ${mediaQueries.tabletS`
    font-size:initial;
  `}
`;

const TextBox = (props) => {
  return (
    <TextBoxDiv
      desktopGridColumn={props.desktopGridColumn}
      desktopGridRow={props.desktopGridRow}
      mobileGridRow={props.mobileGridRow}
      mobileGridColumn={props.mobileGridColumn}
    >
      <ContentDiv>
        <Header>{props.headerText}</Header>
        <Paragraph>{props.text}</Paragraph>
        <Link
          href={"#test"}
          text={`LEARN MORE`}
          borderColor={props.linkBorderColor}
        />
        {props.children}
      </ContentDiv>
    </TextBoxDiv>
  );
};

TextBox.propTypes = {
  desktopGridColumn: propTypes.string,
  desktopGridRow: propTypes.string,
  mobileGridRow: propTypes.string,
  mobileGridColumn: propTypes.string,
  headerText: propTypes.string,
  text: propTypes.string,
  children: propTypes.node,
};

export default TextBox;
