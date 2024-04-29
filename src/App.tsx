import { useContext, useRef, useState } from 'react';
import './App.css';
import { Badge, Button } from '@material-tailwind/react';
import { IoMdCloseCircle } from 'react-icons/io';
import StickyNavbar from './components/StickyNavbar';
import { NewsContext } from './Context/NewsContext';
import { TabsWithIcon } from './components/TabsWithIcon';
import SetDatePicker from './components/SetDatePicker';
import { ControlledSelect } from './components/ControlledSelect';

function App() {
  const { fromDate, toDate, handleNewsUpdate, isSearch } = useContext(NewsContext);
  const [btnTag, setBtnTag] = useState(false);
  const searchRef = useRef<string | null>(null);

  const handleRemoveSearch = () => {
    setBtnTag(false);
    searchRef.current = null;
    handleNewsUpdate('', 'busca');
  };

  const isFromDate = fromDate !== '';
  const isToDate = toDate !== '';
  return (
    <>
      <StickyNavbar searchRef={ searchRef } setBtnTag={ setBtnTag } />
      <div className="flex mt-6 gap-4 justify-center flex-wrap items-center">
        <SetDatePicker />
        <ControlledSelect />
      </div>
      <div className="max-w-[700px] mx-auto h-20 pl-5 mt-3  lg:flex items-center">
        <div className="flex">
          {(isSearch !== '' && btnTag) && (
            <Badge
              content={
                <IoMdCloseCircle className="h-4 w-4 text-white" strokeWidth={ 2.5 } />
}
              className="bg-gradient-to-tr from-red-500 to-red-600 border-2
          border-white shadow-lg shadow-black/20 m-2"
            >
              <Button
                size="sm"
                className="text-sm m-2"
                onClick={ handleRemoveSearch }
              >
                {searchRef.current}
              </Button>
            </Badge>
          )}
        </div>
        <div>
          {isFromDate && (
            <Badge
              content={
                <IoMdCloseCircle className="h-4 w-4 text-white" strokeWidth={ 2.5 } />
}
              className="bg-gradient-to-tr from-red-500 to-red-600 border-2
                border-white shadow-lg shadow-black/20 m-2"
            >
              <Button
                size="sm"
                onClick={ () => handleNewsUpdate('', 'de') }
                className="rounded-lg flex justify-center text-sm m-2"
                color="blue"
              >
                {fromDate}
              </Button>
            </Badge>)}
          {isToDate && (
            <Badge
              content={
                <IoMdCloseCircle className="h-4 w-4 text-white" strokeWidth={ 2.5 } />
}
              className="bg-gradient-to-tr from-red-500 to-red-600 border-2
                border-white shadow-lg shadow-black/20 m-2"
            >
              <Button
                size="sm"
                onClick={ () => handleNewsUpdate('', 'ate') }
                className="rounded-lg flex justify-center text-sm m-2"
                color="blue"
              >
                {toDate}
              </Button>
            </Badge>)}
        </div>
      </div>
      <div className="mt-6">
        <TabsWithIcon />
      </div>
    </>
  );
}

export default App;
