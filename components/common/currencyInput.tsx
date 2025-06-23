import {Input, InputProps} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import {ConvertRupiahInputToNumber, FormatToDesimalInput, FormatToDesimalInput3} from "@/lib/utils";

interface CurrencyInputProps extends Omit<InputProps, 'value' | 'onChange'> {
    value: number;
    onChange: (value: number) => void;
    decimalSeparator?: string;
    thousandSeparator?: string;
}

export const CurrencyInputRp: React.FC<CurrencyInputProps> = ({
                                                                  value,
                                                                  onChange,
                                                                  decimalSeparator = ",",
                                                                  thousandSeparator = ".",
                                                                  ...props
                                                              }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Remove all non-numeric characters except decimal separator
        const cleanValue = inputValue.replace(new RegExp(`[^0-9${decimalSeparator}]`, 'g'), '');

        // Ensure only one decimal separator
        const parts = cleanValue.split(decimalSeparator);
        if (parts.length > 2) {
            return;
        }
        if (parts.length > 1) {
            parts[1] = parts[1].slice(0, 2);
        }
        // Format the number with thousand separators
        if (parts[0].length > 3) {
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
        }
        const formattedValue = parts.join(decimalSeparator);
        setValueString(formattedValue);
    };
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.trim();
        if (inputValue==""){
            setValueString('0' + decimalSeparator + '00');
        }
        if (inputValue.split(decimalSeparator).length==1){
            const formattedValue = inputValue + decimalSeparator + '00';
            setValueString(formattedValue);
        }
    }

    const [valueString, setValueString] = useState(FormatToDesimalInput(value))
    useEffect(() => {
        onChange(ConvertRupiahInputToNumber(valueString));
    }, [valueString]);

    return (
        <Input
            {...props}
            variant={props.isReadOnly ? "faded": "bordered"}
            startContent={<span className={"pointer-events-none pr-1"}>Rp.</span>}
            style={{textAlign: "right"}}
            value={valueString}
            defaultValue={valueString}
            onBlur={handleChange2}
            onChange={handleChange}
        />
    );
};

interface CurrencyReadonlyProps extends Omit<InputProps, 'value' | 'label'> {
    value: number;
    label: string;
}
export const CurrencyRpReadOnly: React.FC<CurrencyReadonlyProps> = ({value,
                                                                        label,
                                                                        ...props})=>{
    return <Input
        startContent={<span className={"pointer-events-none pr-1"}>Rp.</span>}
        style={{textAlign: "right"}}
        isReadOnly
        label={label}
        value={FormatToDesimalInput(value)}/>
}
interface VReadonlyProps extends Omit<'value', any> {
    value: number;
}
export const RpView: React.FC<VReadonlyProps> = ({value})=>{
    return <div className={"flex flex-row justify-between items-center"}>
        <div className={"pointer-events-none px-2"}>Rp.</div>
        <div className={"text-right"}>{FormatToDesimalInput(value)}</div>
    </div>
}


interface DecimalInputProps extends Omit<InputProps, 'value' | 'onChange'> {
    value: number;
    onChange: (value: number) => void;
    decimalSeparator?: string;
    thousandSeparator?: string;
}

export const DecimalInput: React.FC<DecimalInputProps> = ({
                                                              value,
                                                              onChange,
                                                              decimalSeparator = ",",
                                                              thousandSeparator = ".",
                                                              ...props
                                                          }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Remove all non-numeric characters except decimal separator
        const cleanValue = inputValue.replace(new RegExp(`[^0-9${decimalSeparator}]`, 'g'), '');

        // Ensure only one decimal separator
        const parts = cleanValue.split(decimalSeparator);
        if (parts.length > 2) {
            return;
        }
        if (parts.length > 1) {
            parts[1] = parts[1].slice(0, 2);
        }
        // Format the number with thousand separators
        if (parts[0].length > 3) {
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
        }
        const formattedValue = parts.join(decimalSeparator);
        setValueString(formattedValue);
    };
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.trim();
        if (inputValue==""){
            setValueString('0' + decimalSeparator + '00');
        }
        if (inputValue.split(decimalSeparator).length==1){
            const formattedValue = inputValue + decimalSeparator + '00';
            setValueString(formattedValue);
        }
    }

    const [valueString, setValueString] = useState(FormatToDesimalInput(value))
    useEffect(() => {
        onChange(ConvertRupiahInputToNumber(valueString));
    }, [valueString]);

    return (
        <Input
            {...props}
            variant={props.isReadOnly ? "faded": "bordered"}
            value={valueString}
            onBlur={handleChange2}
            onChange={handleChange}
        />
    );
};

export const DecimalInput3: React.FC<DecimalInputProps> = ({
                                                              value,
                                                              onChange,
                                                              decimalSeparator = ",",
                                                              thousandSeparator = ".",
                                                              ...props
                                                          }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Remove all non-numeric characters except decimal separator
        const cleanValue = inputValue.replace(new RegExp(`[^0-9${decimalSeparator}]`, 'g'), '');

        // Ensure only one decimal separator
        const parts = cleanValue.split(decimalSeparator);
        if (parts.length > 2) {
            return;
        }
        if (parts.length > 1) {
            parts[1] = parts[1].slice(0, 3);
        }
        // Format the number with thousand separators
        if (parts[0].length > 3) {
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
        }
        const formattedValue = parts.join(decimalSeparator);
        setValueString(formattedValue);
    };
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.trim();
        if (inputValue==""){
            setValueString('0' + decimalSeparator + '00');
        }
        if (inputValue.split(decimalSeparator).length==1){
            const formattedValue = inputValue + decimalSeparator + '00';
            setValueString(formattedValue);
        }
    }

    const [valueString, setValueString] = useState(FormatToDesimalInput3(value))
    useEffect(() => {
        const value3 = Number(valueString.replaceAll(",", "."));
        onChange(value3);
    }, [valueString]);

    return (
        <Input
            {...props}
            variant={props.isReadOnly ? "faded": "bordered"}
            value={valueString}
            onBlur={handleChange2}
            onChange={handleChange}
        />
    );
};