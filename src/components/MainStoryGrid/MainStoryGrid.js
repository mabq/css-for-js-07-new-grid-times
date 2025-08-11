import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, SECONDARY_STORIES, OPINION_STORIES } from "../../data";
import { QUERIES } from "../../constants";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalSeparatorWrapper>
              <SecondaryStory key={story.id} {...story} />
            </VerticalSeparatorWrapper>
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <VeriticalSeparatorWrapperOpinions>
              <OpinionStory key={story.id} {...story} />
            </VeriticalSeparatorWrapperOpinions>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr minmax(250px, 1fr);
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 48px 0px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    gap: 0px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 24px;
    margin-right: 24px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.laptopAndUp} {
    padding-right: 24px;
    margin-right: 24px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(SecondaryStoryList)`
  @media ${QUERIES.tabletOnly} {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
`;

const VerticalSeparatorWrapper = styled.div`
  &:not(:last-of-type) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const VeriticalSeparatorWrapperOpinions = styled(VerticalSeparatorWrapper)`
  flex: 1;
  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type) {
      padding-bottom: 0;
      margin-bottom: 0;
      border-bottom: none;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -6px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 18px;
    padding-top: 18px;
    border-top: 1px solid var(--color-gray-300);
    padding-bottom: 6px;
  }
`;

export default MainStoryGrid;
