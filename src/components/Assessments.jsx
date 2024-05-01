import { useState } from "react";
import MUIForm from "./MUIForm";
import MUITable from "./MUITable";

const Assessments = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-100 p-4 flex flex-col justify-between gap-2 border-l-stone-950">
      <h1 className="text-3xl">{!showModal ? "Assessments" : "Grade"}</h1>

      <div className="w-100">
        {!showModal ? (
          <div className="flex flex-col gap-6 justify-between items-start">
            <input
              placeholder="search"
              className="rounded w-[10rem] py-4 px-6 border-slate-950 bg-slate-200 "
            />

            <MUITable setShowModal={setShowModal} />
          </div>
        ) : (
          <MUIForm />
        )}
      </div>
    </div>
  );
};

export default Assessments;
