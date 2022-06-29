import StatsItem from "./StatsItem";
import '../../css/stats.css'

function Stats() {

    const statsData = [
        {
            id:1,
            amount:'2K+',
            type:'companies'
        },
        {
            id:2,
            amount:8,
            type:'languages'
        },
        {
            id:3,
            amount:'1.2M',
            type:'leads'
        },
    ]

    return ( 
        <div className="stats">
            {statsData.map(statsDataItem =>
            <StatsItem key={statsDataItem.id} number={statsDataItem.amount} type={statsDataItem.type}></StatsItem>
            )}
        </div>
     );
}

export default Stats;