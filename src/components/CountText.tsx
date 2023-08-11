import React from "react";

type Props = {
  text: string;
  suffix: string;
};

const CountText = ({ text, suffix }: Props) => {
  return (
    <div className="font-mono inline-flex items-baseline gap-1 bg-white rounded-md px-3 py-2 border">
      <span>{text}</span>
      <small>{suffix}</small>
    </div>
  );
};

export default CountText;
