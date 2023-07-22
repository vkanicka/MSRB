import Card from './Card';
import data from './data'
const Awareness = () => {
    return (
        <div className='h-full py-2'>
            <h1 className='mb-4'>Awareness</h1>
            <div key='container' className='flex flex-col space-between h-full gap-6'>
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