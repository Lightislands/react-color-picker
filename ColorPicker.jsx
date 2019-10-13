import React, { useState } from "react";

function ColorPicker({
        colorHandler, selected
}) {
    const [color, setColor] = useState(selected);
    
    const colorsArr = ['#6e67d3', '#6eacd4', '#8ec05a', '#dbd341', '#dd522f'];
    let palette = [];


    const handleColor = (e) => {
        let color =  e.currentTarget.dataset.id;
        colorHandler(color);
        setColor(color);
    };

    for (let i in colorsArr) {
        palette.push(
            <div
                key={i}
                data-id={colorsArr[i]}
                className="palette-item"
                style={{backgroundColor: colorsArr[i]}}
                onClick={handleColor}
            >
            </div>)
    }

    return (
        <div className="palette">
            {palette}
            <div
                className="selected"
                style={{backgroundColor: color || selected}}>
            </div>
        </div>
    )
}

export default ColorPicker;
