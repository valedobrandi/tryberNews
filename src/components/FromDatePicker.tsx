import { useContext } from "react";
import { NewsContext } from "../Context/NewsContext";
import { Datepicker } from "flowbite-react";



export default function FromDatePicker(props: {dateRange:string, dateRangeTitle:string}) {
    const {dateRange, dateRangeTitle} = props
const { handleDate } = useContext(NewsContext)

    return (
    <Datepicker
    showClearButton={false}
    title={dateRangeTitle}
    onSelectedDateChanged={(date) => handleDate(date.toISOString(), dateRange)} 
    color={"white"}
    className="w-40" />
)
}