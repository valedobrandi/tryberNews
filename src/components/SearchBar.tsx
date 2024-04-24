import { Button, Input } from "@material-tailwind/react";
import { useContext, useRef, useState } from "react";
import { NewsContext } from "../Context/NewsContext";

export default function SearchBar() {
  const { onSetFetcher } = useContext(NewsContext)
  const [search, setSearch] = useState("")
  const searchRef = useRef<string | null>(null)

  const handleSearch = () => (onSetFetcher(search, 'search'), searchRef.current = `${search}`, setSearch(""));
  const handleRemoveSearch = () => (searchRef.current = null, onSetFetcher(search, 'all'));
  return (
    <div className="items-center gap-x-2 flex justify-center">
      <div className="relative flex items-center gap-2 w-[600px]">
        <Input
        size={"lg"}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          className="flex-1 !border-t-blue-gray-300 pl-9 indent-24 font-extrabold
           placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
          type="search"
          placeholder="Search"
          containerProps={{
            className: "min-w-[200px]",
          }}
          labelProps={{
            className: "before:content-none after:content-none",
          }} crossOrigin={undefined} />
        <div className="!absolute left-1 text-black">
          {searchRef.current && (
          <Button
           className="rounded-full border-gray-500 text-gray-500 "
           variant="outlined"
           size={"sm"}
           onClick={handleRemoveSearch}>
          {searchRef.current} <span className="text-red-900">x</span> 
          </Button>
        )}
        </div>
      </div>
      <Button
        onClick={handleSearch}
        size="md" className="rounded-lg">
        Search
      </Button>
    </div>
  )
}