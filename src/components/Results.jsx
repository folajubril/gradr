import { result } from "../results";
import { img } from "../assets";

const Results = () => {
  const {
    data: { question, markingGuide, gradingResponse },
  } = result;

  return (
    <div className="w-100 flex gap-4 justify-between p-8">
      <div className="w-4/12 h-[70%] text-stone-500 border p-4 flex flex-col gap-4 overflow-y-scroll">
        <p className="text-xl">Question</p>
        <p>{question}</p>
        <img src={img} />
      </div>

      <div className="w-4/12 h-[70%] text-stone-500 border p-4 flex flex-col gap-4 bg-slate-100 overflow-y-scroll">
        <p className="text-xl">Marking guide</p>
        <p>{markingGuide}</p>
      </div>

      <div className="w-4/12 h-[70%] text-stone-500 border p-4 flex flex-col gap-4 overflow-y-scroll">
        <p className="text-xl">Grading Response</p>
        <p>{gradingResponse[0]}</p>
      </div>
    </div>
  );
};

export default Results;
