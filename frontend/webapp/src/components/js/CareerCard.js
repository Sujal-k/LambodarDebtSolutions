import { Container } from "react-bootstrap";

function CareerCard(props) {
    return(
        <Container>
            <div className="career-card-body">
                <h4>{props.title}</h4>
                <div className="career-card-content">
                    <div className="career-card-content-left">
                        {props.respo}
                    </div>
                    <div className="career-card-content-right">
                        {props.req}
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default CareerCard;
