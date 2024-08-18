"use client"
import React, { useState } from 'react';
import { Grid } from "antd";
const AdminHomePage = () => {
  const [homepageModules, setHomepageModules] = useState({
    hero_section: {
      heading: "", desc: "", image: "",
    },
    industries: {
      heading: "", desc: ""
    },
    hero_sections: {
      heading: "", desc: "", image: "",
    },
    industriesss: {
      heading: "", desc: ""
    },
    hero_sectsaion: {
      heading: "", desc: "", image: "",
    },
    industriasdes: {
      heading: "", desc: ""
    }
  });

  const handleInputChange = (sectionKey: string, fieldKey: string, value: string) => {
    setHomepageModules(prevState => ({
      ...prevState,
      [sectionKey]: {
        ...prevState[sectionKey],
        [fieldKey]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Home Page Configuration</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        {Object.keys(homepageModules).map((sectionKey, index) => {
          const section = homepageModules[sectionKey];
          return (
            <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
              <h2 className="text-xl font-semibold mb-4 capitalize">{sectionKey.replace('_', ' ')}</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(section).map((fieldKey, fieldIndex) => (
                  <div key={fieldIndex} className="flex flex-col">
                    <label className="text-sm font-medium capitalize">
                      {fieldKey}
                    </label>
                    <input
                      type={fieldKey === 'image' ? 'file' : 'text'}
                      value={section[fieldKey]}
                      onChange={(e) =>
                        handleInputChange(sectionKey, fieldKey, e.target.value)
                      }
                      className="border p-2 rounded"
                      accept={fieldKey === 'image' ? 'image/*' : undefined}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div className="col-span-2 text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded shadow"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminHomePage;
