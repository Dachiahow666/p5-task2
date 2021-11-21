let img
let pig;
// 執行前先下載
function preload(){
  img=loadImage("wgs84.png");
  
  pig=loadJSON('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-11-02&minmagnitude=5');
   }

// 資料下載完後，第一次執行
function setup() {
  createCanvas(600, 300);
  image(img,0,0)
  
}

// 重複執行
function draw() {

  if(pig){
  console.log(pig.features);
    pig.features.forEach((A)=>{
  circle(map(A.geometry.coordinates[0],-180,180,0,width),
         map(A.geometry.coordinates[1],-90,90,0,height),
         A.properties.mag)
    })
  }
}