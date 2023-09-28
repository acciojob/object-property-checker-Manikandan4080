const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	for(let color in sampleObject){
		if(key == sampleObject[color] || key == color){
			return true
		}
	}
	return false

}

// Do not change the code below
const key = prompt("Enter Key.");
window.alert(hasKey(key));
