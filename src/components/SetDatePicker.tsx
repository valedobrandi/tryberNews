import { useContext } from "react";
import { NewsContext } from "../Context/NewsContext";
import { Datepicker } from "flowbite-react";



export default function SetDatePicker() {
  const { handleDate, fromDate, toDate } = useContext(NewsContext)
  
  const selectDate = fromDate === '' ? 'de' : 'ate'
  const isAllDateSelect = fromDate !== '' && toDate !== ''
  const splitDate = fromDate.split('-')

  return (
    <Datepicker
      disabled={isAllDateSelect}
      title={'Choose a Date'}
      autoHide={true}
      onSelectedDateChanged={(date) => handleDate(date.toISOString(), selectDate)}
      style={{textAlign: "center"}}
      maxDate={new Date()}
      minDate={
        fromDate !== ''
          ? new Date(+splitDate[2], +splitDate[0], +splitDate[1])
          : new Date(2017, 1, 1)
      }
    />
  )
}