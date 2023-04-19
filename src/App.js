import React, {useState} from "react";
import Hotels from "./Hotels";
import Filters from "./Filters";

const App = () => {
	const [selectedFilters, setSelectedFilters] = useState([]);

	const toggleFilter = (clickedFilterKey) => {
		let newFilters;
		// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes to see how the .includes array method works
		const alreadySelected = selectedFilters.includes(clickedFilterKey);
		if (alreadySelected) {
			// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter to see how the .filter array method works
			newFilters = selectedFilters.filter(
				(selectedFilter) => selectedFilter !== clickedFilterKey
			);
		} else {
			// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat to see how the .concat array method works
			newFilters = selectedFilters.concat(clickedFilterKey);
		}
		setSelectedFilters(newFilters);
	};
	return (
		<div className="App">
			<Filters selectedFilters={selectedFilters} toggleFilter={toggleFilter} />
			<Hotels selectedFilters={selectedFilters} />
		</div>
	);
};

export default App;
