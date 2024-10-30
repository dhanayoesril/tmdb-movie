import React, { useEffect, useState, lazy } from 'react';
import Config from '../../configs/config';
import styled from 'styled-components';
import { getDetailMovie, getCreditMovies } from '../../actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../reducers';
import { Col, Row, Badge } from 'react-bootstrap';
import { formatDate, toHoursAndMinutes } from '../../helpers';
import { IGenres, IListCasting } from '../../types';
import './styles.scss';

const CardPhoto = lazy(() => import('../../components/CardPhoto'));

const Detail = () => {
  const params: { id: string } = useParams();
  const dispatch = useDispatch();

  const { data: detailMovie } = useSelector(
    (state: RootState) => state.detailMovieReducers
  );

  const [dataCredits, setDataCredits] = useState<IListCasting>({ cast: [] });

  const id = Number(params?.id);

  useEffect(() => {
    dispatch(getDetailMovie(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (detailMovie?.id) {
      getCreditMovies(id)
        .then((res: { data: IListCasting }) => {
          const data = res.data;
          setDataCredits(data);
        })
        .catch((err: any) => {
          console.log('err: ', err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailMovie]);

  const bgUrl = `url(${Config.tmdb.imageUrl}/original/${detailMovie?.backdrop_path})`;

  const DetailWrapperStyles = styled.div`
    background-color: black;
    &::before {
      background-image: ${bgUrl};
      background-size: cover;
      background-repeat: no-repeat;
      height: 85%;
      width: 100%;
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.35;
    }
  `;

  const genres: any = detailMovie?.genres || [];
  const stringGenres = genres.map((dt: IGenres) => dt.name).join(', ') || '';
  const duration = detailMovie?.runtime
    ? toHoursAndMinutes(detailMovie?.runtime)
    : { hours: 0, minutes: 0 };
  const stringDuration = `${duration?.hours}h ${duration?.minutes}m`;

  const director: any = dataCredits?.crew?.find(
    (item) => item.job === 'Director'
  );

  console.log('dir: ', director);

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <DetailWrapperStyles className="detail-wrapper">
      <Row>
        <Col md={3} sm={12} className="left-content">
          <img
            src={`${Config.tmdb.imageUrl}/original/${detailMovie?.poster_path}`}
            alt="tmdb_logo"
            width="100%"
            className="poster-img"
          />
        </Col>
        <Col md={9} sm={12} className="right-content">
          <div className="title">{detailMovie?.title}</div>
          <div>
            <span>
              {detailMovie?.release_date
                ? formatDate(detailMovie?.release_date)
                : ''}
            </span>
            <span className="ml-1">
              {detailMovie?.status ? `(${detailMovie?.status})` : null}
            </span>
            <span className="mx-1">&#x2022;</span>
            <span>{stringGenres}</span>
            <span className="mx-1">&#x2022;</span>
            <span>{stringDuration}</span>
          </div>
          <div className="mt-4 content">
            <div className="overview-title mb-1">Genre</div>
            {genres?.map((item: { id: number; name: string }) => (
              <Badge className="mr-2" key={item?.id}>
                {item?.name}
              </Badge>
            ))}
            <div className="tagline mt-3 mb-3">{detailMovie?.tagline}</div>
            <div className="overview-title">Overview</div>
            <div className="mb-3">{detailMovie?.overview}</div>
            <div className="overview-title">Director</div>
            <div className="mb-3">{director?.name}</div>
            <div className="overview-title">Revenue</div>
            <div>
              {detailMovie?.revenue
                ? USDollar.format(Number(detailMovie?.revenue))
                : '$0'}
            </div>
          </div>
        </Col>
      </Row>
      <div className="cast-wrapper">
        <div className="title">Cast</div>
        <div className="cast-photo-wrapper">
          {dataCredits?.cast?.map((item) => (
            <CardPhoto
              name={item.name}
              character={item.character}
              photoPath={item.profile_path}
              key={item.id}
            />
          ))}
        </div>
        <div className="title mt-4">Crew</div>
        <div className="cast-photo-wrapper">
          {dataCredits?.crew?.map((item) => (
            <CardPhoto
              name={item.name}
              character={item.job}
              photoPath={item.profile_path}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </DetailWrapperStyles>
  );
};

export default Detail;
