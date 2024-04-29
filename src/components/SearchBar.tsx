import { Button, Input } from '@material-tailwind/react';
import { useContext, useState } from 'react';
import { NewsContext } from '../Context/NewsContext';

type SearchBarProps = {
  searchRef: React.MutableRefObject<string | null>;
  setBtnTag: React.Dispatch<React.SetStateAction<boolean>>
};

export default function SearchBar({ searchRef, setBtnTag }: SearchBarProps) {
  const { handleNewsUpdate } = useContext(NewsContext);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    handleNewsUpdate(search, 'busca');
    searchRef.current = `${search}`;
    setSearch('');
    setBtnTag(true);
  };

  return (
    <div className="items-center gap-x-2 flex justify-center mt-4">
      <div className="relative flex items-center gap-2 lg:w-[500px] w-[200px] ">
        <Input
          placeholder="search"
          className="indent-10 min-w-9"
          size="lg"
          value={ search }
          onChange={ ({ target }) => setSearch(target.value) }
          style={ { fontSize: '1.5rem' } }
          crossOrigin={ undefined }
        />
      </div>
      <button
        onClick={ handleSearch }
        className="text-white bg-gray-800 hover:bg-gray-900
        focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium
         rounded-lg px-5 py-2 text-xl dark:bg-gray-800 dark:hover:bg-gray-700
          dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Search
      </button>
    </div>
  );
}
