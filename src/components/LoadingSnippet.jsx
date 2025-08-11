import React from "react";

const LoadingSnippet = () => {
  return (
    <div className="h-[92vh] w-full flex gap-4 items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-xl font-medium text-gray-600">Loading...</p>
    </div>
  );
};

export default LoadingSnippet;
