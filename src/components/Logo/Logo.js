import React from "react";
import styled from "styled-components/macro";
import format from "date-fns/format";

import { QUERIES } from "../../constants";

const Logo = (props) => {
  return (
    <Wrapper>
      <Link href="/" {...props}>
        New Grid Times
      </Link>
      <TodaysDate>{format(new Date(), "EEEE, MMMM do, yyyy")}</TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  font-family: var(--font-family-logo);
  font-size: calc((36 / 16) * 1rem);
  color: var(--color-offblack);
  white-space: nowrap;
  @media (min-width: 320px) {
    font-size: calc((48 / 16) * 1rem);
  }
  @media ${QUERIES.tabletAndUp} {
    font-size: calc((64 / 16) * 1rem);
  }
`;

const TodaysDate = styled.p`
  font-family: var(--font-family-serif);
  font-size: calc((18 / 16) * 1rem);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-900);
  margin-top: -6px;
  @media ${QUERIES.tabletAndUp} {
    margin-top: -16px;
  }
`;

export default Logo;
