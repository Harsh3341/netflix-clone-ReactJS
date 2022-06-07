import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Content>
        <CTA>
          <p>Questions? Call 000-800-040-1843</p>
          <ul>
            <li>
              <a href="/#">FAQ</a>
            </li>
            <li>
              <a href="/#">Help Centre</a>
            </li>
            <li>
              <a href="/#">Account</a>
            </li>
            <li>
              <a href="/#">Media Centre</a>
            </li>
          </ul>

          <DropDown>
            <Lang>English</Lang>
            <p>Netflix India</p>
          </DropDown>
        </CTA>
      </Content>
    </Container>
  );
}

const Container = styled.footer`
  min-height: 60vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  min-height: 60vh;
  width: 100%;
  padding: 45px;
  display: flex;
  margin: 0 240px;

  @media (max-width: 950px) {
    margin: 0;
  }
`;

const CTA = styled.div`
  width: 100%;

  p {
    color: #838383;

    @media (max-width: 950px) {
      text-align: center;
    }
  }

  ul {
    list-style-type: none;
    display: grid;
    padding: 20px;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    li {
      cursor: pointer;

      a {
        color: #838383;
      }

      &:hover {
        text-decoration: underline;
      }
    }
    @media (max-width: 950px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      text-align: center;
    }
  }
`;

const DropDown = styled.div`
  margin-top: 100px;

  @media (max-width: 620px) {
    text-align: center;
  }
`;

const Lang = styled.div`
  border: 1px solid #838383;
  padding: 9px 20px;
  width: 96px;
  color: #838383;

  @media (max-width: 950px) {
    margin: auto;
  }
`;

export default Footer;
