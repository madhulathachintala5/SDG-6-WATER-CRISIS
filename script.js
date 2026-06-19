
function startWebsite(){

document.getElementById("sidebar").style.display="block";

document.getElementById("menuBtn").style.display="block";

document.getElementById("menuBtn").innerHTML="✖";

document.getElementById("home").style.display="none";

showTab("targets");

}

function toggleSidebar(){

let sidebar = document.getElementById("sidebar");

if(sidebar.style.display === "none"){

sidebar.style.display = "block";

document.getElementById("menuBtn").innerHTML =
"✖";

}
else{

sidebar.style.display = "none";

document.getElementById("menuBtn").innerHTML =
"☰ Contents";

}

}

function showTab(id){

document.getElementById("home").style.display="none";

let sections = document.querySelectorAll("section");

sections.forEach(function(section){

if(section.id !== id){
section.style.display="none";
}

});

document.getElementById(id).style.display="block";

window.scrollTo(0,0);

}

function goHome(){

document.getElementById("home").style.display="flex";

let sections = document.querySelectorAll("section");

sections.forEach(function(section){

if(section.id !== "home"){
section.style.display="none";
}

});

document.getElementById("sidebar").style.display="none";

window.scrollTo(0,0);

}

function takePledge(){
    document.getElementById("pledgeMessage").innerHTML =
    "✅ Thank You For Supporting SDG 6!";
}

let currentImage = 0;

let surveyImages = [
"survey1.jpeg",
"survey2.jpeg",
"survey3.jpeg",
"survey4.jpeg",
"survey5.jpeg",
"survey6.jpeg"
];

function showContent(){

let sections =
document.querySelectorAll(".hidden-section");

sections.forEach(function(sec){
    sec.style.display = "block";
});

document.getElementById("targets")
.scrollIntoView({behavior:"smooth"});

}

function openSurvey(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="📸 Survey Gallery";

showImage();
}

function showImage(){

document.getElementById("popupBody").innerHTML=`

<div style="text-align:center;">

<img src="${surveyImages[currentImage]}"
style="width:80%;max-height:500px;border-radius:15px;">

<br><br>

<button onclick="prevImage()">⬅ Previous</button>

<button onclick="nextImage()">Next ➡</button>

<br><br>

<div style="
background:#f4faff;
padding:20px;
border-radius:15px;
border:2px solid #00b4d8;
text-align:left;
">

<h3>📋 Survey Questions & Responses</h3>

<p><b>Q1:</b> Do you know the importance of saving water?</p>
<p><b>Response:</b> 85% answered Yes.</p>

<p><b>Q2:</b> Do you face water shortage problems?</p>
<p><b>Response:</b> 60% reported shortages.</p>

<p><b>Q3:</b> Do you practice rainwater harvesting?</p>
<p><b>Response:</b> Only a few households do.</p>

<p><b>Q4:</b> Will you support water conservation activities?</p>
<p><b>Response:</b> Almost everyone agreed.</p>

</div>

</div>

`;
}

function nextImage(){

currentImage++;

if(currentImage >= surveyImages.length){
currentImage = 0;
}

showImage();
}

function prevImage(){

currentImage--;

if(currentImage < 0){
currentImage = surveyImages.length - 1;
}

showImage();
}

function openGallery(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="🖼 Gallery";

document.getElementById("popupBody").innerHTML=`
<img src="harvesting.jpg" width="250">
<img src="reuse.jpg" width="250">
<img src="awareness.jpg" width="250">
`;
}

function openFindings(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="📊 Findings";

document.getElementById("popupBody").innerHTML=`
<h3>85%</h3>
<p>People know the importance of saving water.</p>

<h3>60%</h3>
<p>Households reported water wastage issues.</p>
`;
}

function openSolutions(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="💡 Solutions";

document.getElementById("popupBody").innerHTML=`
<ul>
<li>Save Water</li>
<li>Rainwater Harvesting</li>
<li>Reuse Water</li>
<li>Spread Awareness</li>
</ul>
`;
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

function openSaveWater(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="💧 Save Water";

document.getElementById("popupBody").innerHTML=`

<img src="savewater.webp"
style="width:100%;border-radius:15px;">

<h3>Ways to Save Water</h3>

<ol>
<li>Turn off taps when not in use.</li>
<li>Fix leaking pipes.</li>
<li>Use buckets instead of hoses.</li>
<li>Reuse water when possible.</li>
<li>Spread awareness.</li>
</ol>

`;
}

function openRain(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="🌧 Rainwater Harvesting";

document.getElementById("popupBody").innerHTML=`

<img src="harvesting.jpg"
style="width:100%;border-radius:15px;">

<h3>Steps</h3>

<ol>
<li>Collect rainwater from rooftops.</li>
<li>Filter the water.</li>
<li>Store in tanks.</li>
<li>Use for household purposes.</li>
<li>Recharge groundwater.</li>
</ol>

`;
}

function openReuse(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="♻ Reuse Water";

document.getElementById("popupBody").innerHTML=`

<img src="reuse.jpg"
style="width:100%;border-radius:15px;">

<h3>Ways to Reuse Water</h3>

<ol>
<li>Use RO waste water for cleaning.</li>
<li>Reuse washing machine water for mopping.</li>
<li>Water plants using leftover water.</li>
<li>Collect rainwater for non-drinking purposes.</li>
<li>Reduce unnecessary water wastage.</li>
</ol>

`;
}

function openAwareness(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="📚 Spread Awareness";

document.getElementById("popupBody").innerHTML=`

<img src="awareness.jpg"
style="width:100%;border-radius:15px;">

<h3>How to Spread Awareness</h3>

<ol>
<li>Conduct awareness campaigns.</li>
<li>Share water-saving tips on social media.</li>
<li>Educate students and communities.</li>
<li>Organize water conservation events.</li>
<li>Encourage responsible water usage.</li>
</ol>

`;
}

function openIndustrial(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="🏭 Industrial Waste";

document.getElementById("popupBody").innerHTML=`

<div style="text-align:center;">

<img src="industrial-pollution.jpg" class="float-img">

<img src="industrial2.jpg"
style="width:80%;border-radius:15px;margin:10px;">

<img src="industrial3.jpg"
style="width:80%;border-radius:15px;margin:10px;">

</div>

`;
}

function openPlastic(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="🗑 Plastic Pollution";

document.getElementById("popupBody").innerHTML=`

<div style="text-align:center;">

<img src="plastic1.jpg" style="width:80%;border-radius:15px;margin:10px;">
<img src="plastic2.jpeg" style="width:80%;border-radius:15px;margin:10px;">
<img src="plastic3.avif" style="width:80%;border-radius:15px;margin:10px;">

</div>

`;
}

function openHealth(){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML="🚱 Health Risks";

document.getElementById("popupBody").innerHTML=`

<div style="text-align:center;">

<img src="health1.webp" style="width:80%;border-radius:15px;margin:10px;">
<img src="health2.avif" style="width:80%;border-radius:15px;margin:10px;">
<img src="health3.jpg" style="width:80%;border-radius:15px;margin:10px;">

</div>

`;
}

document.addEventListener("DOMContentLoaded", function(){

const mapDiv = document.getElementById("waterMap");

if(mapDiv){

var map = L.map('waterMap').setView([17.69,83.17],12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map);

// Kurmannapalem
L.marker([17.6865, 83.1870])
.addTo(map)
.bindPopup(`
<b>Kurmannapalem</b><br>
Water Availability: 75% 💧<br>
Water Quality: Good ✅
`);

// Simon Nagar
L.marker([17.6800, 83.1800])
.addTo(map)
.bindPopup(`
<b>Simon Nagar</b><br>
Water Availability: 60% 💧<br>
Water Quality: Moderate ⚠️
`);

// Duvvada
L.marker([17.7000, 83.1500])
.addTo(map)
.bindPopup(`
<b>Duvvada</b><br>
Water Availability: 85% 💧<br>
Water Quality: Excellent ✅
`);

}

});

function calculateWater(){

let shower = Number(document.getElementById("shower").value);
let brush = Number(document.getElementById("brush").value);
let clothes = Number(document.getElementById("clothes").value);
let dishes = Number(document.getElementById("dishes").value);
let cooking = Number(document.getElementById("cooking").value);
let flush = Number(document.getElementById("flush").value);
let others = Number(document.getElementById("others").value);

let total =
(shower * 30) +
(brush * 2) +
(clothes * 50) +
(dishes * 20) +
(flush * 5)+
(others * 5);

let message = "Your estimated daily water usage is " + total + " Litres.";

if(total > 150){
    message += "<br>⚠️ High Water Usage! Try saving water.";
}
else{
    message += "<br>✅ Good Water Conservation!";
}

document.getElementById("waterResult").innerHTML = message;
}

const texts = [
"Every drop begins its journey from the sky...",
"Rainwater is collected in reservoirs and lakes...",
"Water is purified in treatment plants...",
"Clean water reaches our homes...",
"Wastewater is treated and recycled...",
"Rainwater harvesting protects future generations..."
];

let currentText = 0;

setInterval(() => {

const story = document.getElementById("storyText");

if(story){
story.innerText = texts[currentText];

currentText++;

if(currentText >= texts.length){
currentText = 0;
}
}

},4000);

let water = 0;
let rain = 0;

setInterval(() => {

const waterBox = document.getElementById("water");
const rainBox = document.getElementById("rain");

if(waterBox && rainBox){

water += 10;
rain += 20;

waterBox.innerHTML = water + " L";
rainBox.innerHTML = rain + " L";

}

},1000);

function toggleBot(){

const box = document.getElementById("chatbox");

if(box.style.display === "block"){
box.style.display = "none";
}
else{
box.style.display = "block";
}

}

for(let i=0;i<25;i++){

let drop = document.createElement("div");

drop.classList.add("water-drop");

drop.innerHTML = "💧";

drop.style.left = Math.random()*100 + "%";

drop.style.animationDuration =
(3 + Math.random()*5) + "s";

}

function openLogin(){
    document.getElementById("loginPopup").style.display="flex";
}

function closeLogin(){
    document.getElementById("loginPopup").style.display="none";
}

function loginUser(){

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if(username.trim() !== "" && password.trim() !==""){

        localStorage.setItem("username", username);
        alert("Login Successful!");

        document.getElementById("loginPopup").style.display="none";

        document.getElementById("loginBtn").style.display="none";

        document.getElementById("learnBtn").style.display="inline-block";


        document.getElementById("userSection").innerHTML =
            "👋 Welcome, " + username;
    }
    else{
        alert("Invalid Username or Password");
    }
}

const gallery =
document.getElementById("gallery");

const camera =
document.getElementById("camera");

function previewImage(event){

    let file = event.target.files[0];

    if(file){

        let reader = new FileReader();

        reader.onload = function(e){

            let preview =
            document.getElementById("preview");

            preview.src = e.target.result;

            preview.style.display = "block";
        };

        reader.readAsDataURL(file);
    }
}

gallery.addEventListener(
    "change",
    previewImage
);

camera.addEventListener(
    "change",
    previewImage
);

function submitReport(){

    let name =
        document.getElementById("reportName").value;

    let email =
        document.getElementById("reportEmail").value;

    let issue =
        document.getElementById("issueType").value;

    let description =
        document.getElementById("issueDesc").value;

    let location =
        document.getElementById("reportLocation").value;

    alert(
        "Report Submitted!\n\n" +
        "Name: " + name +
        "\nIssue: " + issue +
        "\nLocation: " + location
    );
}