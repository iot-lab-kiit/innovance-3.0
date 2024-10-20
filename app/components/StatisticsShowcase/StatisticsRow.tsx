interface StatisticsRowProps {
    count1: string;
    title1: string;
    count2: string;
    title2: string;
}

const StatisticsRow: React.FC<StatisticsRowProps> = ({ count1, title1, count2, title2 }) => {
    return (
        <div className='h-1/3 w-full border-t-2 border-t-[#3B82F6] pr-4 py-1 flex justify-between items-center'>
            <div className='flex flex-col justify-center w-1/2'>
                <h1 className='text-[40px] md:text-[45px] font-[600]'>{count1}</h1>
                <p className='text-md truncate'>{title1}</p>
            </div>
            <div className='flex flex-col justify-center w-1/2'>
                <h1 className='text-[40px] md:text-[45px] font-[600]'>{count2}</h1>
                <p className='text-md truncate'>{title2}</p>
            </div>
        </div>
    )
}

export default StatisticsRow;
