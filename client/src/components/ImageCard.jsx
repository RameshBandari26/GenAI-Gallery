// src/components/ImageCard.jsx
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FileSaver from "file-saver";

const ImageCard = ({ item }) => {
  return (
    <div className="relative w-fit group px-1 py-1">
      {/* Image */}
      <LazyLoadImage
        src={item?.photo}
        alt={item?.prompt}
        placeholderSrc="/placeholder.png"
        className="object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-103 group-hover:shadow-2xl group-hover:shadow-gray-400 max-w-full"
      />

      {/* Hover Content */}
      <div className="absolute bottom-0 right-0 w-full flex justify-end">
        <div className=" translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col items-end p-3 mb-1 rounded-t-xl bg-gray-800/70">
          <p className="text-sm text-gray-200">{item?.prompt}</p>
          <div className="flex items-center gap-2">
            <span className="bg-gray-800/70 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              {item?.name?.[0]}
            </span>
            <h2 className="font-semibold">{item?.name}</h2>
          </div>

          <button
            onClick={() => FileSaver.saveAs(item?.photo, "download.jpg")}
            className="cursor-pointer bg-green-500 text-white mt-2 px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
