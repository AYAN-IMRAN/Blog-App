import React from "react";

const Skeleton = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-neutral-800 rounded ${className}`}
    ></div>
  );
};

export default Skeleton;
