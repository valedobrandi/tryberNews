import { Button, Input } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { NewsContext } from "../Context/NewsContext";

type SearchBarProps = {
  searchRef: React.MutableRefObject<string | null>;
  setBtnTag: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchBar({searchRef, setBtnTag}: SearchBarProps) {
  const { handleNewsUpdate } = useContext(NewsContext)
  const [search, setSearch] = useState("")

  
  const handleSearch = () => {
    handleNewsUpdate(search, "busca")
    searchRef.current = `${search}`;
    setSearch("");
    setBtnTag(true)
  };



  return (
    <div className="items-center gap-x-2 flex justify-center mt-4">
      <div className="relative flex items-center gap-2 lg:w-[500px] w-[200px] ">
        <Input
          className="indent-10 min-w-9"
          size="lg"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          style={{fontSize: "1.5rem"}}
          crossOrigin={undefined} />
      </div>
      <Button
        onClick={handleSearch}
        size="lg" 
        className="rounded-lg text-sm">
        Search
      </Button>
    </div>
  )
} 