import React from 'react';
import { useParams } from 'react-router-dom';
import CommonLayout from '../components/CommonLayout';

interface FilmPageParams {
  filmId: string;
}

function Film(): React.ReactElement {
  const { filmId } = useParams<FilmPageParams>();
  return <CommonLayout>영화 개별 상세 정보 페이지 filmId: {filmId}</CommonLayout>;
}

export default Film;
