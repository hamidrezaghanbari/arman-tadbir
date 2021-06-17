import styled from "styled-components"
import { Head } from 'next/document'
import Header from "../components/index/header"
import MainSection from "../components/index/main-section"
import Middle from "../components/index/middle"
import Desc from "../components/index/desc"

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      {/* <Head>
        <title>صفحه ورود</title>
      </Head> */}

      <Header />

      <Main>
        <MainSection />
        <Middle />
        <Desc />
      </Main>

    </LoginPageWrapper>
  )
}

export const LoginPageWrapper = styled.div`
   display: flex;
   flex-direction: column;
`

export const Main = styled.main`
   background-image: url('/images/main-back.png');
   background-size: cover;
   height: 1000px;
   margin: 0 100px;
`
