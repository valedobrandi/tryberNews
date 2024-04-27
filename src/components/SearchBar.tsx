import { Button, Input } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { NewsContext } from "../Context/NewsContext";

type SearchBarProps = {
  searchRef: React.MutableRefObject<string | null>;
  setBtnTag: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchBar({searchRef, setBtnTag}: SearchBarProps) {
  const { handleDate } = useContext(NewsContext)
  const [search, setSearch] = useState("")

  
  const handleSearch = () => {
    handleDate(search, "busca")
    searchRef.current = `${search}`;
    setSearch("");
    setBtnTag(true)
  };



  return (
    <div className="items-center gap-x-2 flex justify-center">
      <div className="relative flex items-center gap-2 lg:w-[500px] w-[200px] ">
        <Input
          className="indent-10 min-w-9"
          size="lg"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          variant="standard" 
          style={{fontSize: "1.5rem"}}
          crossOrigin={undefined} />
      </div>
      <Button
        onClick={handleSearch}
        size="sm" 
        className="rounded-lg">
        Search
      </Button>
    </div>
  )
} 