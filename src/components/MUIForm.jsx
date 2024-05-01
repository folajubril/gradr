import { Button, Dropdown, Form } from "semantic-ui-react";

const MUIForm = () => {
  const handleGrade = () => {};

  const options = [
    {
      key: "ans",
      text: "Only internet answers",
      value: "0",
    },
    {
      key: "both",
      text: "Both marking guide and internet",
      value: "0",
    },
    {
      key: "onlyg",
      text: "Only marking guide",
      value: "3",
    },
  ];

  return (
    <Form className="border w-[50%] p-8 shadow-zinc-800 flex flex-col gap-6">
      <div className="flex flex-col gap-4 justify-between items-start">
        <label>Total Marks</label>
        <input placeholder="30" />
      </div>

      <div className="flex flex-col gap-4 justify-between items-start">
        <label>Ai Dependency Level</label>
        <Dropdown placeholder="Select" fluid selection options={options} />
      </div>

      <div className="flex flex-col gap-4 justify-between items-start">
        <label>Additional Note/Prompt</label>
        <input type="text" placeholder="30" />
      </div>

      <div className="flex flex-col gap-4 justify-between items-start">
        <label>Upload question</label>
        <input type="file" placeholder="" />
      </div>

      <div className="flex flex-col gap-4 justify-between items-start">
        <label>Additional Note/Prompt</label>
        <input type="file" placeholder="30" />
      </div>

      <Button type="submit" onClick={handleGrade}>
        Grade
      </Button>
    </Form>
  );
};

export default MUIForm;
