import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "../schema"
import { LoginFormValues } from "../types/loginFormValues"

const useLoginForm = () => {
     const form = useForm<LoginFormValues>(
          {
               resolver: zodResolver(loginSchema)
          }
     )

     const onSubmit = () => {

     }

     return { form, onSubmit }
}

export default useLoginForm