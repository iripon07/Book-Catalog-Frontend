import { useState } from "react";
import Loading from "../component/Loading";
import BookCard from "../component/BookCard";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/book";
import { SearchData } from "../types/index";

const Home = () => {
  const [pageNo] = useState(1);
  const [genre] = useState("");
  const [sortBy] = useState("createdAt");
  const [sortOrder] = useState("desc");
  const [limit] = useState("10");
  const [matchSearch] = useState("");

  const searchData: SearchData = {
    page: pageNo,
    limit,
    sortBy,
    sortOrder,
    searchTerm: genre ? "genre" : "",
    exactSearch: genre,
    matchSearch: matchSearch,
  };

  const { data, isLoading, isSuccess, isError } = useGetAllBooksQuery(
    searchData,
    { refetchOnMountOrArgChange: true }
  );
  const books = data?.data.slice(-6);
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

export default Home;
