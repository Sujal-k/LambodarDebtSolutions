import React from "react";
import '../css/CareerCard.css';

const CareerCard = (props) => {
    const Req = ({ reqs = [] }) => {
        return (
            <div className="req-holder">
                <h4>Requirements</h4>
                <ul>
                    {reqs.length > 0 ? (
                        reqs.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))
                    ) : (
                        <li>No requirements listed.</li>
                    )}
                </ul>
            </div>
        );
    };

    const Resp = ({ respos = [] }) => {
        return (
            <div className="resp-holder">
                <h4>Responsibilities</h4>
                <ul>
                    {respos.length > 0 ? (
                        respos.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))
                    ) : (
                        <li>No responsibilities listed.</li>
                    )}
                </ul>
            </div>
        );
    };

    return (
            <div className="career-card-body">
                <h3>{props.title}</h3>
                <div className="career-card-content">
                    <div className="career-card-content-left">
                        <Resp respos={props.respo} />
                    </div>
                    <div className="career-card-content-right">
                        <Req reqs={props.reqs} />
                    </div>
                </div>
            </div>
    );
};

export default CareerCard;
