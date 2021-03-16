import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, useStore } from 'react-redux';
import styled from "@emotion/styled";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Comment from '@material-ui/icons/Comment';
import CircularProgress from '@material-ui/core/CircularProgress';


import getPosts from "../services/getPosts";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PostsCard = ({posts, itemsPerPageCount, author }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('');
  const [data, setData] = useState([]);
  const [remaingData, setRemaingData] = useState([]);
  const [loaderFlag, setLoaderFlag] = useState(false);

  const getNextSetOfRecords = (postsData, flag) => {
    let records = [],
        remainingRecords = [],
        recordsId;
    records = postsData.filter((record,idx) => idx < itemsPerPageCount);
    recordsId = records.map(a => a.id);
    remainingRecords = postsData.filter((record) => {
        return recordsId.indexOf(record.id) === -1;
    });
    if (flag) {
      setData(records);
    } else {
      setData([...records, ...data]);
    }
    setRemaingData(remainingRecords);
  };

  const handleClickLoadMore = () => {
    setCurrentPage(currentPage + 1);
    getNextSetOfRecords(remaingData);
  };

  useEffect(() => {
    if (itemsPerPageCount && author) {
      setLoaderFlag(true);
      getPosts(author).then(postsData => {
        setLoaderFlag(false);
        getNextSetOfRecords(postsData, true);
      });
    }
  }, [itemsPerPageCount, author]);

  console.log(data);
  console.log(remaingData);

  return (
    <div className="posts-container">
      <div>
        {loaderFlag && <CircularProgress />}
      </div>
      {data.map(post => (
        <Card className={`${classes.root} card-root-name`} variant="outlined" key={post.id}>
          <CardContent>
            <Typography variant="h5" component="h5">
              {post.title}
            </Typography>
            <Typography variant="body1" component="p">
              {post.body}
            </Typography>
          </CardContent>
          <Badge className="badge-container" badgeContent={4} color="primary">
            <Comment />
          </Badge>
        </Card>
      ))}
      <Button variant="outlined" color="primary" onClick={handleClickLoadMore}>
        Load More
      </Button>
    </div>
  );
};
export default PostsCard;
