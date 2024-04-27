import { useContext } from "react";
import { NewsContext } from "../Context/NewsContext";
import { Datepicker } from "flowbite-react";



export default function ToDatePicker(props: {dateRange:string, dateRangeTitle:string}) {
    const {dateRange, dateRangeTitle} = props
const { handleDate } = useContext(NewsContext)

    return (
    <Datepicker 
    title={dateRangeTitle}
    autoHide={true}
    onSelectedDateChanged={(date) => handleDate(date.toISOString(), dateRange)} 
    className="w-40" />
)
}