interface ButtonProps {
  label: string
  type?: 'button' | 'submit'
  onClick?: () => void
  isDisabled?: boolean
}

const Button = ({ label, onClick = () => {}, type = 'button', isDisabled = false}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className='bg-red-700 h-11 text-white font-semibold hover:opacity-80 rounded-md px-5 
                disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-80'
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
