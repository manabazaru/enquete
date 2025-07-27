import type{JSX} from "react";

type Props = {
    names: string[];
}

export function HelloWorld({names}: Props){
    return (
        <ul>
            {names.map((name: string): JSX.Element =>{
                return <li key={name}>Hello, {name}!</li>
            })}
        </ul>
    )
}