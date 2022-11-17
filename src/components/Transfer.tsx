import { Transfer } from "../types/Transfer"

export function Transfer(props: Transfer) {
    const { user, type, date, value } = props
    return (
        <div className="flex gap-4">
            <p>{type}</p>
            <p>{user}</p>
            <p>{value}</p>
            <p>{date}</p>
        </div>
    )
}