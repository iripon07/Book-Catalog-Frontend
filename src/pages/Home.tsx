import Loading from "../Layout/Loading";
import BookCard from "../component/BookCard";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/book";


const Home = () => {
  const { data, isLoading, isSuccess, isError } = useGetAllBooksQuery(
    undefined,
    { refetchOnMountOrArgChange: true, pollingInterval: 3000 }
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
  if (!isLoading && !isError && data?.data?.length === 0) {
    content = (
      <div>
        <h1 className="text-5xl font-bold text-center">No Books Available!!!</h1>
      </div>
    );
  }
  if(!isLoading && !isError && data?.data?.length > 0){
    content = (
      <div>
        {
          books.map((book:IBook, index:number) => (
            <BookCard book={book} key={index}/>
          ))
        }
      </div>
    )
  }

  return <div>{content}</div>;
};

export default Home;
