import React, { useEffect } from 'react';
import { getCategoryMovies } from '../../actions/movieActions';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Category = () => {
  const dispatch = useDispatch();
  const category = useParams<{ category: string }>().category;

  useEffect(() => {
    dispatch(getCategoryMovies(category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return <div>List Category</div>;
};

export default Category;
