import { useParams } from "react-router-dom";
import Loading from "../component/Loading";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } = useGetSingleBookQuery(id);

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

  if(!isLoading && !isError && isSuccess && data?.statusCode===200){
    content = (
      <div className="max-w-screen-xl mx-auto h-11/12">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={data?.data?.coverImage}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    );
  }


  return <div>{content}</div>;
};

export default BookDetails;
