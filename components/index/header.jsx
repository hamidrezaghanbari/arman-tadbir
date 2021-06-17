import styled from "styled-components"

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLogo />
        </HeaderWrapper>
    )
}

export const HeaderWrapper = styled.div`
   padding: 40px 10vw 14px 10vw;
`

export const HeaderLogo = styled.div`
   /* height: 142px; */
   height: 103px;
   width: 360px;
   margin-right: 70px;
   background-image: url('/images/logoheader.png');
   background-size: contain;
   background-position: center;
`

export default Header
