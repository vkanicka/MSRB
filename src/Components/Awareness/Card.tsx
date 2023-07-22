import { useState } from "react"

type Props = {
    item: {}
    index: number
}

const Card = ({ item, index }: Props) => {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = (index: string) => {
        setIsFlipped(!isFlipped)
    }
    
    
    return (
        <button onClick={() => handleClick(Object.keys(item)[0])} className="w-full m-2 border-solid border-blue-300 border-2 rounded-lg p-2" key={`${index}-awareness-card`}>
            {!isFlipped && (
                <h3>{Object.keys(item)}</h3>
            )}
            {isFlipped && (
                <p>{ Object.values(item)}</p>
            )}

        </button>
    )
}
export default Card;