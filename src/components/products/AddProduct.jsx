import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

import { useGlobalContext } from "../../../context";

const AddProduct = () => {
  const { categories } = useGlobalContext();

  const {
    register,
    handleSubmit,
    formState: { error },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const { name, price, brand, category_name, images } = data;
    const details = { screen_size: "123", owner: "John" };
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category_name", category_name);
    formData.append("details", JSON.stringify(details));
    formData.append("brand", brand);

    [...images].forEach((img) => {
      formData.append("images", img);
    });

    await axios.post("http://localhost:8000/products", formData);
    toast("Product created successfully!");
    reset();
  };

  return (
    <section className="w-[100%] flex justify-center items-center mt-[30px]">
      <article className="w-[80%]">
        <div className="max-w-lg">
          <h3 className="text-amber-700 text-xl font-bold sm:text-2xl">
            Add new product
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-container mt-[50px] flex flex-col gap-[2rem] justify-center items-center"
        >
          <article className="inputs flex flex-wrap gap-[4rem] justify-between">
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-700"
              >
                Name
              </label>

              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="iPhone 8"
                className="mt-1 rounded-md w-[25rem] border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="details"
                className="block text-xs font-medium text-gray-700"
              >
                Details
              </label>

              <input
                {...register("details")}
                type="text"
                id="details"
                placeholder="This phone has a front camera with blah blah blah"
                className="mt-1 rounded-md w-[25rem] border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="price"
                className="block text-xs font-medium text-gray-700"
              >
                Price
              </label>

              <input
                {...register("price")}
                type="text"
                id="price"
                placeholder="123.22 EGP"
                className="mt-1 rounded-md w-[25rem] border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="brand"
                className="block text-xs font-medium text-gray-700"
              >
                Brand
              </label>

              <select
                {...register("brand")}
                id="brand"
                className="mt-1 w-[25rem] rounded-md border-gray-200 text-gray-700 sm:text-sm"
              >
                <option value="">Please select</option>
                <option value="JM">John Mayer</option>
                <option value="SRV">Stevie Ray Vaughn</option>
                <option value="JH">Jimi Hendrix</option>
                <option value="BBK">B.B King</option>
                <option value="AK">Albert King</option>
                <option value="BG">Buddy Guy</option>
                <option value="EC">Eric Clapton</option>
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="category"
                className="block text-xs font-medium text-gray-700"
              >
                Category
              </label>

              <select
                {...register("category_name")}
                id="category"
                className="mt-1 w-[25rem] rounded-md border-gray-200 text-gray-700 sm:text-sm"
              >
                <option value="">Please select</option>
                {categories.map((category) => {
                  return (
                    <option key={category._id} value={category.category_name}>
                      {category.category_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="images"
                className="block text-xs font-medium text-gray-700"
              >
                Images
              </label>

              <input
                {...register("images")}
                multiple
                type="file"
                id="images"
                className="mt-1 rounded-md w-[25rem] border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
          </article>
          <div className="my-[30px]">
            <button className="inline-block px-4 py-2 text-white duration-150 font-medium bg-amber-600 rounded-lg hover:bg-amber-700 active:bg-amber-700 md:text-sm">
              Add Product
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default AddProduct;
