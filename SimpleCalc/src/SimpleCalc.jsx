import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SimpleCalc() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAdd = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        setResult(`Result: ${sum}`);
    };

    const handleSubtract = () => {
        const difference = parseFloat(num1) - parseFloat(num2);
        setResult(`Result: ${difference}`);
    };

    const handleMultiply = () => {
        const product = parseFloat(num1) * parseFloat(num2);
        setResult(`Result: ${product}`);
    };

    const handleDivide = () => {
        const quotient = parseFloat(num1) / parseFloat(num2);
        setResult(`Result: ${quotient}`);
    };

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <input type="number" className="form-control" placeholder="Enter  a number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                </div>
                <div className="col">
                    <input type="number" className="form-control" placeholder="Enter a number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                </div>
            </div>
            <div className="mb-2">
                <button className="btn btn-primary mr-2" onClick={handleAdd}>Add</button>
                <button className="btn btn-primary mr-2" onClick={handleSubtract}>Subtract</button>
                <button className="btn btn-primary mr-2" onClick={handleMultiply}>Multiply</button>
                <button className="btn btn-primary" onClick={handleDivide}>Divide</button>
            </div>
            {result && <p>{result}</p>}
        </div>
    );
}

export default SimpleCalc;
