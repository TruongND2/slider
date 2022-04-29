import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { HorizontalSlideShow } from "./components/HorizontalSlideShow";

const PICTURES = [
  {
    img: "/images/apple.png",
    description: "Apple",
  },
  {
    img: "/images/cherry.png",
    description: "Cherry",
  },
  {
    img: "/images/chicken.png",
    description: "Chicken",
  },
  {
    img: "/images/lime.png",
    description: "Lime",
  },
  {
    img: "/images/mango.png",
    description: "Mango",
  },
  {
    img: "/images/apple.png",
    description: "Apple",
  },
  {
    img: "/images/cherry.png",
    description: "Cherry",
  },
  {
    img: "/images/chicken.png",
    description: "Chicken",
  },
  {
    img: "/images/lime.png",
    description: "Lime",
  },
  {
    img: "/images/mango.png",
    description: "Mango",
  },
];

function App() {
  return (
    <div className="text-center h-[100vh] pt-[100px]">
      <h1 className="text-[30px] md:text-[95px] mb-[50px]">My demo slider</h1>
      <HorizontalSlideShow pictures={PICTURES}/>
    </div>
  );
}

export default App;
