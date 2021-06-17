import styled from "styled-components"

const Desc = () => {
    return (
        <DescWrapper>
            <DescTitle>نکات امنیت</DescTitle>
            <DescList>
                <DescListItem>سامانه معاملات برخط این کارگزاری با استفاده از پروتکل امن و به آدرس  در اختیار مشتریان کارگزاری قرار دارد.لطفا پیش از ورود هرگونه اطلاعات آدرس موجود در بخش مرورگر خود را با آدرس فوق مقایسه نماید. در صورت مشاهده هرنوع مغایرت احتمالی از ادامه کار منصرف شده و موضوع را با ما در میان بگزادید.</DescListItem>

                <DescListItem>برای حفاظت از اطلاعات حساب کاربری خود حتی المقدور از صفحه کلید مجازی استفاده نمایید.</DescListItem>

                <DescListItem>هرگز نام کاربری خود و یا رمز عبور خود را در اختیار دیگران قرار ندهید.</DescListItem>

                <DescListItem>پس از اتمام کار با سامانه حتما با استفاده از دکمه خروج از حساب کاربری خود خارج شوید.</DescListItem>

                <DescListItem>از ذخیره نام کاربری و رمز عبور در مرورگر حتی المقدور  خود داری نمایید</DescListItem>
            </DescList>
        </DescWrapper>
    )
}

export const DescWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 50px 110px;
`

export const DescTitle = styled.p`
    padding: 0;
    margin-bottom: 25px;
`

export const DescList = styled.ul`
   list-style: none;
`

export const DescListItem = styled.li`
   &::before {
       content: '-';
       margin-left: 10px;
   }
   margin-bottom: 25px;
`

export default Desc
