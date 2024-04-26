import { useContext } from 'react';
import './App.css'
import StickyNavbar from './components/StickyNavbar';
import { NewsContext } from './Context/NewsContext';
import { TabsWithIcon } from './components/TabsWithIcon';
import FromDatePicker from './components/FromDatePicker';
import ToDatePicker from './components/ToDatePicker';
import { Button } from "@material-tailwind/react";

function App() {

  const { error, onSetFetcher } = useContext(NewsContext)


  if (error) return <p>{error.message}</p>

  return (
    <>
      <StickyNavbar />
      <div className='flex mt-6 gap-4 justify-center flex-wrap items-center'>
        <FromDatePicker dateRange="de" dateRangeTitle='Start Date' />
        <ToDatePicker dateRange="ate" dateRangeTitle='Finish Date' />
        <Button
        onClick={onSetFetcher}
        size="md"
        className="rounded-lg"
        color='green'>
        By date
      </Button>
      </div>
      <div className='mt-8'>
        <TabsWithIcon />
      </div>
    </>
  )
}

export default App
