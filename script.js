
function indexOfIgnoreCase(s1, s2) {
 const ns1=s1.toLowerCase()
 const ns2=s2.toLowerCase()
	for ( let i=0;i<s1.length;i++){
		if (ns2.includes(ns1[i])){
			return i;}
	}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
