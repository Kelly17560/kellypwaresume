//function Loadjson(file,callback){
//	var xhr=new XMLHttpRequest();
//	xhr.overrideMimeType("application/json");
//	xhr.open("GET",file,true);
//	xhr.onreadystatechange=function(){
//		if(xhr.readyState === 4 && xhr.status == "200"){
//			callback(xhr.responseText);
//		}
//		};
//			xhr.send(null);
//}
//Loadjson("data.json",function(text){
//	var data = JSON.parse(text);
//	console.log(data);
//	basics(data.details);
//	careerInfo(data.career);
//	eduInfo(data.Edu);
//	techInfo(data.skills);
//	achievementInfo(data.achievements);
//});
function Loadjson(file){

	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}

		})
	})
}
var newfile=Loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerInfo(data.career);
	eduInfo(data.Edu);
	techInfo(data.skills);
	achievementInfo(data.achievements);
})

var left1 = document.querySelector(".left");
function basics(param){
	var img = document.createElement("img");
	img.src = param.image;
	left1.appendChild(img);
	 
	 var name1=document.createElement("h3");
	 name1.textContent=param.Name;
	 left1.appendChild(name1);
	 
	 var phno=document.createElement("h4");
	 phno.textContent=param.Phoneno;
	 left1.appendChild(phno);
	 
	 var email=document.createElement("a");
	 email.href="mailto:angelwinx135@gmail.com";
	 email.textContent=param.email;
	 left1.appendChild(email);
	 
	 var addr=document.createElement("h5");
	 addr.textContent="Address";
	 left1.appendChild(addr);
	 
	 var header=document.createElement("hr");
	 left1.appendChild(header);
	 
	 var add=document.createElement("p");
	 add.textContent=param.Address;
	 left1.appendChild(add);
}
var right1=document.querySelector(".right");
function careerInfo(param){
	
	var obj1=document.createElement("h5");
	obj1.textContent="Career Objectives";
	right1.appendChild(obj1);

	var head1=document.createElement("hr");
	right1.appendChild(head1);

	var objective=document.createElement("p");
	objective.textContent=param.Careerobj;
	right1.appendChild(objective);
}
function eduInfo(param){
	
	var obj2=document.createElement("h5");
	obj2.textContent="Educational Qualifications";
	right1.appendChild(obj2);

	var head2=document.createElement("hr");
	right1.appendChild(head2);

	var table1=document.createElement("table");
	table1.border="2";
	right1.appendChild(table1);

	tabledata="";
	for(i=0;i<param.length;i++){
		tabledata+="<tr><td>"+param[i].qualification+"</td><td>"+param[i].institute+"</td><td>"+param[i].yearofpassing+"</td><td>"+param[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}
function techInfo(param){
	
 	var obj3=document.createElement("h5");
 	obj3.textContent="Technical Qualifications";
 	right1.appendChild(obj3);

 	var head3=document.createElement("hr");
 	right1.appendChild(head3);

 	for(i=0;i<param.length;i++){
 		var skill=document.createElement("h6");
 		skill.textContent=param[i].title;
 		right1.appendChild(skill);

 		var ul1=document.createElement("ul");
 		var li1=document.createElement("li");
 		li1.textContent=param[i].info;
 		ul1.appendChild(li1);
 		right1.appendChild(ul1);

 	}
}
function achievementInfo(param){

 	var obj4=document.createElement("h5");
 	obj4.textContent="Achievements";
 	right1.appendChild(obj4);

 	var head4=document.createElement("hr");
 	right1.appendChild(head4);

 	for(i=0;i<param.length;i++){
 		var ul2=document.createElement("ul");
 		var li2=document.createElement("li");
 		li2.textContent=param[i];
 		ul2.appendChild(li2);
 		right1.appendChild(ul2);
 	}
 }
function openpage(){
	window.open("resume.html","_self",true);
}




