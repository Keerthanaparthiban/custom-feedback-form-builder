import React, { useState } from "react";
import classNames from "classnames";

interface CreateFormModalProps {
  onCreate: (formName: string) => void;
  onCancel: () => void;
}

const CreateFormModal: React.FC<CreateFormModalProps> = ({
  onCreate,
  onCancel,
}) => {
  const [formName, setFormName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleCreate = () => {
    if (!formName.trim()) {
      setError("Form name cannot be empty.");
      return;
    }
    setError(null);
    onCreate(formName);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="w-[444px] rounded bg-white text-left shadow-lg">
        <h2 className="px-6 pt-4 text-xl font-medium">Create Feedback Form</h2>
        <div className="px-6">
          <input
            type="text"
            className={classNames(
              "w-full border-2 border-x-transparent border-t-transparent pb-1 pt-4 outline-none focus:border-b-black",
              {
                "border-b-red-600": error,
                "border-b-[#0000006B] border-opacity-[42]": !error,
              },
            )}
            placeholder="Enter your form name"
            value={formName}
            onChange={(e) => {
              setFormName(e.target.value);
              if (error) setError(null);
            }}
          />
          {error && <p className="mt-2 text-[13px] text-red-600">{error}</p>}
        </div>

        <div className="flex justify-end space-x-4 px-6 pb-4 pt-8">
          <button
            onClick={handleCreate}
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
