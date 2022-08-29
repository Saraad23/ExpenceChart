import './Chart.css'
import Chartbar from './ChartBar'
const Chart = (props) =>
{
    const dataPointValues =props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMax=Math.max(...dataPointValues)
    
return  (
    <div className='chart'>
        {props.dataPoints.map(datapoints => 
        <Chartbar
         key = {datapoints.label}
         value={datapoints.value} 
         maxValue={totalMax}
         label={datapoints.label}/>)
        }

    </div>
)

}

export default Chart;