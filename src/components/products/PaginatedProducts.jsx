import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";


const PaginatedProducts = ({ products, deleteItem, categories }) => {


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (
        <>


            {currentItems.map(({ _id, name, price, category_id, brand }) => {
                const category = categories.find(
                    (cat) => cat._id == category_id
                );
                return (
                    <tr key={_id}>
                        <td className="px-6 py-4 whitespace-nowrap">{name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{price}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {category?.category_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{brand}</td>
                        <td className="text-right px-6 whitespace-nowrap">
                            <a
                                href="#"
                                className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                            >
                                Edit
                            </a>
                            <button
                                onClick={() => deleteItem(_id, "product")}
                                href="#"
                                className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName="flex justify-center"
                pageClassName=" py-2 px-4 rounded hover:bg-orange-500 transition duration-100"
                previousClassName=" py-2 px-4 rounded hover:bg-orange-500 transition duration-100"
                nextClassName=" py-2 px-4 rounded hover:bg-orange-500 transition duration-100"
                activeClassName="bg-orange-500 text-white"
                disabledClassName="text-gray-400 cursor-not-allowed"
                initialPage={0}
                renderOnZeroPageCount={null}

            />
        </>
    );
}

export default PaginatedProducts;
