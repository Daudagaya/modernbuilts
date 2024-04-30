"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Please provide your Full Name",
  }),
  email: z.string().min(3, {
    message: "Email address must be less than 2 characters",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  phone: z.string().min(2, {
    message: "Password confirmation must match characters.",
  }),
  passwordConfirmation: z.string().min(6, {
    message: "Username must be at least 2 characters.",
  }),
})

export function SignUpForm() {

  const [terms, setTerms] = useState<boolean> (false)


  const changeTerms = () => {
    return setTerms((prev: boolean): boolean => {
      return !prev
    })
    console.log(terms)
  }
  // 
   // 
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirmation: ""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
  
    console.log(values)
  }



  return (
    <div className=" flex flex-col">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name </FormLabel>
              <FormControl>
                <Input className=" outline-yellow-500" placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className=" grid grid-cols-2 gap-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input className=" outline-yellow-500" placeholder="Email Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input className=" outline-yellow-500" placeholder="(234) 000 000 000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>
       <div className="grid grid-cols-2 gap-2">
       <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className=" outline-yellow-500" placeholder="Passsord" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Confirmation</FormLabel>
              <FormControl>
                <Input type="password" className=" outline-yellow-500" placeholder="Confirm Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       </div>
       <div className="flex items-center space-x-2">
      <Checkbox id="terms" 
       checked={terms}
       onCheckedChange={changeTerms}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>

       <Button type="submit" className=" w-full">Submit</Button>
      </form>
    </Form>
   <div className=" py-6">
   <fieldset className=" border-t-2 flex flex-col text-center items-center align-middle justify-center">
      <legend className=" self-center flex px-2 text-sm text-gray-600" >or log in with</legend>
      <div className=" py-4 w-full ">
        <button className=" rounded-md hover:bg-gray-100 transition-all ease-in-out flex space-x-3 items-center justify-center bg-white py-2 border-2  border-gray-300 w-full ">
         <p className=" text-md"> Sign Up with Google</p>
         <FcGoogle size={23} />
        </button>
      </div>
    </fieldset>
   </div>
    </div>
  )
}

