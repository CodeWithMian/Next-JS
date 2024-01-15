// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Context, {Session} from "@/Context"
import { useContext } from "react";
export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 3
  };
  return (
    <>

   
<div>

<Slider {...settings}>
          <div>
          <img src="https://picsum.photos/seed/picsum/500/300" alt="" />

          </div>
          <div>
          <img src="https://picsum.photos/seed/picsum/500/400" alt="" />

          </div>
          <div>
          <img src="https://picsum.photos/seed/picsum/500/500" alt="" />

          </div>
          <div>
          <img src="https://picsum.photos/seed/picsum/500/200" alt="" />

          </div>
          <div>
          <img src="https://picsum.photos/seed/picsum/500/300" alt="" />

          </div>
          <div>
          <img src="https://picsum.photos/seed/picsum/500/400" alt="" />

          </div>
        
        </Slider>
</div>

    </>
  );
}
