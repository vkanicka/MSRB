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
        <button onClick={() => handleClick(Object.keys(item)[0])} className={`${isFlipped ? 'bg-purple-500' : 'bg-purple-400'} w-full border-solid border-blue-300 border-2 rounded-lg p-2 h-full`} key={`${index}-awareness-card`}>
            {!isFlipped && (
                Object.keys(item)
            )}
            {isFlipped && (
                Object.values(item)
            )}

        </button>
    )
}
export default Card;