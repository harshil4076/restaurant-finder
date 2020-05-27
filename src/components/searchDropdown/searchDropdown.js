import React from 'react';
import { useEffect, useState } from 'react'
import './searchDropdown.css';

const SearchDropdown = (props) => {
    const { getInputSelection, itemName, required} = props;
    const [item, setItem] = useState("")    
  //handle user input  
    const handleChange = (e) =>{
        setItem(e.target.value)
    }
    useEffect(() => {
        getInputSelection(item)
    }, [item])
    return (
        <>
        <input required={required} aria-label={itemName} type="text" className="Input" name="Item" placeholder={itemName} onChange={(e) => handleChange(e)} />
        </>
    )
}

export default SearchDropdown;