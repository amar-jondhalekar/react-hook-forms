import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  return (
    <>
    <div>
      Hello 
    </div>
    </>
  )
}

export default App
