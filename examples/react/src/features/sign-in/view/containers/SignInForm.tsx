import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useStore } from 'effector-react'
import { renderErrorText } from '@/lib/jsx-helpers'
import {
  InputField, Form, FormRow, PrimaryButton, Heading, ErrorAlert,
} from '@/ui'
import {
  $username,
  $password,
  $isPasswordValid,
  $isUsernameValid,
  $formDisabled,
  $submitEnabled,
  $signInError,
  usernameChanged,
  passwordChanged,
  submit,
} from '../../model/private'


const Username = () => {
  const { t } = useTranslation()
  const username = useStore($username)
  const isUsernameValid = useStore($isUsernameValid)
  const formDisabled = useStore($formDisabled)

  return (
    <FormRow>
      <InputField
        value={username}
        onChange={(e) => usernameChanged(e.target.value)}
        placeholder={t('signIn.usernameLabel')}
        disabled={formDisabled}
        errorText={!isUsernameValid ? t('signIn.usernameErrorText') : ''}
      />
    </FormRow>
  )
}

const Password = () => {
  const { t } = useTranslation()
  const password = useStore($password)
  const isPasswordValid = useStore($isPasswordValid)
  const formDisabled = useStore($formDisabled)

  return (
    <FormRow>
      <InputField
        type="password"
        value={password}
        onChange={(e) => passwordChanged(e.target.value)}
        placeholder={t('signIn.passwordLabel')}
        disabled={formDisabled}
        errorText={!isPasswordValid ? t('signIn.passwordErrorText') : ''}
      />
    </FormRow>
  )
}


export const SignInForm = () => {
  const { t } = useTranslation()
  const submitEnabled = useStore($submitEnabled)
  const signInError = useStore($signInError)

  return (
    <Form
      onSubmit={() => submit()}
      heading={(
        <Heading level="lgx">{t('signIn.formHeader')}</Heading>
      )}
      error={!!signInError && (
        <ErrorAlert>
          {renderErrorText(signInError.name, {
            InvalidCredentials: t('errors.InvalidCredentials'),
            UnknownError: t('errors.UnknownError'),
          })}
        </ErrorAlert>
      )}
      fields={(
        <>
          <Username />
          <Password />
        </>
      )}
      actions={(
        <PrimaryButton type="submit" disabled={!submitEnabled}>
          {t('signIn.submitBtn')}
        </PrimaryButton>
      )}
    />
  )
}
