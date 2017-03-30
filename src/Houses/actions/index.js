export const selectHouses = (houses) => {
	console.log(`You clicked a user: ${houses.house}`);
	return{
		type: "HOUSE_SELECTED",
		payload: houses
	}
}