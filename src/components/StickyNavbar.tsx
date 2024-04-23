import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import SearchBar from "./SearchBar";
 
export default function StickyNavbar() {

  
  return (
    <div className="-mb-6 max-h-[768px] w-full overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full
       rounded-none px-6 py-4 lg:px-10 lg:py-6">
        <div className="flex items-center justify-evenly text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer p-1.5 font-medium"
          >
            TryberNews
          </Typography>
        </div>
          <SearchBar />
      </Navbar>
    </div>
  );
}