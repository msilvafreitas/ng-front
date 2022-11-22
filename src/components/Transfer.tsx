import { Transfer } from "../types/Transfer"

export function Transfer(props: Transfer) {
    const { user, type, date, value } = props
    return (
        <div className="flex gap-4">
            <div className="flex-1">{type}</div>
            <div className="flex-1">{user}</div>
            <div className="flex-1">{value}</div>
            <div className="flex-1">{date}</div>
        </div>
    )
}