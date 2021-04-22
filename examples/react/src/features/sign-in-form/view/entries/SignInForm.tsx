import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useStore } from 'effector-react'
import { useField } from 'effector-forms'
import {
  InputField, Form, FormRow, PrimaryButton, Heading, ErrorAlert,
} from '@/ui'
import {
  signInForm,
  $formDisabled,
  signInFx,
  $signInError,
} from '../../model/private'


const Username = React.memo(() => {
  const { t } = useTranslation()
  const username = useField(signInForm.fields.username)
  const formDisabled = useStore($formDisabled)

  return (
    <FormRow>
      <InputField
        value={username.value}
        onChange={(e) => username.onChange(e.target.value)}
        placeholder={t('signIn.usernameLabel')}
        disabled={formDisabled}
        errorText={!username.isValid ? t('signIn.usernameErrorText') : ''}
      />
    </FormRow>
  )
})

const Password = React.memo(() => {
  const { t } = useTranslation()
  const password = useField(signInForm.fields.password)
  const formDisabled = useStore($formDisabled)

  return (
    <FormRow>
      <InputField
        type="password"
        value={password.value}
        onChange={(e) => password.onChange(e.target.value)}
        placeholder={t('signIn.passwordLabel')}
        disabled={formDisabled}
        errorText={!password.isValid ? t('signIn.passwordErrorText') : ''}
      />
    </FormRow>
  )
})


export const SignInForm = React.memo(() => {
  const { t } = useTranslation()
  const formValid = useStore(signInForm.$isValid)
  const pending = useStore(signInFx.pending)
  const signInError = useStore($signInError)
  const disabled = Boolean(!formValid || signInError || pending)

  return (
    <Form
      onSubmit={() => signInForm.submit()}
      heading={(
        <Heading level="lgx">{t('signIn.formHeader')}</Heading>
      )}
      error={!!signInError && (
        <ErrorAlert>
          {t('errors.InvalidCredentials')}
        </ErrorAlert>
      )}
      fields={(
        <>
          <Username />
          <Password />
        </>
      )}
      actions={(
        <PrimaryButton
          type="submit"
          disabled={disabled}
        >
          {t('signIn.submitBtn')}
        </PrimaryButton>
      )}
    />
  )
})
