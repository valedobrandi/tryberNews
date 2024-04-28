import { useContext } from 'react';
import { Select } from 'flowbite-react';
import { ImListNumbered } from 'react-icons/im';
import { NewsContext } from '../Context/NewsContext';

export function ControlledSelect() {
  const { handleNewsUpdate, isQtd } = useContext(NewsContext);

  return (
    <div className=" flex items-center mr-2">
      <ImListNumbered className="w-7 h-7 mr-2" />
      <div>
        <Select
          value={ isQtd }
          onChange={ ({ target }) => handleNewsUpdate(target.value, 'qtd') }
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
        </Select>
      </div>
    </div>
  );
}
