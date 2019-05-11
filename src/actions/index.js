export const inputChangeAction = (event) => {
	return {
		type: 'INPUT_CHANGE',
		value: event.target.value
	}
}; 
