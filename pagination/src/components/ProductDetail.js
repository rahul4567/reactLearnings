import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, useStore } from 'react-redux';
import styled from "@emotion/styled";

import AddItem from "../containers/AddItem";

const ContainerDiv = styled.div``;
const ImageContainer = styled.img`
  && {
    height : 400px;
    width : 600px;
  }
`

const getOrganicBadge = (attributes) => {
  let organic = attributes.find(val => val.name === 'Organic');

  if (organic && organic.value) {
    return (
      <div>
        <img src="https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/5e85d71501308335-L2AE6hCf-thumb.jpg" />
      </div>
    );
  }
};

const ProductDetail = (props) => {
  console.log(props);
  const {id, img, name, description, price} = props;
  return (
    <ContainerDiv className={'item item-' + props.id}>
      {getOrganicBadge(props.masterData.current.masterVariant.attributes)}
      <ImageContainer
        className='item-image'
        src={props.masterData.current.masterVariant.images[0].url}
      />
      <div className='item-details'>
        <h1 className='item-name'>
          {props.masterData.current.name.en}
        </h1>
        <h2 className='item-price'>
          ${props.masterData.current.masterVariant.prices.length > 0 && props.masterData.current.masterVariant.prices[0].value.centAmount.toFixed(2)}
        </h2>
        <p className='item-desc'>
          {props.masterData.current.description.en}
        </p>
        <AddItem id={props.id} />
      </div>
    </ContainerDiv>
  );
}

export default ProductDetail;
