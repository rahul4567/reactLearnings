import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, useStore } from 'react-redux';
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

import getProducts from "../services/getProducts";
import { setProducts, setPaginationInfo } from "../redux/actions";


const ContainerDiv = styled.div``;
const ProductsUl = styled.ul``;
const ProductLI = styled.li``;

const ProductList = ({products, pageInfo}) => {
  console.log(products);
  const dispatch = useDispatch();

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

  useEffect(() => {
    getProducts(pageInfo).then(data => {
      dispatch(setProducts(data.results));
      dispatch(setPaginationInfo({
        offset : pageInfo.offset + pageInfo.limit + 1,
        limit : 10,
        currentPage : ++pageInfo.currentPage,
        totalPages: Math.ceil(data.total / data.results)
      }));
    });
  }, []);

  const fetchMoreData = () => {
    getProducts(pageInfo).then(data => {
      dispatch(setProducts(data.results));
      dispatch(setPaginationInfo({
        offset : pageInfo.offset + pageInfo.limit,
        limit : 10,
        currentPage : ++pageInfo.currentPage
      }))
    });
  };

  return (
    <ProductsUl className="shop-item-list" id="scrollableUl" style={{
    height: 647,
    overflow: 'auto',
    display: 'flex',
  }}>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
        inverse={false} //
        hasMore={pageInfo.currentPage != pageInfo.totalPages}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableUl"
      >
          {products && products.map(product => (
            <ProductLI className={'shop-item shop-item-' + product.id}>
              {getOrganicBadge(product.masterData.current.masterVariant.attributes)}
              <Link to={'/product-detail/' + product.id}>
                <ContainerDiv className='shop-item-container'>
                  <img
                    className='shop-item-image'
                    src={product.masterData.current.masterVariant.images[0].url}
                  />
                  <h1 className='shop-item-name'>
                    {product.masterData.current.name.en}
                  </h1>
                  <h2 className='shop-item-price'>
                    ${product.masterData.current.masterVariant.prices.length > 0 && product.masterData.current.masterVariant.prices[0].value.centAmount.toFixed(2)}
                  </h2>
                </ContainerDiv>
              </Link>
            </ProductLI>
          ))}
      </InfiniteScroll>
    </ProductsUl>
  );
};

export default ProductList;
