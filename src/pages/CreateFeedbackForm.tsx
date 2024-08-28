import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  TextareaIcon,
  NumericRatingIcon,
  StarRatingIcon,
  SmileyRatingIcon,
  SingleLineInputIcon,
  RadioButtonIcon,
  CategoriesIcon,
  EditIcon,
} from "../components/Icons";
import "../styles/CustomSwitch.css";

interface FieldOption {
  label: string;
  icon: React.ReactElement;
}

const CreateFeedbackForm: React.FC = () => {
  const [formTitle, setFormTitle] = useState("Generic Website Rating");
  const [showURL, setShowURL] = useState(true);
  const [showDate, setShowDate] = useState(true);
  const [showTime, setShowTime] = useState(true);
  const [time, setTime] = useState<string>("");

  const handleSwitchChange =
    (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === "URL") setShowURL(e.target.checked);
      if (type === "Date") setShowDate(e.target.checked);
      if (type === "Time") setShowTime(e.target.checked);
    };

  const fieldOptions: FieldOption[] = [
    {
      label: "Textarea",
      icon: <TextareaIcon />,
    },
    {
      label: "Numeric rating",
      icon: <NumericRatingIcon />,
    },
    {
      label: "Star rating",
      icon: <StarRatingIcon />,
    },
    {
      label: "Smiley rating",
      icon: <SmileyRatingIcon />,
    },
    {
      label: "Single line input",
      icon: <SingleLineInputIcon />,
    },
    {
      label: "Radio button",
      icon: <RadioButtonIcon />,
    },
    {
      label: "Categories",
      icon: <CategoriesIcon />,
    },
  ];

  return (
    <div className="flex h-screen flex-col">
      <div className="navbar flex items-center justify-between bg-white pr-4 text-white drop-shadow-lg">
        <div className="flex items-center text-black">
          <img src={logo} className="h-16" alt="logo" />
          <h1 className="text-2xl font-medium uppercase">user feedback</h1>
        </div>

        <div className="space-x-8">
          <button className="rounded bg-[#2196F3] px-4 py-2 uppercase text-white">
            save
          </button>
          <button className="rounded bg-[#2E7D32] px-4 py-2 uppercase text-white">
            publish
          </button>
        </div>
      </div>

      <div className="content flex flex-1">
        <div className="flex flex-1 flex-col items-center justify-center bg-gray-100 p-10">
          <div className="min-w-2xl min-h-[600px] w-full max-w-lg rounded-[10px] bg-white shadow-lg">
            <div className="flex items-center rounded-t-[10px] border-b bg-[#5578F4] p-4 text-white">
              <input
                type="text"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                className="border-none bg-transparent text-lg font-semibold focus:outline-none"
              />
              <div className="cursor-pointer">
                <EditIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-white p-6 text-left shadow-lg">
          <h3 className="mb-4 text-lg font-semibold">Add fields</h3>
          <div className="space-y-3">
            {fieldOptions.map((option) => (
              <button
                key={option.label}
                className="flex w-full items-center space-x-2 rounded p-2 text-left hover:bg-blue-50"
              >
                {option.icon}
                <span className="font-normal text-[#2B2B2B]">
                  {option.label}
                </span>
                <span className="absolute right-8 text-4xl font-medium text-[#106EA4]">
                  +
                </span>
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-4 px-2 text-[15px] font-medium">
            <div className="switch-container">
              <label className="switch-label flex items-center justify-between">
                <span>Show based on URL conditions</span>
                <div className="switch">
                  <input
                    type="checkbox"
                    checked={showURL}
                    onChange={handleSwitchChange("URL")}
                    className="switch-checkbox"
                  />
                  <span className="slider"></span>
                </div>
              </label>
              {showURL && (
                <input
                  type="text"
                  placeholder="http://"
                  className="mt-1 w-full border-b-2 border-black py-2 text-base text-customGray outline-none focus:border-[#106EA4]"
                />
              )}
            </div>

            <div className="relative">
              <div className="flex items-center justify-between">
                <label className="mt-4 block font-medium text-gray-700">
                  Show on a specific date
                </label>
                <div className="switch mt-4">
                  <input
                    type="checkbox"
                    id="date-switch"
                    checked={showDate}
                    onChange={handleSwitchChange("Date")}
                  />
                  <label htmlFor="date-switch" className="slider"></label>
                </div>
              </div>
              {showDate && (
                <div className="relative">
                  <label className="absolute left-3 top-2 bg-white px-1 text-xs font-medium text-black text-opacity-60">
                    Start Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    className="mt-4 w-full rounded-md border-2 border-gray-300 px-3 py-2 text-base font-normal outline-none focus:border-[#106EA4] focus:text-black"
                    onInput={(e) => {
                      let value = e.currentTarget.value.replace(/[^0-9/]/g, ""); // Remove non-numeric and non-slash characters
                      if (value.length > 2 && value[2] !== "/") {
                        value = value.slice(0, 2) + "/" + value.slice(2);
                      }
                      if (value.length > 5 && value[5] !== "/") {
                        value = value.slice(0, 5) + "/" + value.slice(5);
                      }
                      e.currentTarget.value = value.slice(0, 10); // Limit to 10 characters
                    }}
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <div className="flex items-center justify-between">
                <label className="mb-4 mt-4 block font-medium text-gray-700">
                  Show on a specific time
                </label>
                <div className="switch">
                  <input
                    type="checkbox"
                    id="time-switch"
                    checked={showTime}
                    onChange={handleSwitchChange("Time")}
                  />
                  <label htmlFor="time-switch" className="slider"></label>
                </div>
              </div>
              {showTime && (
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-black text-opacity-60">
                    Select Time
                  </label>
                  <input
                    type="time"
                    className="w-full rounded-md border-2 border-gray-300 px-3 py-2 text-base font-normal outline-none focus:border-[#106EA4] focus:text-black"
                    placeholder="hh:mm aa"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFeedbackForm;
