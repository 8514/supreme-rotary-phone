var names_of_people=[];
function submit(){   
var guest_name=document.getElementById("tv").value;
names_of_people.push(guest_name); 
var length_of_array=names_of_people.length;
console.log(length_of_array);
document.getElementById("display_name").innerHTML=names_of_people;
}
function Sorting(){
names_of_people.sort();
var yug=names_of_people.join("<br>");
document.getElementById("wall").innerHTML=yug;
}
function show(){
var yug= names_of_people.join("<br>");
document.getElementById("food").innerHTML=yug;
document.getElementById("laptop").style.display="inline-block";
}
function searching(){
var sis=document.getElementById("teddy").value;
var found=0;
var j;
for(j=0;j<names_of_people.length;j++){
if(sis==names_of_people[j]){
found=found+1;    
}    
}
document.getElementById("blanket").innerHTML=" name found "+found+" times ";
}
    

