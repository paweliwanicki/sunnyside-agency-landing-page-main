import React from "react";
import styled from "styled-components";
import TestimonialBox from "./TestimonialBox";
import userEmilyImg from "../../images/image-emily.jpg";
import userJennyImg from "../../images/image-jennie.jpg";
import userThomasImg from "../../images/image-thomas.jpg";
import User from "../../classes/User";
import CssVariables from "../../utils/CssVariables";
import { mediaQueries } from "../../utils/Mixins";

const StyledSection = styled.section`
  grid-column: 1/5;
  grid-row: 5/6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 165px;
  flex-flow: column;

  ${mediaQueries.laptopL`
    padding-left:48px;
    padding-right:48px;
  `}

  ${mediaQueries.laptopM`
    padding-left:24px;
    padding-right:24px;
    font-size:.9em;
  `}
  ${mediaQueries.laptopS`
    font-size:initial;
  `}

  ${mediaQueries.tabletS`
    padding-top:64px;
    padding-bottom:86px;
    grid-row: 9/10;
  `}
`;

const SectionHeader = styled.h4`
  font-weight: ${CssVariables.FontWeight900};
  font-family: ${CssVariables.FontFamilyFraunces};
  color: ${CssVariables.colorGrayLight};
  font-size: 1.5em;
  margin-bottom: 80px;
  letter-spacing: 5px;
  align-self: center;
  text-align: center;

  ${mediaQueries.laptopS`
    margin-bottom:64px;
  `};

  ${mediaQueries.mobileL`
   font-size:16px;
  `}
`;

const TestimonialsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${mediaQueries.laptopS`
    flex-flow: column;
    justify-content: space-between;
  `}
`;

const TestimonialsSection = (props) => {
  const Emily = new User(`Emily R.`, `Marketing Director`, userEmilyImg);
  const Thomas = new User(`Thomas S.`, `Chief Operating Officer`, userJennyImg);
  const Jennie = new User(`Jennie F.`, `Business Owner`, userThomasImg);

  return (
    <StyledSection>
      <SectionHeader>CLIENT TESTIMONIALS</SectionHeader>
      <TestimonialsBox>
        <TestimonialBox
          text={`We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`}
          user={Emily}
        />
        <TestimonialBox
          text={`Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`}
          user={Thomas}
        />
        <TestimonialBox
          text={`Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`}
          user={Jennie}
        />
      </TestimonialsBox>
    </StyledSection>
  );
};

export default TestimonialsSection;
