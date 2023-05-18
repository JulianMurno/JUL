// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",

    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",

    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",

    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",

    },
  ];

  return (
    <Swiper
    spaceBetween={20}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    
            >
    <Grid.Container gap={2} justify="flex-start">
      {list.map((item, index) => (
          
          <SwiperSlide key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={"https://nextui.org" + item.img}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {item.title}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
            </SwiperSlide>  
          
      ))}
    </Grid.Container>
    </Swiper>
  );
}
