import { Rule } from 'effector-forms'

export const required = (): Rule<string> => ({
  name: 'required',
  validator: Boolean,
})
