import { useState } from "react";
import { Button, Dropdown, Form } from "semantic-ui-react";
import { result } from "../results";

const MUIForm = () => {
  const [form, setForm] = useState({});
  //   const { isLoading, error, data, mutate } = useGrade();

  const handleChange = (e, { name, value }) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleGrade = () => {
    console.log("result: ", result);
  };

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
        <input placeholder="30" value={form.marks} onChange={handleChange} />
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
        <label>Recommended text</label>
        <input
          type="file"
          placeholder=""
          //   value={form.file1}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-4 justify-between items-start">
        <label>Class recording</label>
        <input
          type="file"
          placeholder=""
          //   value={form.file1}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-4 justify-between items-start">
        <label>Upload question</label>
        <input
          type="file"
          placeholder=""
          value={form.file1}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-4 justify-between items-start">
        <label>Additional Note/Prompt</label>
        <input
          type="file"
          placeholder="30"
          value={form.file2}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" onClick={handleGrade}>
        Grade
      </Button>
    </Form>
  );
};

export default MUIForm;
