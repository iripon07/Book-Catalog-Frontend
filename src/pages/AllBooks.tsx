import { useState } from "react";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import { SearchData } from "../types";

const AllBooks = () => {

   const [pageNo, setPageNo] = useState(1);
   const [genre, setGenre] = useState("");
   const [sortBy, setSortBy] = useState("createdAt");
   const [sortOrder, setSortOrder] = useState("desc");
   const [limit, setLimit] = useState("10");
   const [matchSearch, setMatchSearch] = useState("");

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
  const books = data?.data;

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  console.log(books, "Book from All Books");

  return <div>AllBooks: {books.length}</div>;
};

export default AllBooks;
