"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";

const videos = [
 
  {
    id: 2,
    url: "https://www.youtube.com/embed/q1qKv5TBaOA?si=DLEjp-qL6slnc09p",
    title: "10 Reasons Why Libraries Are Important",
    image: "/assets/images/library2.jpg",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/J0NuOlA2xDc?si=IiGdSgybkKc3-Uem",
    title: "Here's How Librarians Choose What Goes on the Shelves",
    image: "/assets/images/library1.png",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/J0NuOlA2xDc?si=IiGdSgybkKc3-Uem",
    title: "10 Reasons Why Libraries Are Important",
    image: "/assets/images/library2.jpg",
  },
];

export default function MyVideoGallery({ className }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log(`Currently displaying: ${videos[currentIndex].title}`);
    }
  }, [currentIndex, isOpen]);

  const nextSlide = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <div className={`grid grid-cols-2 gap-2 sm:grid-cols-3  ${className}`}>
        {videos.map((item, index) => (
          <div className="flex flex-col space-y-3 bg-gray-50 rounded-md pb-3">
          <div
            key={index}
            className="overflow-hidden border rounded-t-md shadow-md cursor-pointer group aspect-video"
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
          >
            <div className="relative w-full overflow-hidden aspect-video">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full transition-all duration-300 transform aspect-video group-hover:scale-105"
              />
              <span className="absolute bg-black/50 border-[0.5px] -translate-x-1/2 group-hover:bg-primary bg-primary/80 rounded-full p-1.5 -translate-y-1/2 text-white top-[50%] left-[50%]">
                <Play size={24} />
              </span>
            </div>
          </div>
           <p className="text-base px-2 leading-tight text-black line-clamp-2 hover:underline dark:text-white">{item.title}</p>
           </div>
        ))}
       
      </div>

      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="flex flex-col w-full h-full max-w-full min-h-screen bg-black border-none px-14">
            <DialogTitle className="hidden" />
            <DialogDescription className="hidden" />
            <div className="relative flex-grow">
              <iframe
                src={`${videos[currentIndex].url}?&autoplay=1`}
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute transform -translate-y-1/2 group top-1/2 left-2"
              onClick={prevSlide}
              aria-label="Previous video"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="text-white group-hover:text-black" size={28} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute transform -translate-y-1/2 group top-1/2 right-2"
              onClick={nextSlide}
              aria-label="Next video"
              disabled={currentIndex === videos.length - 1}
            >
              <ChevronRight className="text-white group-hover:text-black" size={28} />
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              size="icon"
              variant="ghost"
              className="absolute right-4 z-50 top-4 border-white text-white rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
            >
              <X className="w-8 h-8" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
