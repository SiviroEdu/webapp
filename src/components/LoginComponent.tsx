

import * as React from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"






export default function LoginComponent(){
  return (
    <Card className="w-[350px]">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 mt-6">
              <div>Email</div>
              <Input id="name" type="email" placeholder="example@mail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <div>Password</div>
              <Input id="password" type="password" placeholder="qwerty$123" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center items-center flex-col">
        <div className="mx-auto">
          <Button className="w-32 bg-primary m-2">Proceed</Button>
        </div>
        <p className="text-xs text-center">
          By proceeding, you accept our <a href="" className="text-primary">Terms of use</a>, <a href="" className="text-primary">Privacy Policy</a> and <a href="" className="text-primary">Cookie policy</a>
        </p>
      </CardFooter>
    </Card>
  )
}


