
function indexOfIgnoreCase(s1, s2) {
 
	let flag=false;
	for ( let i=0;i<s1.length;i++){
		if (s2[0].includes(s1[i])){
			flag=true;
			return i;
		break;}
	}
	if(!flag){
		return -1;
	}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

