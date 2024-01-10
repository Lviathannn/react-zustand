import { FormEvent, useState } from "react";
import { useAppStore } from "../store/appStore";
import { useShallow } from "zustand/react/shallow";

export default function UserName() {
  const { example, setExample } = useAppStore(
    useShallow((state) => {
      return { example: state.example, setExample: state.setExample };
    })
  );

  const [input, setinput] = useState<string>("");

  console.log("Render UserName");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setExample(input);
  };

  return (
    <>
      <h1> User Name : {example}</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <input
          type="text"
          className="input"
          onChange={(e) => {
            setinput(e.target.value);
          }}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
