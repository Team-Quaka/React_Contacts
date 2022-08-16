import { NextComponentType, NextPage } from "next";
import {CONTACT} from '../types/CONTACT'
import {Input, Button, TextField} from '@mui/material'
import { useCallback, useState } from "react";

const SearchBar: NextComponentType = () => {
    const [inputValue, setInputValue] = useState('')

    const handleSearch = useCallback(() => {
        console.log('handle search')
        console.log(inputValue)
    }, [inputValue])
    return (
        <TextField type="text" 
        className="mb-16" 
        onChange={(e) => {
            e.preventDefault()
            setInputValue(e.target.value)
        }}
        onKeyUp={(e) => {
            if (e.key === "Enter") handleSearch()
        }}
        value={inputValue}
        label="search"
        variant="standard"
        />
    )
}

export default SearchBar
