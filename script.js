//your code here!
const infiList=document.getElementById("infi-list");
let itemCount=1;
function addItems(count){
	for(let i=0;i<count;i++){
		const li=document.createElement("li");
		li.textContent=`Item ${itemCount++}`;
		infiList.appendChild(li);
	}
}
addItems(10);
infiList.addEventListener('scroll',()=>{
	if(infiList.scrollTop+infiList.clientHeight >= infiList.scrollHeight-5){
	addItems(2);	
	}
});