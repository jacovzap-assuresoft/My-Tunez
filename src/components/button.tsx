interface ButtonProps {
  label: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const Button = ({ label, onClick = () => {}, type = 'button'}: ButtonProps) => {
  return (
    <button
      type={type}
      className='bg-red-700 h-11 text-white font-semibold hover:opacity-80 rounded-md px-5'
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
