import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { HorizontalSlideShow } from "./components/HorizontalSlideShow";

const PICTURES = [
  {
    img: "/images/chasing-dogs.jpg",
    description: "Two dogs",
  },
  {
    img: "/images/lake.jpg",
    description: "Beautiful lake view",
  },
  {
    img: "/images/pitbull.jpg",
    description: "Pit bull",
  },
  {
    img: "/images/sunset.jpg",
    description: "Sunset",
  },
  {
    img: "/images/three-dogs.jpg",
    description: "Three dogs",
  },
  {
    img: "/images/chasing-dogs.jpg",
    description: "Two dogs",
  },
  {
    img: "/images/lake.jpg",
    description: "Beautiful lake view",
  },
  {
    img: "/images/pitbull.jpg",
    description: "Pit bull",
  },
  {
    img: "/images/sunset.jpg",
    description: "Sunset",
  },
  {
    img: "/images/three-dogs.jpg",
    description: "Three dogs",
  },
];

function App() {
  return (
    <div>
      <h1 className="text-[95px]">My demo slider</h1>
      <HorizontalSlideShow pictures={PICTURES}/>
    </div>
  );
}

export default App;
