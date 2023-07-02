import { ReactNode, createContext, useContext } from 'react'

interface FormControlContextData {
  id: string
  isRequired?: boolean
  ariaInvalid?: boolean
}

interface FormControlProviderProps extends FormControlContextData {
  children: ReactNode
}

const FormControlContext = createContext({} as FormControlContextData)

export const FormControlProvider = ({
  children,
  id,
  isRequired,
  ariaInvalid,
}: FormControlProviderProps) => {
  return (
    <FormControlContext.Provider value={{ id, isRequired, ariaInvalid }}>
      {children}
    </FormControlContext.Provider>
  )
}

export const useFormControl = () => {
  const context = useContext(FormControlContext)

  if (!context) return null

  return context
}
