import { useParams } from "react-router-dom";
import Loading from "../component/Loading";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } = useGetSingleBookQuery(id);
  console.log(id, "book id");
  console.log(isError, "error");
  console.log(isLoading, "loading");
  console.log(isSuccess, "success");
  console.log(data, "data ");
  console.log(useParams(), "paramas");
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

  return <div>{content}</div>;
};

export default BookDetails;
