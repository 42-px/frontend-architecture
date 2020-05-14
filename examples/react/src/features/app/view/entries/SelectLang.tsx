import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { LangSelector } from '@/ui'

export const SelectLang = () => {
  const { i18n } = useTranslation()

  return (
    <LangSelector langChanged={(lang) => i18n.changeLanguage(lang)} />
  )
}
