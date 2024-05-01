import { result } from "../results";

const Results = () => {
  const {
    data: { question, markingGuide, gradingResponse },
  } = result;

  return (
    <div className="w-100 flex gap-4 justify-between p-8">
      <div className="w-4/12 border p-4 flex flex-col gap-4">
        <p className="text-xl">Question</p>
        <p>{question}</p>
      </div>

      <div className="w-4/12 border p-4 flex flex-col gap-4 bg-slate-100">
        <p className="text-xl">Marking guide</p>
        <p>{markingGuide}</p>
      </div>

      <div className="w-4/12 border p-4 flex flex-col gap-4">
        <p className="text-xl">Grading Response</p>
        <p>{gradingResponse[0]}</p>
      </div>
    </div>
  );
};

export default Results;
