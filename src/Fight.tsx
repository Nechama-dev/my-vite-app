import React, { useMemo, useState } from 'react';
import Pokemon from './Pokemon';

export default function Fight() {

    const [fatedName, setFatedName] = useState<any>(null)
    const araayName = ["ditto", "bulbasaur", "mew"]
    const [faintedArry, setFaintedArry] = useState<boolean[]>(
        new Array(araayName.length).fill(false)
    )

    const howEinner = useMemo(() => faintedArry.filter(f => !f).length === 1, [faintedArry])
    if (howEinner) {
        const winName = araayName[faintedArry.findIndex(f => !f)]
        return <div>{winName} winnnnnnn</div>
    }


    return (
        <>
            {araayName.map((pokemonName, i) => {
                return (
                    <Pokemon name={pokemonName} healthParam={10} fatedName={() => {
                        setFatedName(pokemonName)
                        if (!faintedArry[i]) {
                            const temp = [...faintedArry];
                            temp[i] = true;
                            setFaintedArry(temp)
                            // setFaintedArry(faintedArry.with(i, true))

                        }

                        console.log(faintedArry);

                    }
                    } />
                )
            })}

            {/* {fatedName && <><div>{fatedName} faied!!!!!!</div>
                {araayName?.map((p: any, index: number) => {
                    if (faintedArry[index] == false)
                        return <div key={index}>{p} win!!!!!</div>

                })}
            </>} */}
        </>
    )
}
