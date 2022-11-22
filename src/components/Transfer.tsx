import { Transfer } from "../types/Transfer"

export function Transfer(props: Transfer) {
    const { from, to, date, value } = props
    return (
        <div className="flex gap-4 border border-ngpurple px-3 py-2 rounded">         
            <div className="flex-1">{from}</div>
            <div className="flex-1">to</div>
            <div className="flex-1">{to}</div>
            <div className="flex-1">R$ {value.toFixed(2)}</div>
            <div className="flex-1">{date}</div>
        </div>
    )
}