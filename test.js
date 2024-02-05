


function getDate() {
	const date = new Date();
  	const day = date.getDay();
  	const month = date.getMonth();
  	const year = date.getFullYear();
	try {
		if (day < 10 || month < 10) {
			const fullYear = `0${day}/0${month}/${year}`;
			return fullYear;
		} else if (day < 10) {
			const fullYear = `0${day}/${month}/${year}`;
			return fullYear;
		} else if (month > 9) {
			const fullYear = `${day}/0${month}/${year}`;
			return fullYear;
		}
	} catch (e) {
		return e;
	}
	
}

console.log(getDate())

