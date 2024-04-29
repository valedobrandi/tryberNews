import { useContext } from 'react';
import { Datepicker } from 'flowbite-react';
import { NewsContext } from '../Context/NewsContext';

export default function SetDatePicker() {
  const { handleNewsUpdate, fromDate, toDate } = useContext(NewsContext);

  const selectDate = fromDate === '' ? 'de' : 'ate';
  const isAllDateSelect = fromDate !== '' && toDate !== '';
  const splitDate = fromDate.split('-');

  return (
    <Datepicker
      placeholder="Select Date"
      disabled={ isAllDateSelect }
      showClearButton={ false }
      title="Choose a Date"
      autoHide
      onSelectedDateChanged={ (date) => handleNewsUpdate(date.toISOString(), selectDate) }
      style={ { textAlign: 'center' } }
      maxDate={ new Date() }
      minDate={
        fromDate !== ''
          ? new Date(+splitDate[2], +splitDate[0], +splitDate[1])
          : new Date(2017, 1, 1)
      }
    />
  );
}
