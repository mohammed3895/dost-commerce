"use client";

const Loading = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-50 bg-white/20 backdrop:blur-xl flex items-center justify-center">
      <div className="w-9 h-9 rounded-full bg-primary animate-ping duration-1000" />
    </div>
  );
};

export default Loading;
