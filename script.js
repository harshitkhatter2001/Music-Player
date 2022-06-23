console.log("Welcome to spotify")
//initialise the variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterplay= document.getElementById('masterplay');
let myProgress= document.getElementById('progress');
let songName=document.getElementById('songName')
let gif= document.getElementById('gif');
let songs = [ 
    {songName:"Bade acche lagte hain", filePath: "1.mp3", coverPath:"cover1.jpg" },
    {songName:"Chand si mehbooba", filePath: "2.mp3", coverPath:"cover2.jpg"  },
    {songName:"Chukar mere mann ko", filePath: "3.mp3", coverPath:"cover3.jpg"  },
    {songName:"Ek Ajnabee Haseena Se", filePath: "4.mp3", coverPath: "cover4.jpg" },
    {songName:"Kya hua tera wada", filePath: "5.mp3", coverPath: "cover5.jpg" },
   
]

//this particular thing is used to  add the songs using the javascript
// audioElement.play();
//this plays the audio that we have intialised to the webpage
//handle play/pause.click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play(); 
       masterplay.classList.remove('fa-circle-play');
       masterplay.classList.add('fa-circle-pause');
       gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgress.value=progress;
    //this enables the range type input to be updated.Here the value of progress is give to the range type input and which furthur keeps on updating .
    //here, we can clearly see that the percentage  alloted to the progress=currenttime/duration*100
})
myProgress.addEventListener('change',()=>{
    audioElement.currentTime=myProgress.value*audioElement.duration/100;
})
//from the above formula, in order to get the curent time, we multiply progress by duration and divide the value by 100;
const makeplays = ()=>{
    
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeplays();
       songIndex = parseInt(e.target.id);
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src =audioElement.src=`${songIndex+1}.mp3` ;
       songName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1;
       masterplay.classList.remove('fa-circle-play');
       masterplay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=8){
    songIndex=0;
}
else{
    songIndex +=1;
}
audioElement.src=`${songIndex+1}.mp3` ;
songName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
if(songIndex<=0){
    songIndex=0;
}
else{
    songIndex -=1;
}
audioElement.src=`${songIndex+1}.mp3` ;
songName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})