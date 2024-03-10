import { useState } from "react";
import Loading from "../Layout/Loading";
import BookCard from "../component/BookCard";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/book";
import { SearchData } from "../types/index";

const Home = () => {
  const [pageNo, setPageNo] = useState(1)
  const [genre, setGenre] = useState("")
  const [sortBy, setSortBy] = useState("createdAt")
  const [sortOrder, setSortOrder] = useState("desc")
  const [limit, setLimit] = useState("10")
  const [matchSearch, setMatchSearch] = useState("")


  const searchData:SearchData = {
    page:pageNo,
    limit,
    sortBy,
    sortOrder,
    searchTerm:genre?"genre":"",
    exactSearch:genre,
    matchSearch:matchSearch
  }

  const { data, isLoading, isSuccess, isError } = useGetAllBooksQuery(
    searchData,
    { refetchOnMountOrArgChange: true }
  );
  const books = data?.data;

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  console.log(books, "Book from home");

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
  if (!isLoading && !isError && isSuccess && data?.data?.length === 0) {
    content = (
      <div>
        <h1 className="text-5xl font-bold text-center">
          No Books Available!!!
        </h1>
      </div>
    );
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = (
      <div>
        {books.map((book: IBook, index: number) => (
          <BookCard book={book} key={index} />
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Home;
