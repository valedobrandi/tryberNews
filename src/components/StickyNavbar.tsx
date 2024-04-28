import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import SearchBar from "./SearchBar";
import newsPaper from "../assets/newsPaper.png";

type StickyNavbarProps = {
  searchRef: React.MutableRefObject<string | null>;
  setBtnTag: React.Dispatch<React.SetStateAction<boolean>>
}


export default function StickyNavbar({searchRef, setBtnTag }:StickyNavbarProps) {


  return (
    <div className=" max-h-[700px] w-full overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full
       rounded-none p-0">
        <div className="flex items-center justify-evenly text-white bg-black mb-1">
          <Typography
            as="a"
            href="#"
            className="p-1.5 font-medium flex items-center lg:text-7xl gap-3 text-3xl"
          >
            <img src={newsPaper} alt="News Paper" className="w-28 h-28 mr-2" />
            TryberNews
          </Typography>
        </div>
        <SearchBar searchRef={searchRef} setBtnTag={setBtnTag}/>
      </Navbar>
    </div>
  );
}