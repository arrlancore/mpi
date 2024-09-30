import React from "react";

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId, title }) => {
  return (
    <div className="w-full max-w-full aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        title={title ? title : `YouTube video player`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
