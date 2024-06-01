import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  SECONDARY_STORIES,
  OPINION_STORIES,
} from '../../data';
import { QUERIES } from '../../constants';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryListItemWrapper>
              <SecondaryStory key={story.id} {...story} />
            </SecondaryListItemWrapper>
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionListItemWrapper>
              <OpinionStory key={story.id} {...story} />
            </OpinionListItemWrapper>
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
    grid-template-columns: 1fr min(40%, 252px);
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 48px 0px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 380px 275px;
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
`;

const SecondaryListItemWrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-gray-300);
  &:first-of-type {
    padding-top: 0px;
  }
  &:last-of-type {
    padding-bottom: 0px;
    border-bottom: none;
  }
`

const OpinionListItemWrapper = styled(SecondaryListItemWrapper)`
  @media ${QUERIES.tabletOnly} {
    border-bottom: none;
    padding: 0;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
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
