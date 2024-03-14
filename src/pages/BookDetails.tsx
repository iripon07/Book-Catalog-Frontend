import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiSolidHeart, BiSolidPencil } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import DeleteBook from "../component/DeleteBook";
import Loading from "../component/Loading";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import { useAddBookToWishListMutation } from "../redux/features/wishList/wishListApi";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: Data,
    isError: error,
    isLoading: loading,
    isSuccess: success,
  } = useGetSingleBookQuery(id);
  const [
    addBookToWishList,
    {
      data: wishListData,
      isError: wishListError,
      isLoading: wishListLoading,
      isSuccess: wishListSuccess,
    },
  ] = useAddBookToWishListMutation();
  console.log(wishListData, wishListError, wishListLoading, wishListSuccess);

  // const [show, setShow] = useState(false);
  // const [deleteShow, setDeleteShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const handleDeleteClose = () => setDeleteShow(false);
  // const handleDeleteShow = () => setDeleteShow(true);

  const handleEditBook = () => {
    navigate(`/edit-book/${id}`);
  };

  const book = Data?.data;

  let content;

  if (loading) {
    content = <Loading />;
  }
  if (!loading && error) {
    content = (
      <div className="flex justify-center items-center">
        <h5 className="text-center text-red-600 font-bold">
          Something went wrong!!!
        </h5>
      </div>
    );
  }

  const handleAddToWishList = () => {
    addBookToWishList({ bookId: book._id });
  };
  useEffect(() => {
    if (
      !wishListLoading &&
      !wishListError &&
      wishListSuccess &&
      wishListData.statusCode === 200
    ) {
      toast.success(`Book add to wish list successfully!`);
    } else {
      toast.error(`Something went wrong!!!`);
    }
  }, [wishListData, wishListError, wishListLoading, wishListSuccess]);

  if (!loading && !error && success && Data?.statusCode === 200) {
    content = (
      <div className="max-w-screen-xl mx-auto border-2 mt-10">
        <div className="flex flex-col md:flex-row">
          <img
            className="w-auto"
            style={{ maxHeight: "500px", maxWidth: "500px" }}
            src={Data?.data?.coverImage}
            alt={Data?.data?.title}
          />
          <div className="p-2 md:p-8">
            <h2 className="text-2xl font-semibold text-green-600">
              {" "}
              {Data?.data?.title}
            </h2>
            <h1 className="text-lg font-semibold text-gray-600">
              Author:{" "}
              <span className="text-sm font-sans text-gray-400">
                {Data?.data?.author}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Genre:{" "}
              <span className="text-sm font-sans text-gray-400">
                {Data?.data?.genre}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Publication Date:{" "}
              <span className="text-sm font-sans text-gray-400">
                {Data?.data?.publicationDate}
              </span>
            </h1>
            <p className="text-sm text-gray-400">{Data?.data?.description}</p>

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
                onClick={() => handleAddToWishList()}
                className="px-4 mr-4 mt-4  py-2 flex justify-center items-center text-green-600 rounded-xl text-2xl hover:bg-green-600 hover:text-white"
                style={{ border: `1px solid green` }}
              >
                <span className="mr-1">
                  <BiSolidHeart />
                </span>
                Wish List
              </button>
              <button
                onClick={() => handleEditBook()}
                className="px-4 mr-4 mt-4 py-2 flex justify-center items-center text-green-600 rounded-xl text-2xl hover:bg-green-600 hover:text-white"
                style={{ border: `1px solid green` }}
              >
                <span className="mr-1">
                  <BiSolidPencil />
                </span>
                Edit Book
              </button>
              <button
                onClick={() => setModalOpen(true)}
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
      {modalOpen && (
        <DeleteBook
          modalOpen={modalOpen}
          // show={deleteShow}
          // handleClose={handleDeleteClose}
          id={id!}
          book={book}
        />
      )}
    </>
  );
};

export default BookDetails;
