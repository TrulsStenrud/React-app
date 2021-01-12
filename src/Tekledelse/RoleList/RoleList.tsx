
import { differenceInBusinessDays } from "date-fns"
import { VBox, HBox } from "../../LayoutStyles";
import { useState } from "react";
import seedrandom from "seedrandom";
import React from "react";


const people = [
    'Johanne',
    'Sara',
    'Kevin',
    'Truls',
    'Jostein',
    'Eirin'
]

const roles = ['Ordstyrer']

function getAssignedRoles() {
    const seed = "AwesomeSeed3"
    const rand = seedrandom(seed.toString())

    const assignedRoles: string[][] = []
    const rest: string[][] = []

    roles.forEach(() => {
        rest.push(Object.assign([], people))
    })

    while (assignedRoles.length !== people.length) {
        const taken: string[] = []
        const current_roles: string[] = []

        roles.forEach((role, index) => {
            const t_rest = rest[index].filter(x => !taken.includes(x))
            const selected = t_rest[Math.floor(rand.quick() * t_rest.length)]
            current_roles.push(selected)
            taken.push(selected)
            rest[index] = rest[index].filter(x => x !== selected)
        })

        assignedRoles.push(current_roles)
    }

    return assignedRoles
}

function getRole(person: string, assignedRoles: string[][], baseNr: number) {
    const nr = baseNr % people.length
    const curr_roles = assignedRoles[nr]

    for (var i = 0; i < curr_roles.length; i++) {
        if (curr_roles[i] === person) {
            return roles[i]
        }
    }

    return ''
}

// I want to keep it
/* function addDays(date: Date, days: number) {
    var newDate = new Date(date.valueOf());
    newDate.setDate(newDate.getDate() + days);
    return newDate;
} */

const RoleList = () => {

    var startDate = new Date("01/8/2021")
    const initDay = differenceInBusinessDays(new Date(), startDate)

    const assignedRoles = getAssignedRoles()
    const [currDay, setDay] = useState(initDay)

    return (
        <>
            <HBox>
                Day {currDay}
                <VBox>
                    <button onClick={() => setDay(currDay + (currDay < 15 ? 1 : 0))}>
                        ▲
            </button>
                    <button onClick={() => setDay(currDay + (currDay > 1 ? -1 : 0))}>
                        ▼
            </button>
                </VBox>
            </HBox>
            < table cellSpacing='20px' style={{ textAlign: 'left' }} >
                <tbody>
                    {people.map((person, index) => (
                        <tr key={person}>
                            <td>
                                {person}
                            </td>
                            <td>
                                {getRole(person, assignedRoles, currDay)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </>
    )
}

export default RoleList
