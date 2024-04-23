import { useContext } from 'react';
import './App.css'
import BlogCard from './components/BlogCard';
import StickyNavbar from './components/StickyNavbar';
import { newsHandling } from './utils/newsHandling';
import { NewsContext } from './Context/NewsContext';



function App() {

const {data, error, loading} = useContext(NewsContext)
  const isNews = data && "items" in data




  if (loading) return <p>LOADING</p>
  if (error) return <p>ERROR</p>

  return (
    <>
      <StickyNavbar />
      <div className='mt-4'>
        {isNews && newsHandling(data).map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
    </>
  )
}

export default App
