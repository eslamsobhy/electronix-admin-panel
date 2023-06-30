import React, { useState } from "react";

import Confirm from "../confirmation/Confirm";
import Loading from "../loading/Loading";
import { useGlobalContext } from "../../../context";

const ShowCategories = () => {
  const { categories, loading, confirmDeletion } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {confirmDeletion && <Confirm />}
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
              {categories.map(({ _id, category_name, image, description }) => (
                <tr key={_id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {category_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{image}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{description}</td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <a
                      href="#"
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </a>
                    <button
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
