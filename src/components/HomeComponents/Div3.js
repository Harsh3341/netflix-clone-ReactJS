import styled from "styled-components";

function Div3() {

    return (
        <Container>
            <Content>
                <CTA>

                    <DivRight>
                        <img src="/images/mobile-0819.jpg" alt="" />
                        <OverDiv>
                            <Banner>
                                <img src="/images/boxshot.png" alt="" />
                            </Banner>
                            <CenterItem>
                                Downloading...
                            </CenterItem>
                            <DownloadGIF>
                                <img src="/images/download-icon.gif" alt="" />
                            </DownloadGIF>
                        </OverDiv>
                    </DivRight>
                    <DivLeft>

                        <h1>
                            Download your shows to watch offline.
                        </h1>
                        <p>
                            Save your favourites easily and always have something to watch.

                        </p>
                    </DivLeft>
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
        /* flex-direction:column; */
        flex-wrap: wrap-reverse;
        justify-content: center;
        margin:0 ;
        
    }

`;

const DivLeft = styled.div`

max-width: fit-content;

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
    max-height:60vh;
    width:100%;
    display: block;

    }
    

`;

const OverDiv = styled.div`

    background-color: black;
    position: absolute;
    top: 68%;
    left: 10%;
    max-width: 78%;
    width: 100%;
    max-height: 26%;
    height: 100%;
    border-radius: 8px;
    border: 2px solid #282828;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    
`;

const Banner = styled.div`

    /* background-color: red; */
    max-width: 16%;
    height: 85%;

    img{
        width: 100%;
        height: 100%;
    }

`;

const CenterItem = styled.div`

    min-width: 50%;
    margin: 7px 0;

    @media (max-width: 950px){
        font-size: 0.9rem;
        
    }
    

`;

const DownloadGIF = styled.div`

    height: 70%;


    img{
        height: 100%;
    }

`;
export default Div3;