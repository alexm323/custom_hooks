import React from "react";
import useLocalStorageState from './hooks/useLocalStorageState'

const ColorPicker = () => {
    const [color,setColor] = useLocalStorageState('color','teal');
    return(
        <>
            <h1>Your color is {color}</h1>
            <select>
                <option value="red">Red</option>
                <option value="orange">orange</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="purple">purple</option>
            </select>
        </>
    )
}

export default ColorPicker;
