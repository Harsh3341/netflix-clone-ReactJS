import styled from "styled-components";

function Div6() {

    return (
        <Container>
            <Content>
                <CTA>
                    <h1>
                        Frequently Asked Questions
                    </h1>
                    <ul>
                        <li>
                            <button>
                                What is Netflix?
                                <span>+</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                How much does Netflix cost?
                                <span>+</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                Where can I watch?
                                <span>+</span>
                            </button>

                        </li>
                        <li>
                            <button>
                                How do I cancel?
                                <span>+</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                What can I watch on Netflix?
                                <span>+</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                Is Netflix good for kids?
                                <span>+</span>
                            </button>
                        </li>
                    </ul>
                    <Form>
                        <Dis3>
                            Ready to watch? Enter your email to create or restart your membership.
                        </Dis3>
                        <InnerDiv>
                            <InputArea>
                                <Label>
                                    <input placeholder=""></input>
                                    <label>Email address</label>
                                </Label>
                            </InputArea>
                            <Button>
                                <div>
                                    Get Started  {'>'}
                                </div>
                            </Button>
                        </InnerDiv>
                    </Form>
                </CTA>
            </Content>
        </Container>
    )
}

const Container = styled.section`

    min-height: 130vh;
    
    height: 100% ;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 10px solid #282828;
`;

const Content = styled.div`

    min-height: 130vh;
    width: 100%;
    padding: 45px;
    display: flex;
    justify-content: center;

    
    @media (max-width: 450px){
        padding: 45px 0;
        
    }

`;

const CTA = styled.div`
    width: 52vw;
    text-align: center;

    h1{
        font-size: 3.125rem;
        line-height: 1.1;
        margin-bottom: 0.5rem;

        @media (max-width: 950px){
            font-size: 2rem;
        
        }
        
    }
    ul{
        list-style-type: none;
        text-align: center;
        padding: 0;
        margin-top: 45px;

        li{
            width: 100%;
            margin: 0 0 8px 0;
            font-size: 1.625rem;
            display: flex;

            button{
                padding: 0.8em 2.2em 0.8em 1.2em;
                margin-bottom: 1px;
                font-weight: 400;
                position: relative;
                width: 100%;
                border: 0;
                display: block;
                text-align: left;
                background: #303030;
                color: white;
                cursor: pointer;
                text-transform: none;
                overflow: visible;
                color: inherit;
                font: inherit;
                margin: 0;
                box-sizing: border-box;

            }

            span{
                position: absolute;
                right: 1em;
                font-size: 51px;
                top: 5px;

                @media (max-width: 950px){
                    font-size: 40px;
                    top: 3px;
        
                }

                @media (max-width: 450px){
                    font-size: 32px;
                    top: 3px;
                    right: 0.5em;
        
                }
            }

            @media (max-width: 950px){
                font-size: 1.2rem;
        
            }

            @media (max-width: 450px){
                font-size: 1rem;
        
            }
        }
    }

    @media (max-width: 950px){
        width: 100%;
        
    }
`;

const Form = styled.form`
    max-width: 950px;
    width:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`;

const Dis3 = styled.h4`
    
    
    font-size:1.2rem;
    width: 100%;

    @media (max-width: 620px){
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


    @media (max-width: 950px){
        flex-direction:column;
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

    input{
        width: 100%;
        height: 70px;
        padding-top:11px;

        @media (max-width: 620px){

        height: 45px;
        width: 100%;
    }

    }

    label{
        position: absolute;
        color: #8c8c8c;
        font-size: 14px;
        left: 10px;
        top: 50%;
        transition: font .1s ease,top .1s ease,transform .1s ease,-webkit-transform .1s ease,-moz-transform .1s ease,-o-transform .1s ease;
        transform: translateY(-50%);
    }

    @media (max-width: 950px){
        width: 65%;
    }

    @media (max-width: 620px){

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
    

    div{
        width: 100%;
    }

    &:hover{
        background-color:red;
    }

    @media (max-width: 950px){
        height: 50px;
        width: 20%;
        margin: 10px;
    }

    @media (max-width: 620px){
        height: 30px;
        width: 40%;
        font-size: 10px;
    }
`;

export default Div6;