import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const cardTitleStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '36px',
  marginBottom: '10px',
  width: '100%',
};

const cardTextStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
};

  const CustomCard = ({ title, text, image }) => {
    return (
      <div className="col-md-6 col-lg-4 mb-4">
        <Card style={{ width: '100%', background: '#F4F6FA' }}>
          <Card.Body className="d-flex">
            <div style={{ paddingRight: '20px', flex: '1' }}>
              <Card.Title style={cardTitleStyle}>{title}</Card.Title>
              <Card.Text style={cardTextStyle}>{text}</Card.Text>
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={image} style={{ width: '100%', height: 'auto', maxWidth: '210px' }} draggable="false" />
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  };

  export default CustomCard;
