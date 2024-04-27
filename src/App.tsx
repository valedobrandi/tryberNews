import { useContext, useRef, useState } from 'react';
import './App.css'
import StickyNavbar from './components/StickyNavbar';
import { NewsContext } from './Context/NewsContext';
import { TabsWithIcon } from './components/TabsWithIcon';
import { Badge, Button } from "@material-tailwind/react";
import { IoMdCloseCircle } from "react-icons/io";
import SetDatePicker from './components/SetDatePicker';

function App() {
  const { error, fromDate, toDate, handleDate, isSearch} = useContext(NewsContext)
  const [btnTag, setBtnTag] = useState(false)
  const searchRef = useRef<string | null>(null)


  const handleRemoveSearch = () => {
    setBtnTag(false)
    searchRef.current = null;
    handleDate('', 'busca')
  };



  if (error) return <p>{error.message}</p>
  const isFromDate = fromDate !== '';
  const isToDate = toDate !== '';
  return (
    <>
      <StickyNavbar searchRef={searchRef} setBtnTag={setBtnTag} />
      <div className='flex mt-6 gap-4 justify-center flex-wrap items-center'>
        <SetDatePicker />
      </div>
      <div className="max-w-[700px] mx-auto pl-5 min-h-14 flex-wrap sm:max-h-auto flex items-center gap-5 mt-3">
        {(isSearch !== '' && btnTag) && (
          <Badge
            content={<IoMdCloseCircle className="h-4 w-4 text-white" strokeWidth={2.5} />}
            className="bg-gradient-to-tr from-red-500 to-red-600 border-2
          border-white shadow-lg shadow-black/20"
          >
            <Button
              size='sm'
              className=''
              onClick={handleRemoveSearch}>
              {searchRef.current}
            </Button>
          </Badge>
          )}
        {isFromDate && (
          <Badge
            content={<IoMdCloseCircle className="h-4 w-4 text-white" strokeWidth={2.5} />}
            className="bg-gradient-to-tr from-red-500 to-red-600 border-2
                border-white shadow-lg shadow-black/20"
          >
            <Button
            size='sm'
              onClick={() => handleDate('', 'de')}
              className="rounded-lg flex justify-center"
              color='blue'>
              {fromDate}
            </Button>
          </Badge>)}
        {isToDate && (
          <Badge
            content={<IoMdCloseCircle className="h-4 w-4 text-white" strokeWidth={2.5} />}
            className="bg-gradient-to-tr from-red-500 to-red-600 border-2
                border-white shadow-lg shadow-black/20"
          >
            <Button
            size='sm'
                onClick={() => handleDate('', 'ate')}
              className="rounded-lg flex justify-center"
              color='blue'>
              {toDate}
            </Button>
          </Badge>)}
      </div>
      <div className='mt-1'>
        <TabsWithIcon />
      </div>
    </>
  )
}

export default App
