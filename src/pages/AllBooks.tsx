import Loading from "../Layout/Loading";
import BookCard from "../component/BookCard";
import { useGetAllBooksFromDBQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/book";

const AllBooks = () => {
  const { data, isError, isLoading, isSuccess } = useGetAllBooksFromDBQuery(
    undefined,
    { refetchOnMountOrArgChange: true }
  );

  const books = data?.data;
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

  if (!isLoading && !isError && isSuccess && books.length === 0) {
    content = (
      <div>
        <h1 className="text-5xl font-bold text-center">
          No Books Available!!!
        </h1>
      </div>
    );
  }
  if (!isLoading && !isError && books.length > 0) {
    content = (
      <div>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {books.map((book: IBook, index: number) => (
              <BookCard book={book} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default AllBooks;
