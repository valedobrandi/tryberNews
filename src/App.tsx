import { useContext } from 'react';
import './App.css'
import BlogCard from './components/BlogCard';
import StickyNavbar from './components/StickyNavbar';
import { NewsContext } from './Context/NewsContext';



function App() {

  const { dataNews, error, loading } = useContext(NewsContext)

  if (error) return <p>{error.message}</p>

  return (
    <>
      <StickyNavbar />
      <div className='mt-4'>
        {loading && <p>Loading...</p>}
        {(dataNews && !loading) && (
          dataNews.map((data) => (
            <BlogCard key={data.id} data={data} />)
          ))}
      </div>
    </>
  )
}

export default App
