import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card";
import React from "react";
import Autoplay from "embla-carousel-autoplay"
const images = [
    '/images/old_building1.jpg',
    '/images/old_building2.jpg',
    '/images/old_building3.jpg',
    '/images/old_building4.jpg',
    '/images/old_building5.jpg',
    '/images/old_building6.jpg'
];

export default function BodyCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000 })
    )
    return (
        <div className="carousel">
            <Carousel
                plugins={[plugin.current]}
                className="w-full  mx-auto relative"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent>
                                    <img src={image} alt="carousel" width={1600} height={500} />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2  -translate-y-1/2" />
                <CarouselNext className="absolute right-0 top-1/2  -translate-y-1/2" />
            </Carousel>
        </div>
    );
}
