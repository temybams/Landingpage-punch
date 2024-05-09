import styled from "styled-components";
import { useState } from "react";
import ZwiltName from "../imgs/ZwiltName.png";
import YellowArrow from "../imgs/YellowArrow.png";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 4em;
  padding: 1em 2em;
  border-radius: 15px;
  background-color: #3e3e3e;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const HeaderMobile = styled.header`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 2em;
    padding: 1em 2em;
    border-radius: 15px;
    background-color: #3e3e3e;
    gap: 1em;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    margin: 0.5em 1em;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1em;
  font-weight: 500;
  margin: 0 1em;
  &:hover {
    color: #f9a826;
  }
`;

const NavLink2 = styled.a`
  color: black;
  background-color: white;
  text-decoration: none;
  border-radius: 16px;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  &:hover {
    color: #f9a826;
  }
`;

const navData: NavItem[] = [
  { name: "Find work", path: "/" },
  { name: "Find talent", path: "/" },
  { name: "Articles", path: "/" },
  { name: "About us", path: "/" },
  { name: "Contact us", path: "/" },
];

interface NavItem {
  name: string;
  path: string;
}


const NavHeader: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
          }}
        >
          <img src={ZwiltName} alt="Zwilt" />
          <img src={YellowArrow} alt="Arrow" />
        </div>
        <div>
          {navData.map((nav, index) => (
            <NavLink key={index} href={nav.path}>
              {nav.name}
            </NavLink>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
          }}
        >
          <NavLink href="/">Log in</NavLink>
          <NavLink2 href="/">Join now</NavLink2>
        </div>
      </Header>
      <HeaderMobile>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
            }}
          >
            <img src={ZwiltName} alt="Zwilt" />
            <img src={YellowArrow} alt="Arrow" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
            }}
          >
            <button
              onClick={() => setShowMenu(!showMenu)}
              style={{
                transform: showMenu ? "rotate(90deg)" : "rotate(0deg)",
                transition: "all is ease-in-out",
                fontSize: "1.5em",
              }}
            >
              ☰
            </button>
          </div>
        </div>
        <div
          style={{
            display: showMenu ? "flex" : "none",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          {navData.map((nav, index) => (
            <NavLink
              key={index}
              href={nav.path}
              style={{ textAlign: "center" }}
            >
              {nav.name}
            </NavLink>
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
            }}
          >
            <NavLink href="/" style={{ textAlign: "center" }}>
              Log in
            </NavLink>
            <NavLink2 href="/" style={{ textAlign: "center" }}>
              Join now
            </NavLink2>
          </div>
        </div>
      </HeaderMobile>
    </>
  );
};

export default NavHeader;
