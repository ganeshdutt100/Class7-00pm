import React, { useState } from "react";

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  return (
    <div>
      <p>Lke Counter : {likeCount}</p>
      <button
        className="bg-amber-500 px-4 py-2 text-white rounded-3xl"
        onClick={() => setLikeCount(likeCount + 1)}
      >
        Like{" "}
      </button>
    </div>
  );
};

export default LikeButton;
