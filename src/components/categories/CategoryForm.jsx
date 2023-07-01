import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { category_name, image, description } = data;

    const formData = new FormData();
    formData.append("category_name", category_name);
    formData.append("image", image[0]);
    formData.append("description", description);

    await axios.post("http://localhost:8000/categories", formData);
    toast("Category added successfully!");
    reset();
  };

  return (
    <section className="w-[100%] flex justify-center items-center mt-[30px]">
      <article className="w-[80%]">
        <div className="max-w-lg">
          <h3 className="text-amber-700 text-xl font-bold sm:text-2xl">
            Add new category
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-container mt-[50px] flex flex-col gap-[2rem] justify-center items-center"
        >
          <article className="inputs flex flex-wrap gap-[4rem]">
            <div className="form-group">
              <label
                htmlFor="catName"
                className="block text-xs font-medium text-gray-700"
              >
                Category Name
              </label>

              <input
                {...register("category_name")}
                type="text"
                id="catName"
                placeholder="Laptops"
                className="mt-1 rounded-md w-[25rem] border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="description"
                className="block text-xs font-medium text-gray-700"
              >
                Description
              </label>

              <input
                {...register("description")}
                type="text"
                id="description"
                placeholder="description for laptops"
                className="mt-1 rounded-md w-[25rem] border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div className="form-group w-[90%] pl-[12px]">
              <label
                htmlFor="image"
                className="block text-xs font-medium text-gray-700"
              >
                Image
              </label>

              <input
                {...register("image")}
                type="file"
                id="image"
                className="mt-1 rounded-md w-[25rem] border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
          </article>
          <div className="mt-3 md:mt-0">
            <button className="inline-block px-4 py-2 text-white duration-150 font-medium bg-amber-600 rounded-lg hover:bg-amber-700 active:bg-amber-700 md:text-sm">
              Save category
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CategoryForm;
