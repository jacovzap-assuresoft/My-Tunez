import toast from 'react-hot-toast'

const useToast = () => {
  const toastError = (message: string) =>
    toast.error(message, {
      iconTheme: {
        primary: '#111827',
        secondary: '#ffff'
      }
    })

  const toastSuccess = (message: string) =>
    toast.success(message, {
      iconTheme: {
        primary: '#b91c1c',
        secondary: '#ffff'
      }
    })

  return {
    toastError,
    toastSuccess
  }
}

export default useToast
