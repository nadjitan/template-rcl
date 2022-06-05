import React from "react"

export interface InputProps {
  /**
   * Input contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

const Input = ({ label, ...props }: InputProps) => {
  return <input {...props} placeholder={label} />
}

export default Input
