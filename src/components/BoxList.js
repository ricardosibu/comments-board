import React from "react";
import { BoxItem } from "./BoxItem";

export const BoxList = ({allComments}) => {
  return (
    <div className="flex justify-center items-center mt-3">
      <section className="p-4 w-96 md:w-[500px] bg-white rounded-lg border shadow-md divide-y divide-blue-400">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900">
            Comentarios
          </h5>
          {!allComments.length && <p>Sin comentarios</p>}
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-blue-400">
            {allComments.map((comment) => (
              <BoxItem key={comment.comments} {...comment} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
