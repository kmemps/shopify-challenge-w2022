import { useState } from "react";
import { ContextProps } from "./types";

export const PhotoContext: React.FC<ContextProps> = ({ post }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const explanation = (text: string) => {
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 300) : text}
        <span onClick={toggleReadMore} className="read-more">
          {isReadMore ? " ...read more" : " show less"}
        </span>
      </p>
    );
  };

  return (
    <div className="p-3 context-container">
      <div className="p-1 mb-3 border-bottom border-secondary">
        <h2>{post.title}</h2>
        <h5>({post.date})</h5>
      </div>
      {explanation(post.explanation)}
    </div>
  );
};
