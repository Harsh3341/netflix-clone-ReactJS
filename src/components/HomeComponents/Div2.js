import styled from "styled-components";

function Div2() {

    return (
        <Container>
            <Content>
                <CTA>
                    <DivLeft>

                        <h1>
                            Enjoy on your TV.
                        </h1>
                        <p>
                            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                        </p>
                    </DivLeft>
                    <DivRight>
                        <img src="/images/tv.png" alt="" />
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/videos/video1.m4v" />
                        </video>
                    </DivRight>
                </CTA>
            </Content>
        </Container>
    )
}

const Container = styled.section`

    min-height: 60vh;
    height: 100% ;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 10px solid #282828;
`;

const Content = styled.div`

    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 45px;

`;

const CTA = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:0 10.4vw;

    @media (max-width: 950px){
        flex-direction:column;
        margin:0 ;
        
    }

`;

const DivLeft = styled.div`

max-width: fit-content;
/* padding-right: 20px; */

h1{
    font-size: 3.125rem;
    margin:0;
    

    @media (max-width: 950px){
       font-size: 2.5rem;
       text-align: center;
    }

    @media (max-width: 950px){
        font-size: 1.625rem;
        
    }
}

p{
    font-size: 1.6rem;
    margin-bottom: 0;

    @media (max-width: 950px){
       text-align: center;
       font-size: 1.25rem;
    }

    @media (max-width: 950px){
        font-size: 1.125rem;
        
    }
}

@media (max-width: 950px){
        display:flex ;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

const DivRight = styled.div`

    max-height:60vh;
    /* width: 700px; */
    position: relative;
    

    img{
    /* height:  */
    width:100%;
    display: block;
    }

    video{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 21%;
    left: 13%;
    max-width: 73%;
    max-height: 54%;
    z-index: -1;
    }
    

`;
export default Div2;