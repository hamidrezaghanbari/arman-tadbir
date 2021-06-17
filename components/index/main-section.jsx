import styled from "styled-components"

const MainSection = () => {
    return (
        <MainSectionWrapper>
            <LoginForm>
                <InputSec>
                    <span>نام کاربری</span>
                    <input type="text" />
                </InputSec>
                <InputSec>
                    <span>رمز عبور</span>
                    <input type="password" />
                </InputSec>

                <ButtonSec>
                    <LoginBtn>ورود به سیستم</LoginBtn>
                    <span>رمز عبور خود را فراموش کرده اید؟</span>
                </ButtonSec>
            </LoginForm>

            <LoginLeft>
                <MainRightImg />
                <LeftLine />
            </LoginLeft>
        </MainSectionWrapper>
    )
}

export const MainSectionWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   height: 47vh;
`

export const LoginForm = styled.div`
   padding: 80px 110px 0 0;
`

export const InputSec = styled.div`
   display: flex;
   flex-direction: column;

   & > span {
      padding-bottom: 10px;
   }

   & > input {
      border-radius: 6px;
      border: 1px solid #005C5C;
      outline: none;
      height: 40px;
      width: 370px;
   }

   margin-bottom: 10px;
`

export const ButtonSec = styled.div`
   margin-top: 30px;
   display: flex;
   flex-direction: column;

   & > span {
       display: inline-block;
       margin-top: 10px;
   }
`

export const LoginBtn = styled.button`
   background-color: #005C5C;
   border-radius: 6px;
   color: white;
   height: 35px;
   cursor: pointer;
   font-family: iransans;
`

export const LoginLeft = styled.div`
   display: flex;
   flex-direction: column;
   width: 55%;
   height: 100%;
`

export const MainRightImg = styled.div`
    background-image: url('/images/login-right.png');
    background-size: cover;
    width: 100%;
    height: 100%; 
`

export const LeftLine = styled.div`
   background-image: url('/images/login-line.png');
   width: 100%; 
   height: 3px;
`

export default MainSection
