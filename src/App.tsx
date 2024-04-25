import { useContext } from 'react';
import './App.css'
import StickyNavbar from './components/StickyNavbar';
import { NewsContext } from './Context/NewsContext';
import { TabsWithIcon } from './components/TabsWithIcon';
import DateRangePicker from './components/DateRangePicker';

function App() {

  const { error } = useContext(NewsContext)


  if (error) return <p>{error.message}</p>

  return (
    <>
    <DateRangePicker />
      <StickyNavbar />
      <div className='mt-8'>
        <TabsWithIcon />
      </div>
    </>
  )
}

export default App
