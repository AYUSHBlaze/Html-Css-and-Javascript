var names2=["Sonal", "Sinister", "Blaze"];
var myobj={
    name:"Sonal",
    course: "HTML, CSS and JS",
    platform:"Coursera"
};
for(var prop in myobj){
    console.log(prop+": "+myobj[prop]);
}

for (var name in names2){
    console.log("Hello "+names2[name]);
}
