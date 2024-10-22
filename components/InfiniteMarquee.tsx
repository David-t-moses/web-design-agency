import React from "react";

const InfiniteMarquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="inline-block animate-marquee">{children}</div>
    </div>
  );
};

export default InfiniteMarquee;
