import { useContext } from 'react';
import './App.css'
import BlogCard from './components/BlogCard';
import StickyNavbar from './components/StickyNavbar';
import { newsHandling } from './utils/newsHandling';
import { NewsContext } from './Context/NewsContext';



function App() {

const {data, error, loading} = useContext(NewsContext)
  const isNews = data && "items" in data




 
  if (error) return <p>{error.message}</p>

  return (
    <>
      <StickyNavbar />
      <div className='mt-4'>
        {loading && <p>Loading...</p> }
        {(isNews && !loading) && newsHandling(data).map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
    </>
  )
}

export default App
