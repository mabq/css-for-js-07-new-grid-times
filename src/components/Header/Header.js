import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, WEIGHTS, FAMILIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <ActionGroup>
          <button>
            <User size={24} />
          </button>
        </ActionGroup>
      </SuperHeader>
      <MainHeaderMobileAndUp>
        <Logo />
      </MainHeaderMobileAndUp>
      <MainHeaderLaptopAndUp>
        <ActionGroupDesktop>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupDesktop>
        <Logo />
        <SubscribeGroup>
          <Button>Subscribe</Button>
          <LoginLink>Already a subscriber?</LoginLink>
        </SubscribeGroup>
      </MainHeaderLaptopAndUp>
    </header>
  );
};

const SuperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  /* Remove the inline spacing that comes with react-feather icons */
  svg {
    display: block;
  }
`;

const MainHeaderMobileAndUp = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 44px;
  @media ${QUERIES.tabletAndUp} {
    margin-top: 38px;
    margin-bottom: 68px;
  }
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const MainHeaderLaptopAndUp = styled(MaxWidthWrapper)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 8px;
    margin-bottom: 78px;
  }
`;

const ActionGroupDesktop = styled(ActionGroup)`
  padding-top: 6px;
`

const SubscribeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: end; /* as child of Grid */
  padding-top: 36px;
`;

const LoginLink = styled.a`
  margin-top: 10px;
  font-family: ${FAMILIES.serif};
  font-weight: ${WEIGHTS.normal};
  font-style: italic;
  font-size: 14px;
  color: var(--color-gray-900);
  text-decoration: underline;
`

export default Header;

