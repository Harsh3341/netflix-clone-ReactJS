import styled from "styled-components";

function Navbar() {

    return (
        <Nav>
            <Logo>
                <img src="/images/Netflix_logo_PMS.png" alt="Logo" />
            </Logo>
            <Lang>
                English
            </Lang>
            <SignIn>
                <div>
                    Sign In
                </div>
            </SignIn>
        </Nav>
    )
}

const Nav = styled.nav`

    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    margin-top: 10px;

    @media (max-width: 620px){
        padding: 0 30px;
    }
`;

const Logo = styled.a`

    width: 200px;
    padding: 0;
    margin-top: 3px;
    max-height: 75px;

    img{
        display: block;
        width: 100%;
    }

    @media (max-width: 620px){
        width: 100px;
    }
`;

const Lang = styled.div`

    border: 1px solid white;
    padding: 9px 20px;
    position: absolute;
    right: 210px;

    @media (max-width: 620px){
        padding: 3px 10px;
        right: 120px;
    }
`;
const SignIn = styled.a`

    background-color: red;
    padding: 9px 20px;
    border-radius: 2px;
    cursor: pointer;

    @media (max-width: 620px){
        @media (max-width: 620px){
        padding: 3px 10px;
    }
    }
`;


export default Navbar;