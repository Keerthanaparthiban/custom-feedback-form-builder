import React from "react";
import form from "../assets/form.png";

interface FormCardProps {
  title: string;
  submitted: number;
  viewed: number;
  datePublished: string;
}

const FormCard: React.FC<FormCardProps> = ({
  title,
  submitted,
  viewed,
  datePublished,
}) => {
  return (
    <div className="h-[379px] w-[306px] rounded-lg bg-white font-medium shadow-lg">
      <div className="flex h-[68px] w-full items-center justify-center rounded-t-lg bg-[#F5D563]">
        <img src={form} alt="Form Icon" className="h-12" />
      </div>
      <div className="p-4 text-left">
        <h3 className="pb-4 text-[20px] font-bold">{title}</h3>
        <p className="flex items-center justify-between text-[13px] leading-8 text-[#8E8E8E]">
          Submitted <span className="text-[#000000]">{submitted}</span>
        </p>
        <p className="flex items-center justify-between text-[13px] leading-8 text-[#8E8E8E]">
          Viewed <span className="text-[#000000]">{viewed}</span>
        </p>
        <p className="flex items-center justify-between text-[13px] leading-8 text-[#8E8E8E]">
          Date Published <span className="text-[#000000]">{datePublished}</span>
        </p>
      </div>
      <div className="mt-6">
        <button className="rounded bg-[#9C27B0] px-[22px] py-2 text-[15px] uppercase text-white">
          View Submission
        </button>
        <div className="mt-6 flex items-center justify-center space-x-2">
          <button className="rounded bg-[#2E7D32] px-[22px] py-2 text-[15px] uppercase text-white">
            Edit
          </button>
          <button className="rounded bg-[#2196F3] px-[22px] py-2 text-[15px] uppercase text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
