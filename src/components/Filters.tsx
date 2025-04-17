"use client"
import { redirect } from "next/navigation";
import React from "react";

const Filters = () => {
    const [type, setType] = React.useState("");
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
        redirect(`news/?type=${e.target.value}`);
    };
  return (
    <form>
      <select name="type" id="type" onChange={(e) => handleChange(e)}>
        <option value="">ሁሉም</option>
        <option value="ስልጤ">ስልጤ</option>
        <option value="ማዕከላዊ ኢትዮጵያ">ማዕከላዊ ኢትዮጵያ</option>
        <option value="ኢትዮጵያ">ኢትዮጵያ</option>
        <option value="አፍሪካ">አፍሪካ</option>
        <option value="ዓለም">ዓለም</option>
      </select>
    </form>
  );
};

export default Filters;
