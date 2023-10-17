import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  age: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <form className="simple-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <Button type="submit" text="Submit" />
      </form>
    </div>
  );
}

export default Form;
