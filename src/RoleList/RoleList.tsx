import React, { useState } from "react"
import { getWeek } from "date-fns"
import seedrandom from 'seedrandom';
import { VBox, HBox } from "../LayoutStyles";


const people = [
    'Truls',
    'Erik',
    'Marius',
    'Christer',
    'Rune',
    'Tuva',
    'Amalie',
    'William',
]
const roles = [
    'Leder',
    'Sekretær',
    'Ordstyrer',
    '',
    '',
    '',
    '',
    '',
]

function shuffle(array: String[], seed: number) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    const rand = seedrandom(seed.toString())

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(rand.quick() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const RoleList = () => {

    const [weekNr, setWeekNr] = useState(getWeek(new Date()))

    const newOrder = shuffle(Object.assign([], roles), weekNr + 1)

    return (
        <>
            <HBox>
                Uke {weekNr} 
                <VBox>
                    <button onClick={() => setWeekNr(weekNr + 1)}>
                    ▲
            </button>
                    <button onClick={() => setWeekNr(weekNr - 1)}>
                    ▼
            </button>
                </VBox>
            </HBox>
            < table cellSpacing='20px' style={{ textAlign: 'left' }} >
                <tbody>
                    {people.map((person, index) => (
                        <tr>
                            <td>
                                {person}
                            </td>
                            <td>
                                {newOrder[index]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </>
    )
}

export default RoleList