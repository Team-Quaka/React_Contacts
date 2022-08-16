import { NextPage } from "next";
import {Input, Button} from '@mui/material'
import { useCallback, useState } from "react";

const Signup: NextPage = () => {
    const [inputValue, setInputValue] = useState('')

    const signupHandler = useCallback(() => {
        console.log('handle signup')
        console.log(inputValue)
    }, [inputValue])
    return (
        <div className="flex justify-center flex-col h-screen w-1/3 mx-auto ">
            <h1 className="text-3xl mb-9 font-bold">
                Please Signup to continue
            </h1>
            <Input type="text" onChange={(e) => {
                e.preventDefault()
                setInputValue(e.target.value)
                console.log(109)
            }} value={inputValue} 
            onKeyUp={(e) => {
                if (e.key === "Enter") signupHandler()
            }}
            />
            <div className="mt-6">
                <Button variant="outlined" onClick={(e) => {
                    e.preventDefault()
                    signupHandler()
                }}>
                    signup
                </Button>
            </div>
        </div>
    )
}

export default Signup