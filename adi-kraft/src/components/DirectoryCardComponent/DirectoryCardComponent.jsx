import React from 'react';
import './DirectoryCardComponent.style.scss';

import {
    Card, CardImg,  CardImgOverlay, CardBody,
    CardTitle,  Button
  } from 'reactstrap';

const DirectoryCard = ({item}) =>{

    const { title, imageUrl } =item;
    return(
        <div >
        <Card className="card" >
        <CardImg top className="CardImg" width="100%" src={imageUrl} alt={title} />
        <CardImgOverlay className="overlay">
        <CardBody>
          <CardTitle className="cardTitle">{title.toUpperCase()}</CardTitle>
        </CardBody>
        </CardImgOverlay>
        <Button  color="secondary" size="lg" className="button">Shop Now</Button>
      </Card>
    </div>
    )
}

export default DirectoryCard;