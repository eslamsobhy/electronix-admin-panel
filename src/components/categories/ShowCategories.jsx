import React, { useState } from "react";

import Confirm from "../confirmation/Confirm";

const tableItems = [
  {
    id: 1,
    name: "Liam James",
    email: "liamjames@example.com",
    position: "Software engineer",
    salary: "$100K",
  },
  {
    id: 2,
    name: "Olivia Emma",
    email: "oliviaemma@example.com",
    position: "Product designer",
    salary: "$90K",
  },
  {
    id: 3,
    name: "William Benjamin",
    email: "william.benjamin@example.com",
    position: "Front-end developer",
    salary: "$80K",
  },
  {
    id: 4,
    name: "Henry Theodore",
    email: "henrytheodore@example.com",
    position: "Laravel engineer",
    salary: "$120K",
  },
  {
    id: 5,
    name: "Amelia Elijah",
    email: "amelia.elijah@example.com",
    position: "Open source manager",
    salary: "$75K",
  },
];

const ShowCategories = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteButton = () => {
    setShowConfirm(true);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
  };

  return (
    <>
      {showConfirm && (
        <Confirm handleCancel={handleCancel} handleConfirm={handleConfirm} />
      )}
      <div className="max-w-screen-xl mx-auto mt-[30px] px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-amber-700 text-xl font-bold sm:text-2xl">
              Categories
            </h3>
          </div>
          <div className="mt-3 md:mt-0">
            <a
              href="#"
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-amber-600 rounded-lg hover:bg-amber-700 active:bg-amber-700 md:text-sm"
            >
              Add new category
            </a>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Category Name</th>
                <th className="py-3 px-6">Image</th>
                <th className="py-3 px-6">Description</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.position}
                  </td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <a
                      href="#"
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => handleDeleteButton(item.id)}
                      href="#"
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShowCategories;