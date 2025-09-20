import Image from "next/image";
import React from "react";

interface CardProps {
  mainImageUrl: string;
  text: string;
  subHeading: string;
  profilePic: string;
  author: string;
}

const ShowCard: React.FC<CardProps> = ({
  mainImageUrl,
  text,
  subHeading,
  profilePic,
  author,
}) => {
  return (
    <div className="border border-gray-400 w-2xs rounded-2xl overflow-hidden">
      <Image
        src={mainImageUrl}
        alt="Project Image"
        width={288}
        height={288}
        className="object-fill h-50"
      />
      <div className="p-4">
        <div>
          <h3>{text}</h3>
          <p>{subHeading}</p>
        </div>
        <div className="flex gap-2 items-center mt-8">
          <Image
            src={profilePic}
            alt="Author Image"
            width={40}
            height={40}
            className="bg-green-300 p-2 rounded-full"
          />
          <p>by {author}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
