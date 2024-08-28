import React, { useState } from "react";

interface CreateFormModalProps {
  onCreate: (formName: string) => void;
  onCancel: () => void;
}

const CreateFormModal: React.FC<CreateFormModalProps> = ({
  onCreate,
  onCancel,
}) => {
  const [formName, setFormName] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="w-[444px] rounded bg-white text-left shadow-elevation16">
        <h2 className="px-6 pt-4 text-xl font-medium">Create Feedback Form</h2>
        <div className="px-6">
          <input
            type="text"
            className="w-full border border-x-transparent border-b-[#0000006B] border-t-transparent border-opacity-[42] pb-1 pt-4 outline-none focus:border-b-2"
            placeholder="Enter your form name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </div>

        <div className="flex justify-end space-x-4 px-6 pb-4 pt-8">
          <button
            onClick={() => onCreate(formName)}
            className="uppercase text-[#189657] hover:opacity-60"
          >
            Create
          </button>
          <button
            onClick={onCancel}
            className="uppercase text-[#191919] text-opacity-35 hover:opacity-60"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFormModal;
