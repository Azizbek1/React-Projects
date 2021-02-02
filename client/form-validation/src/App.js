import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  StyledTitle,
  StyledForm,
  Label,
  RegularInput,
  SubmitInput,
  ErrorText,
  SuccessText
} from './styles'

function Title() {
  return <StyledTitle>Валидация формы</StyledTitle>
}

function Form() {
  const [result, setResult] = useState({
    message: '',
    success: false
  })

  const { register, errors, handleSubmit } = useForm()

  const validators = {
    required: 'Не может быть пустым'
  }

  async function onSubmit(values) {
    console.log(values)

    const response = await fetch('http://localhost:5000/server', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    const result = await response.json()

    setResult({
      message: result,
      success: response.ok
    })
  }

  function onClick() {
    window.location.reload()
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Имя:
          <RegularInput
            type='text'
            name='name'
            ref={register({
              ...validators,
              minLength: {
                value: 2,
                message: 'Не менее двух букв'
              },
              maxLength: {
                value: 10,
                message: 'Не более десяти букв'
              },
              pattern: {
                value: /[А-ЯЁ]{2,10}/i,
                message: 'Только киррилица'
              }
            })}
            defaultValue='Иван'
          />
        </Label>
        <ErrorText small>{errors.name && errors.name.message}</ErrorText>

        <Label>
          Email:
          <RegularInput
            type='email'
            name='email'
            ref={register({
              ...validators,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Неправильный адрес электронной почты'
              }
            })}
            defaultValue='email@example.com'
          />
        </Label>
        <ErrorText small>{errors.email && errors.email.message}</ErrorText>

        <Label>
          Пароль:
          <RegularInput
            type='password'
            name='password'
            ref={register({
              ...validators,
              pattern: {
                value: /^[A-Z0-9_-]{8,12}$/i,
                message:
                  'От 8 до 12 символов: латиница, цифры, нижнее подчеркивание и дефис'
              }
            })}
            defaultValue='password'
          />
        </Label>
        <ErrorText small>
          {errors.password && errors.password.message}
        </ErrorText>

        <SubmitInput type='submit' defaultValue='Отправить' />

        <SubmitInput as='button' onClick={onClick}>
          Сбросить
        </SubmitInput>
      </StyledForm>

      {result.success ? (
        <SuccessText>{result.message}</SuccessText>
      ) : (
        <ErrorText>{result.message}</ErrorText>
      )}
    </>
  )
}

export default function App() {
  return (
    <>
      <Title />
      <Form />
    </>
  )
}
