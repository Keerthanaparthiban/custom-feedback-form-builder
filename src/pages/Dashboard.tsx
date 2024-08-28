import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import FormCard from "../components/FormCard";
import CreateFormModal from "../components/CreateFormModal";

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [forms, setForms] = useState([
    { title: "Delivery", submitted: 10, viewed: 55, datePublished: "8/8/2024" },
    {
      title: "Product Quality",
      submitted: 100,
      viewed: 300,
      datePublished: "07/8/2024",
    },
  ]);

  const navigate = useNavigate();

  const handleCreateForm = (formName: string) => {
    if (formName) {
      setForms([
        ...forms,
        {
          title: formName,
          submitted: 0,
          viewed: 0,
          datePublished: new Date().toLocaleDateString(),
        },
      ]);

      // Redirect to form builder
      navigate(`/create-form/${formName}`);
    }
    setShowModal(false);
  };

  console.log(forms); // Debugging: Ensure the forms array is populated

  return (
    <div>
      <div className="flex items-center bg-white drop-shadow-lg">
        <img src={logo} className="h-16" alt="logo" />
        <h1 className="text-2xl font-medium uppercase">user feedback</h1>
      </div>
      <div className="flex space-x-4 p-8">
        <div
          className="flex h-[379px] w-[306px] cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md"
          onClick={() => setShowModal(true)}
        >
          <div className="pb-[26px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="69"
              height="69"
              viewBox="0 0 69 69"
              fill="none"
            >
              <path
                d="M4.16666 34.4998H64.8333M34.5 4.1665V64.8332"
                stroke="#2F4ED7"
                strokeWidth="7.58333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-medium">New form</span>
        </div>
        {forms.map((form, index) => (
          <FormCard
            key={index}
            title={form.title}
            submitted={form.submitted}
            viewed={form.viewed}
            datePublished={form.datePublished}
          />
        ))}
      </div>

      {showModal && (
        <CreateFormModal
          onCreate={handleCreateForm}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
