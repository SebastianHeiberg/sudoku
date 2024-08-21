import React, { useState } from "react";
import "./numberBar.css";

const NumberBar = ({ onNumberClick }) => {
    const tableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [selectedNumber, setSelectedNumber] = useState(0);

    return (
        <table className="number-bar">
            <tbody>
                <tr>
                    {tableNumbers.map(number => (
                        <td
                            key={number}
                            className={`number ${selectedNumber === number ? 'selected' : ''}`}
                            onClick={() => {
                                onNumberClick(number);
                                setSelectedNumber(number);
                            }}
                        >
                            {number}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}

export default NumberBar;