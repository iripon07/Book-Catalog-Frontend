import { Link } from "react-router-dom";
import { IBook } from "../types/book";

interface BookProps {
  book: IBook;
}

const BookCard :React.FC<BookProps> = ({ book }) => {
  
  const {author, title, description, coverImage, genre} = book
   const words = description.split(" ");
   const limitedDescription =
     words.length > 50 ? `${words.slice(0, 20).join(" ")}...` : description;
  return (
    <div className="card w-full shadow-xl">
      <figure className="p-2">
        <img
          className="rounded-lg"
          style={{
            width: "100%",
            maxHeight: "300px",
          }}
          src={coverImage}
          alt={title}
        />
      </figure>
      <div className="pl-4 pr-1">
        <h2 className="text-2xl font-semibold text-green-600">{title}</h2>
        <h1 className="text-lg font-semibold text-gray-600">
          Author:{" "}
          <span className="text-sm font-sans text-gray-400">{author}</span>
        </h1>
        <h1 className="text-md font-semibold text-gray-500">
          Genre:{" "}
          <span className="text-sm font-sans text-gray-400">{genre}</span>
        </h1>
        <p className="text-sm text-gray-400">{limitedDescription}</p>
      </div>
      <div className="flex justify-center my-2">
        {/* <hr className="h-4 w-11/12" /> */}
        <div className="border-t w-11/12 border-gray-300 my-4"></div>
      </div>
      <div>
        <Link to={`/book-details/${book._id}`}>
          <button className="bg-green-300 w-full hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookCard