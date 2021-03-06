import * as React from 'react'
import styled, { css } from 'styled-components'
import { themeVar, useTheme, ThemedStyledProps } from '@/ui/theming'
import { Icon, IconName } from '@/ui/icons'

type Props = {
  type?: 'submit' | 'reset' | 'button';
  icon?: IconName;
  disabled?: boolean;
  renderIcon?: () => React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const PrimaryButton = ({
  icon, renderIcon, onClick, disabled, children, type = 'button',
}: Props) => {
  const theme = useTheme()
  const hasIcon = icon || renderIcon

  return (
    <Wrap onClick={onClick} type={type} disabled={disabled}>
      {hasIcon && (
        <IconWrap>
          {icon && (
            <Icon
              icon={icon}
              fill={theme.primaryButtonTextColor}
              width={15}
            />
          )}
          {renderIcon && renderIcon()}
        </IconWrap>
      )}
      {children}
    </Wrap>
  )
}

const IconWrap = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`

const Wrap = styled.button<ThemedStyledProps & { disabled?: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${themeVar('baseFont')};
  font-weight: 500;
  border-radius: 3px;
  height: 40px;
  padding: 0 15px;
  border: 0;
  outline: none;
  color: ${themeVar('primaryButtonTextColor')};
  background-color: ${themeVar('primaryButtonColor')};
  ${({ disabled }) => disabled && css`
    opacity: 0.6;
  `}
`
