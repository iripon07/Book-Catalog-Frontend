import { BiSolidPencil, BiSolidHeart } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Loading from "../component/Loading";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import { useState } from "react";
import DeleteBook from "../component/DeleteBook";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } = useGetSingleBookQuery(id);

  const [show, setShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const handleClose = () => setShow(false); // Fix: Wrap setShow inside a function
  const handleShow = () => setShow(true); // Fix: Wrap setShow inside a function
  const handleDeleteClose = () => setDeleteShow(false); // Fix: Wrap setDeleteShow inside a function
  const handleDeleteShow = () => setDeleteShow(true); //

  const book = data?.data;

  let content;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = (
      <div className="flex justify-center items-center">
        <h5 className="text-center text-red-600 font-bold">
          Something went wrong!!!
        </h5>
      </div>
    );
  }

  if (!isLoading && !isError && isSuccess && data?.statusCode === 200) {
    content = (
      <div className="max-w-screen-xl mx-auto border-2 mt-10">
        <div className="flex flex-col md:flex-row">
          <img
            className="w-auto"
            style={{ maxHeight: "500px", maxWidth: "500px" }}
            src={data?.data?.coverImage}
            alt={data?.data?.title}
          />
          <div className="p-2 md:p-8">
            <h2 className="text-2xl font-semibold text-green-600">
              {" "}
              {data?.data?.title}
            </h2>
            <h1 className="text-lg font-semibold text-gray-600">
              Author:{" "}
              <span className="text-sm font-sans text-gray-400">
                {data?.data?.author}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Genre:{" "}
              <span className="text-sm font-sans text-gray-400">
                {data?.data?.genre}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Publication Date:{" "}
              <span className="text-sm font-sans text-gray-400">
                {data?.data?.publicationDate}
              </span>
            </h1>
            <p className="text-sm text-gray-400">{data?.data?.description}</p>

            <div className="sm:flex">
              <button
                className="px-4 py-2 mr-4 mt-4 flex justify-center items-center text-green-600 rounded-xl text-2xl hover:bg-green-600 hover:text-white"
                style={{ border: `1px solid green` }}
              >
                <span className="mr-1">
                  <FaBookReader />
                </span>
                Reading Book
              </button>
              <button
                className="px-4 mr-4 mt-4  py-2 flex justify-center items-center text-green-600 rounded-xl text-2xl hover:bg-green-600 hover:text-white"
                style={{ border: `1px solid green` }}
              >
                <span className="mr-1">
                  <BiSolidHeart />
                </span>
                Wish List
              </button>
              <button
                className="px-4 mr-4 mt-4 py-2 flex justify-center items-center text-green-600 rounded-xl text-2xl hover:bg-green-600 hover:text-white"
                style={{ border: `1px solid green` }}
              >
                <span className="mr-1">
                  <BiSolidPencil />
                </span>
                Edit Book
              </button>
              <button
                onClick={handleDeleteShow!}
                className="px-4 mr-4 mt-4 py-2 flex justify-center items-center text-green-600 rounded-xl text-2xl hover:bg-green-600 hover:text-white"
                style={{ border: `1px solid green` }}
              >
                <span className="mr-1">
                  <MdDeleteForever />
                </span>
                Delete Book
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>{content}</div>
      {deleteShow && (
        <DeleteBook
          show={deleteShow}
          handleClose={handleDeleteClose}
          id={id!}
          book={book}
        />
      )}
    </>
  );
};

export default BookDetails;
