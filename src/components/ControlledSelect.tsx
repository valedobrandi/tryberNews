import { useContext } from "react";
import { Select } from "flowbite-react";
import { NewsContext } from "../Context/NewsContext";
import { ImListNumbered } from "react-icons/im";

export function ControlledSelect() {

	const { handleNewsUpdate, isQtd } = useContext(NewsContext)

	return (
		<div className=" max-w-[700px] mx-auto p-4 flex items-center">
			<ImListNumbered className="w-7 h-7 mr-2" />
			<div className="w-20 ">
				<Select
					value={isQtd}
					onChange={({ target }) => handleNewsUpdate(target.value, "qtd")}
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