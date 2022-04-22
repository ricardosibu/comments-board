import React, { useRef, useState } from "react";

export const BoxComments = ({ saveComments, formValue, setFormValue }) => {
  const [alert, setAlert] = useState(false);
  let formComments = useRef(null);

  const handleSubmit = (event, formValue) => {
    const { author, comments } = formValue;
    if (!author || !comments) {
      event.preventDefault();
      setAlert(true);
    } else {
      setAlert(false);
      saveComments(event, formValue);
      formComments.current.reset(); 
    }
  };

  const onFormChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center">
      <section className="px-7 h-80 w-[500px] rounded-[12px] bg-white p-4 border-2 border-cyan-700">
        <h2 className="mb-3 text-xl font-semibold text-blue-400">
          Ingrese un comentario
        </h2>
        <form
          onSubmit={(event) => handleSubmit(event, formValue)}
          onChange={onFormChange}
          ref={formComments}
        >
          <div>
            <input
              className="h-8 m-1 mt-2 px-3 w-1/2 border-2 border-blue-300 rounded-lg resize-none outline-none placeholder:text-sm"
              type="text"
              placeholder="Nombre del autor"
              name="author"
            />
          </div>
          <div>
            <textarea
              className="px-3 h-24 text-sm py-1 m-1 mt-3 outline-none border-2 border-blue-300 w-full resize-none rounded-lg placeholder:text-sm"
              rows="6"
              placeholder="comentario"
              name="comments"
            />
          </div>
          <div className="m-1">
            {alert && (
              <p className="w-full text-sm bg-red-300 p-1 rounded-lg">
                Los campos son obligatorios
              </p>
            )}
          </div>
          <div className="flex justify-end mt-2">
            <button
              className="h-8 w-[150px] m-1 bg-blue-400 text-sm text-white rounded-lg cursor-pointer transition-all hover:bg-blue-600"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
