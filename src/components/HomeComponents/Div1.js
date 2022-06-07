import styled from "styled-components";

function Div1() {
  return (
    <Container>
      <Content>
        <CTA>
          <Dis1>Unlimited movies, TV shows and more.</Dis1>
          <Dis2>Watch anywhere. Cancel anytime.</Dis2>
          <Form>
            <Dis3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Dis3>
            <InnerDiv>
              <InputArea>
                <Label>
                  <input placeholder=""></input>
                  <label>Email address</label>
                </Label>
              </InputArea>
              <Button>
                <div>Get Started {">"}</div>
              </Button>
            </InnerDiv>
          </Form>
        </CTA>
      </Content>
      <BgImage />
    </Container>
  );
}

const Container = styled.section`
  height: 89vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 620px) {
    height: 58vh;
  }
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 89vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 80px 0px 80px;
  height: 100%;

  @media (max-width: 620px) {
    min-height: 58vh;
    height: 100%;
    margin-bottom: 0;
    padding: 0px 40px;
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
  height: 100%;
  opacity: 0.4;
  box-shadow: inset 0 20px 300px rgba(0, 0, 0, 1);
  border-bottom: 10px solid #282828;

  @media (max-width: 620px) {
    max-height: 70vh;
    height: 100%;
    box-shadow: inset 0px 35px 119px 0px rgb(0 0 0);
  }
`;

const CTA = styled.div`
  max-width: 950px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-top: 0;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
  padding: 50px 0;

  @media (max-width: 620px) {
    padding: 50px 0;
  }
`;

const Dis1 = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0 90px;

  @media (max-width: 885px) {
    font-size: 3.2rem;
    margin: 0 0;
  }

  @media (max-width: 620px) {
    font-size: 1.75rem;
    margin: 0 0;
  }
`;

const Dis2 = styled.h3`
  font-size: 1.625rem;
  font-weight: 400;
  margin: 20px 90px;

  @media (max-width: 620px) {
    font-size: 1.125rem;
    margin: 10px 0;
  }
`;

const Form = styled.form`
  max-width: 950px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Dis3 = styled.h4`
  padding: 0 10%;
  font-size: 1.2rem;
  width: 100%;

  @media (max-width: 620px) {
    margin: 10px 0;
    font-size: 16px;
    padding: 0 0;
  }
`;
const InnerDiv = styled.div`
  margin-top: 15px;
  max-width: 850px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
const InputArea = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  position: relative;
  width: 100%;

  input {
    width: 100%;
    height: 70px;
    padding-top: 11px;

    @media (max-width: 620px) {
      height: 45px;
      width: 100%;
    }
  }

  label {
    position: absolute;
    color: #8c8c8c;
    font-size: 14px;
    left: 10px;
    top: 50%;
    transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease,
      -webkit-transform 0.1s ease, -moz-transform 0.1s ease,
      -o-transform 0.1s ease;
    transform: translateY(-50%);
  }

  @media (max-width: 950px) {
    width: 65%;
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`;

const Button = styled.a`
  background-color: #de2020;
  height: 70px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 30%;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;

  div {
    width: 100%;
  }

  &:hover {
    background-color: red;
  }

  @media (max-width: 950px) {
    height: 50px;
    width: 20%;
    margin: 10px;
  }

  @media (max-width: 620px) {
    height: 30px;
    width: 40%;
    font-size: 10px;
  }
`;

export default Div1;
