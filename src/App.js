import { useEffect, useState } from "react";
import Player from "./component/Player";

function App() {
  const [songs] = useState([
    {
      title: "Titaliya",
      artist: "Hardy Sandhu",
      img_src: "./images/titliyan.jpg",
      src: "./songs/Titliaan Warga (1).mp3",
    },
    {
      title: "Nach Meri Rani",
      artist: "Guru Randhawa",
      img_src: "./images/nachmerirani.jpg",
      src: "./songs/nach meri rani.mp3",
    },
    {
      title: "Aatama Raman",
      artist: "Bhoddha",
      img_src: "./images/aatma raman.jpg",
      src: "./songs/Brodha V - Aathma Raama [Music Video].mp3",
    },
    {
      title: "Dil Luteya",
      artist: "JAZZY B",
      img_src: "./images/dil luteya.jpg",
      src: "./songs/DIL LUTEYA - JAZZY B - OFFICIAL VIDEO.mp3",
    },
    {
      title: "Laung Laachi",
      artist: "Ammy Virk,Neeru Bajwa",
      img_src: "./images/laung lachi.jpg",
      src: "./songs/Laung Laachi Title Song  Mannat Noor  Ammy Virk, Neeru Bajwa,Amberdeep  Latest Punjabi Song 2018.mp3",
    },
    {
      title: "Tum Hi Ho Bandhu",
      artist: "Kavita and Neeraj",
      img_src: "./images/bandhu.jpg",
      src: "./songs/Tum Hi Ho Bandhu- Cocktail HQ (Audio).mp3",
    },
    {
      title: "Bulleya",
      artist: "Amit Mishra",
      img_src: "./images/buleya.jpg",
      src: "./songs/Bulleya (From .mp3",
    },
    {
      title: "Badtameez Dil",
      artist: "Benny Dayal",
      img_src: "./images/dil.jpg",
      src: "./songs/BADTAMEEZ DIL.mp3",
    },
    {
      title: "Patola",
      artist: "Guru Randhawa",
      img_src: "./images/patola.jpg",
      src: "./songs/Patola Video Song Blackmail Irrfan Khan & Kirti Kulhari Guru Randhawa.mp3",
    },
    {
      title: "Saware",
      artist: "Arijit Singh",
      img_src: "./images/sawre.jpg",
      src: "./songs/Saware (Slowed) Phantom Arijit Singh Goldie Khristi VDJ Soul Karan Katrina Kaif Saif Ali.mp3",
    },
    {
      title: "System pe System",
      artist: "R Maan",
      img_src: "./images/system.jpg",
      src: "./songs/System pe System (Lyrical Video) R Maan Billa Sonipat Aala Ek Mere Bol Pa System Hilega.mp3",
    },
    {
      title: "Rang Sharbaton",
      artist: "Atif Aslam",
      img_src: "./images/rang.jpg",
      src: "./songs/Main Rang Sharbaton Ka (lyrics with english translation) - Atif Aslam & Chinmayi Sripada.mp3",
    },
    {
      title: "Apna Bana Le",
      artist: "Arijit Singh",
      img_src: "./images/apna-bana-le-bhediya.jpg",
      src: "./songs/Apna Bana Le - Full Audio  Bhediya  Varun Dhawan, Kriti Sanon Sachin-Jigar,Arijit Singh,Amitabh B.mp3",
    },
    {
      title: "Lofi Song",
      artist: "Song",
      img_src: "./images/let me down.jpg",
      src: "./songs/Let Me Down Slowly x Main Dhoondne Ko Zamaane Mein (Gravero Mashup)  Full Version.mp3",
    }
  ])
    
    const [currentSongIndex, setCurrentSongIndex]=
    useState(0);
    const [nextSongIndex, setNextSongIndex]=
    useState(0);
    useEffect(() => {
      setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length - 1) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      });
    }, [currentSongIndex, songs.length]);



  
  return (
    <div className="App">
    <Player 
       currentSongIndex={currentSongIndex}
       setCurrentSongIndex={setCurrentSongIndex}
       nextSongIndex={nextSongIndex}
       songs={songs}
    />

   </div>
  );
}

export default App;
