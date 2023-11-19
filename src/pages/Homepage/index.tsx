import React, { useState } from 'react';
import { Button, Flex, Typography } from 'antd';
import dayjs from 'dayjs';
import { Swiper, SwiperSlide } from 'swiper/react';

import useFetchData from '../../hooks/useFetchData';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/swiper-bundle.min.css';
import MainLayout from '../../components/MainLayout';

const { Title, Paragraph } = Typography;
const Homepage: React.FC = () => {
  const { getItem } = useSessionStorage();
  const sessionId = getItem('id');
  const [id, setId] = useState<string | undefined>(undefined);
  const { data, loading, play } = useFetchData('/data.json', id ?? (sessionId as string));

  if (loading) {
    return <div>Loading</div>;
  }
  const handleClick = (id: string): void => {
    setId(id);
  };
  return (
    <MainLayout bg={data?.Featured?.CoverImage as string}>
      <Flex vertical style={{ height: '100%' }} justify='space-between'>
        <Flex vertical style={{ padding: '50px', zIndex: 1 }}>
          <Paragraph style={{ fontSize: 16 }}>{data?.Featured?.Category}</Paragraph>
          <Title level={1} style={{ color: 'white', marginTop: 0 }}>
            {data?.Featured?.Title}
          </Title>
          <Flex gap={16}>
            <Paragraph style={{ fontSize: 16 }}>{data?.Featured?.ReleaseYear}</Paragraph>
            <Paragraph style={{ fontSize: 16 }}>{data?.Featured?.MpaRating}</Paragraph>
            <Paragraph style={{ fontSize: 16 }}>
              {dayjs(Number(data?.Featured?.Duration))
                .utc()
                .format('mm: ss')}{' '}
              minutes
            </Paragraph>
          </Flex>
          <Paragraph style={{ fontSize: 16 }}>{data?.Featured?.Description}</Paragraph>
          <Flex gap={12}>
            <Button style={{ borderRadius: 16 }}>Play</Button>
            <Button style={{ borderRadius: 16 }} type='primary'>
              More Info
            </Button>
          </Flex>
        </Flex>
        <Flex vertical style={{ zIndex: 1 }}>
          <Paragraph style={{ fontSize: 24 }}>Trending Now</Paragraph>
          <Swiper slidesPerView={8} spaceBetween={12} style={{ width: '100%' }} pagination={true} allowTouchMove={true}>
            {data?.TendingNow?.map((movie, i) => (
              <SwiperSlide key={i}>
                <img width={150} src={movie?.CoverImage} onClick={(): void => handleClick(movie?.Id)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Flex>
      {data?.Featured?.VideoUrl && play && (
        <video
          key={id}
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
          }}
          src={data?.Featured?.VideoUrl}
        >
          <source src={data?.Featured?.VideoUrl} />
        </video>
      )}
    </MainLayout>
  );
};

export default Homepage;
