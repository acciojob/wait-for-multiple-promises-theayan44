//your JS code here. If required.
const output = document.getElementById("output");
const promises = [];
for(let i=0; i<3; i++){
	promises[i] = new Promise((res, rej)=>{
		setTimeout(res, (i+1)*1000, `Promise ${i+1}`);
	});
}

Promise.all(promises).then((values)=>{
	for(let i=0; i<values.length; i++){
		const tr = document.createElement("tr");
		tr.innerHtml = `
			 <td>${values[i]}</td>
			 <td>${i+1}</td>
		 `;
		output.appendChild(tr);
	}
})