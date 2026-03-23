import { useEffect, useRef, useState } from "react";

enum Operator {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/",
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>(null);

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);

        } else {
            setFormula(number);
        }
    }, [number]);

    useEffect(() => {
        // Todo: calcular subresultado y mostrarlo en el formula
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    }, [formula]);

    const clear = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = null;
    }

    const toggleSign = () => {
        if (number.startsWith('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const deleteLast = () => {

        let currentSign = '';
        let temporalNumber = number;

        if (number.startsWith('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            setNumber(currentSign + temporalNumber.substring(0, temporalNumber.length - 1));
        } else {
            setNumber('0');
        }
    }

    const setLastNumber = () => {
        //Todo: Calcular el resultado de la operación y setearlo en el prevNumber
        calculateResult();

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }

        setPrevNumber(number);
        setNumber('0');
    }

    const divideOperation = () => {

        setLastNumber();
        lastOperation.current = Operator.Divide;
        setPrevNumber(number);
        setNumber('0');
    }

    const multiplyOperation = () => {

        setLastNumber();
        lastOperation.current = Operator.Multiply;
        setPrevNumber(number);
        setNumber('0');
    }

    const subtractOperation = () => {

        setLastNumber();
        lastOperation.current = Operator.Subtract;
        setPrevNumber(number);
        setNumber('0');
    }

    const addOperation = () => {

        setLastNumber();
        lastOperation.current = Operator.Add;
        setPrevNumber(number);
        setNumber('0');
    }

    const calculateSubResult = () => {
        const [firstValue, operator, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if (isNaN(num2)) return num1;

        switch (operator) {
            case Operator.Add:
                return num1 + num2;
            case Operator.Subtract:
                return num1 - num2;
            case Operator.Multiply:
                return num1 * num2;
            case Operator.Divide:
                return num1 / num2;
            default:
                throw new Error(`Operación ${operator} no soportada`);
        }
    }

    const calculateResult = () => {
        const results = calculateSubResult();

        setFormula(`${results}`);

        lastOperation.current = null;
        setPrevNumber('0');
    }


    const buildNumber = (numberString: string) => {
        // Verificar si ya existe el punto decimal
        if (number.includes(".") && numberString === ".") return;

        // Si el número actual es "0", reemplazar por el nuevo número (excepto si es otro 0)
        if (number === "0") {
            if (numberString === "0") return; // No agregar otro 0
            setNumber(numberString);
            return;
        }

        // Agregar el número al final
        return setNumber(number + numberString);

    };

    return {
        // Props
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
        clear,
        toggleSign,
        deleteLast,

        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateSubResult,
        calculateResult,
    }
};