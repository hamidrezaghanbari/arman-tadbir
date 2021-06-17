import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MainSectionWrapper, MsgBox, ErrorMsg, LeftLine, LoginForm, InputSec, ButtonSec, LoginBtn, LoginLeft, MainRightImg } from './../widgets/index/main-section.widgets'

const MainSection = () => {
    const [response, setResponse] = useState({})

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        const response = await fetch('/api/hello', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resJson = await response.json()

        setResponse(resJson)
    }


    return (
        <MainSectionWrapper>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                {
                    response?.status && (
                        <MsgBox type={response.status}>
                            {response.message}
                        </MsgBox>
                    )
                }
                <InputSec error={errors.username}>
                    <span>نام کاربری</span>
                    <input {...register('username', { required: true, pattern: /^\S+@\S+$/i })} type="text" />
                    {errors.username && <ErrorMsg>فرمت نام کاربری باید به فرمت ایمیل باشد</ErrorMsg>}
                </InputSec>
                <InputSec error={errors.password}>
                    <span>رمز عبور</span>
                    <input type="password" {...register("password", { required: true, minLength: 6 })} />
                    {errors.password && <ErrorMsg>حداقل تعداد کاراکتر رمز عبور 6 کاراکتر است</ErrorMsg>}
                </InputSec>



                <ButtonSec error={errors.username && errors.password}>
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



export default MainSection
