import React from "react";

export const BoxItem = ({ author, comments, time }) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex justify-between min-w-0">
        <p className="text-sm font-medium text-gray-900">{author}</p>
        <p className="text-sm font-medium text-gray-500">{time}</p>
      </div>
        <p className="line-clamp-4 text-base font-semibold p-3 text-gray-400">
          {comments}
          </p>
    </li>
  );
};
