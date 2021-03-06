import { useCallback, useState } from 'react'

export const useFormField = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const onChange = useCallback((e) => setValue(e.target.value), [])
  return { value, onChange }
}
