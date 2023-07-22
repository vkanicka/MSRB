import Card from './Card';
import data from './data'
const Awareness = () => {
    return (
        <div>
            <h1>Awareness</h1>
            <div key='container' className='flex flex-col justify-between'>
                {data.map((item: {}, index: number) => {
                    return (
                        <div key={`${index}-awareness-card`}>

                            <Card item={item} index={index} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Awareness;