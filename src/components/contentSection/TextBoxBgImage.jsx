import React from "react";
import styled from "styled-components";
import CssVariables from "../../utils/CssVariables";
import { mediaQueries } from "../../utils/Mixins";
import propTypes from "prop-types";

const TextBoxBgImageDiv = styled.div`
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 398px;
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.color ? props.color : CssVariables.ColorDark)};
  padding-bottom: 60px;
  grid-column: ${(props) =>
    props.desktopGridColumn ? props.desktopGridColumn : ""};
  grid-row: ${(props) => (props.desktopGridRow ? props.desktopGridRow : "")};

  ${mediaQueries.tabletS`
    grid-column: ${(props) =>
      props.mobileGridColumn ? props.mobileGridColumn : ""};
    grid-row: ${(props) => (props.mobileGridRow ? props.mobileGridRow : "")};
    padding-left: 24px;
    padding-right: 24px;
  `}
`;

const Header = styled.h2`
  font-family: ${CssVariables.FontFamilyFraunces};
  font-weight: ${CssVariables.FontWeight900};
  /* max-width: 21.25em; */
  margin-top: 0;
  font-size: 1.75em;
  margin-bottom: 1em;
  line-height: 34px;
  letter-spacing: -0.2px;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: -0.11px;
  /* max-width: 21.25em; */
  font-weight: ${CssVariables.FontWeight600};
`;

const ContentBox = styled.div`
  max-width: 339px;
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
      <ContentBox>
        <Header>{props.headerText}</Header>
        <Paragraph>{props.text}</Paragraph>
      </ContentBox>
    </TextBoxBgImageDiv>
  );
};

TextBoxBgImage.propTypes = {
  backgroundImg: propTypes.string,
  desktopGridColumn: propTypes.string,
  desktopGridRow: propTypes.string,
  mobileGridRow: propTypes.string,
  mobileGridColumn: propTypes.string,
  color: propTypes.string,
  headerText: propTypes.string,
  text: propTypes.string,
};

export default TextBoxBgImage;
