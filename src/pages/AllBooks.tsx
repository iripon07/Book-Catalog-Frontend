import { useGetAllBooksQuery } from "../redux/features/book/bookApi";

const AllBooks = () => {
  const { data, isLoading, isSuccess, isError } = useGetAllBooksQuery({});
  const books = data?.data;

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  console.log(books, "Book from All Books");

  return <div>AllBooks: {books.length}</div>;
};

export default AllBooks;
