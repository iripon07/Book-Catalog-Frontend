import { IBook } from "../types/book";

interface FeedBackFormProps {
  id: string;
  show: boolean;
  book: IBook;
  handleClose: () => void;
}

const DeleteBook: React.FC<FeedBackFormProps> = ({
  id,
  show,
  book,
  handleClose,

//   const handleDelete = () =>{

//   }

}) => {
  return (
    <>
      <dialog id="my_modal_3" className="modal" show={show} onHide={handleClose}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Delete Book</h3>
          <p className="py-4 text-red-700">
            Are you sure want to delete the book?
          </p>
        </div>
        <div className="flex">
          <button
          onClick={handleClose}
            className="px-4 mr-4 mt-4 py-2 flex justify-center items-center text-green-600 rounded-xl text-2xl hover:bg-green-600 hover:text-white"
            style={{ border: `1px solid green` }}
          >
            Cancel
          </button>
          <button
        //   onClick={()=>handleDelete()}
            className="px-4 mr-4 mt-4 py-2 flex justify-center items-center text-green-600 rounded-xl text-2xl hover:bg-green-600 hover:text-white"
            style={{ border: `1px solid green` }}
          >
            Delete Book
          </button>
        </div>
      </dialog>
    </>
  );
};

export default DeleteBook;
