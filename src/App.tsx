import { useContext, useRef, useState } from 'react';
import './App.css'
import StickyNavbar from './components/StickyNavbar';
import { NewsContext } from './Context/NewsContext';
import { TabsWithIcon } from './components/TabsWithIcon';
import FromDatePicker from './components/FromDatePicker';
import { Badge, Button } from "@material-tailwind/react";
import { IoMdCloseCircle } from "react-icons/io";

function App() {

  const { error, onSetFetcher, fromDate, toDate, handleDate } = useContext(NewsContext)
  const [btnTag, setBtnTag] = useState(false)

  const searchRef = useRef<string | null>(null)

  const handleRemoveSearch = () => {
    setBtnTag(false)
    searchRef.current = null;
    handleDate("", "busca")
    onSetFetcher()
  };

  if (error) return <p>{error.message}</p>
  const isSearchByDate = fromDate !== '' || toDate !== ''
  return (
    <>
      <StickyNavbar searchRef={searchRef} setBtnTag={setBtnTag} />
      <div className='flex mt-6 gap-4 justify-center flex-wrap items-center'>
        <FromDatePicker dateRange="de" dateRangeTitle='From Date' />
        <Button
          onClick={onSetFetcher}
          size="md"
          className="rounded-lg"
          color='green'>
          By date
        </Button>
      </div>
      <div className="max-w-[700px] mx-auto h-14">
        {btnTag && (
          <Badge
            content={<IoMdCloseCircle className="h-4 w-4 text-white" strokeWidth={2.5} />}
            className="bg-gradient-to-tr from-red-500 to-red-600 border-2
          border-white shadow-lg shadow-black/20"
          >
            <Button
              onClick={handleRemoveSearch}>
              {searchRef.current}
            </Button>
          </Badge>)
        }
        {isSearchByDate && (
          <Badge
            content={<IoMdCloseCircle className="h-4 w-4 text-white" strokeWidth={2.5} />}
            className="bg-gradient-to-tr from-red-500 to-red-600 border-2
                border-white shadow-lg shadow-black/20"
          >
            <Button
              onClick={onSetFetcher}
              className="rounded-lg flex justify-center"
              color='blue'>
              {fromDate}{toDate}
            </Button>
          </Badge>)}
      </div>
      <div className=''>
        <TabsWithIcon />
      </div>
    </>
  )
}

export default App
