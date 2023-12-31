//your JS code here. If required.
const output = document.getElementById("output");
const initialText = document.createElement("tr");
initialText.setAttribute("id", "loading")
initialText.innerHTML = `<td colspan="2">Loading...</td>`;
output.appendChild(initialText);
const promises = [];
for(let i=0; i<3; i++){
	promises[i] = new Promise((res, rej)=>{
		setTimeout(res, (i+1)*1000, `Promise ${i+1}`);
	});
}

Promise.all(promises).then((values)=>{
	initialText.remove();
	for(let i=0; i<values.length; i++){
		const tr = document.createElement("tr");
		tr.innerHTML = `
			 <td>${values[i]}</td>
			 <td>${i+1}</td>
		 `;
		output.appendChild(tr);
	}
	const total = document.createElement("tr");
	total.innerHTML = `<td>Total</td>
					 <td>3.0</td>`;
	output.appendChild(total);
})