export default function (state = null, action) {
	switch (action.type) {
		case "HOUSE_SELECTED":
			return action.payload;
			break;
		default:
			return state;
			break;
	}
}