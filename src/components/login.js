import styled from "styled-components";

function Login() {
  return (
    <Container>
      <img src="/images/Netflix_Logo_PMS.png" alt="" />
      <Content>
        <CTA>
          <h1>Sign In</h1>
          <Form action="/browse">
            <input placeholder="Email or phone number"></input>
            <input placeholder="Password"></input>
            <a href="/#">
              <button>Sign In</button>
            </a>
            <Bottom>
              <input type="checkbox" />
              <label>Remember me</label>
              <div>Need help?</div>
            </Bottom>
          </Form>
        </CTA>
        <FFooter>
          <InnerDiv>
            <CTA2>
              <h5>Questions? Call 000-800-040-1843</h5>
              <ul>
                <li>
                  <a href="/login">FAQ</a>
                </li>
                <li>
                  <a href="/login">Help Centre</a>
                </li>
                <li>
                  <a href="/login">Terms of Use</a>
                </li>
                <li>
                  <a href="/login">Privacy</a>
                </li>
                <li>
                  <a href="/login">Cookie Preferences</a>
                </li>
                <li>
                  <a href="/login">Corporate Information</a>
                </li>
              </ul>
              <DropDown>
                <Lang>English</Lang>
              </DropDown>
            </CTA2>
          </InnerDiv>
        </FFooter>
      </Content>
      <BgImage />
    </Container>
  );
}

const Container = styled.section`
  min-height: 150vh;
  display: flex;
  justify-content: center;

  img {
    position: absolute;
    width: 200px;
    left: 10px;

    @media (max-width: 950px) {
      width: 150px;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 115px;
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const CTA = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 35rem;
  width: 28rem;
  border-radius: 10px;
  padding: 45px 65px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: white;
    margin-bottom: 20px;
    margin-top: 0;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const BgImage = styled.div`
  background-image: url("/images/BgImage.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0.5;
  min-height: 166vh;

  /* @media (max-width: 620px){
        max-height: 70vh;
        height: 100%;
        box-shadow: inset 0px 35px 119px 0px rgb(0 0 0);
    } */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    padding: 15px;
    height: 3rem;
    margin: 15px 0;
    border-radius: 5px;
    border: none;
    font-size: medium;
    font-weight: 500;
    background-color: #343333;
    width: 100%;
    color: white;
  }

  a {
    height: 3rem;
    width: 100%;
    cursor: pointer;
    margin-top: 40px;

    button {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 5px;
      background-color: red;
      color: white;
      font-size: 16px;
      font-weight: 700;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 2px;
  position: relative;

  input {
    width: 17px;
    background-color: #343333;
    margin: 0;
  }

  label {
    font-size: 13px;
    margin-left: 3px;
  }

  div {
    position: absolute;
    right: 2px;
    font-size: 13px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const FFooter = styled.footer`
  width: 100%;
  margin-top: 124px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const InnerDiv = styled.div`
  height: 100%;
  padding: 46px 16.2vw;
`;

const CTA2 = styled.div`
  h5 {
    margin: 0;
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
    font-size: 14px;

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
  margin-top: 50px;

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

export default Login;
