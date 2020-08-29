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

const roles = ['Leder', 'Ordstyrer', 'Sekretær']

function getAssignedRoles() {
    const seed = "AwesomeSeed"
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

function getRole(person: string, assignedRoles: string[][], weekNr: number) {
    const nr = weekNr % people.length
    const curr_roles = assignedRoles[nr]

    for (var i = 0; i < curr_roles.length; i++) {
        if (curr_roles[i] === person) {
            return roles[i]
        }
    }

    return ''
}

function addDays(date: Date, days: number) {
    var newDate = new Date(date.valueOf());
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

const RoleList = () => {

    const assignedRoles = getAssignedRoles()
    const [currDate, setDate] = useState(new Date())

    const weekNr = getWeek(currDate)

    return (
        <>
            <HBox>
                Uke {weekNr}
                <VBox>
                    <button onClick={() => setDate(addDays(currDate, 7))}>
                        ▲
            </button>
                    <button onClick={() => setDate(addDays(currDate, -7))}>
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
                                {getRole(person, assignedRoles, weekNr)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </>
    )
}

export default RoleList