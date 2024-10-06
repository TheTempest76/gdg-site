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
    '/carousel1.jpeg',
    '/carousel2.jpeg',
    '/carousel3.jpeg',
    '/carousel4.jpeg',
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
                                    <img src={image} alt="carousel" style={{ width: '1600px', height: '600px' }} />
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
