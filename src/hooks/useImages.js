import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imagesSelector } from 'reduxStore';
import { fetchImages } from 'reduxStore/thunks/images';

export function useImages() {
  const { status, correct, incorrect } = useSelector(imagesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return { status, correct, incorrect };
}
