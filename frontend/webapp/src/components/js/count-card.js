import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../components/css/count-card.css'

function CardCount(props) {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Global duration for all animations
          once: false, // Whether animation should happen only once - while scrolling down
          mirror: false, // Whether elements should animate out while scrolling past them
        });
      }, []);
    return(
        <div className="c-card-body" data-aos="fade-right" data-aos-delay={props.aosDelay} style={{textAlign:"center"}}>
            <p id="counts">{props.count}</p>
            <h4>{props.title}</h4>
            <p id="c-inf">{props.info}</p>
        </div>
    );
}
export default CardCount;