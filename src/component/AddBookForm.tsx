import { useForm } from "react-hook-form";
import { useAddBookMutation } from "../redux/features/book/bookApi";
import { IBookValues } from "../types";
import { genres } from "../types/book";


const AddBookForm: React.FC = () => {
    const [addBook, {data, isError, isLoading,isSuccess}] = useAddBookMutation()
    console.log(data, isLoading, isError, isSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBookValues>();
  const onSubmit = (data: IBookValues) => {
    console.log(data, "Book data check");
    addBook({title:data.title, author:data.author, genre:data.genre, publicationDate:data.publicationDate, description:data.description, coverImage:data.coverImage})
    console.log(data, "Book data check");
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Title</h6>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              className="input input-bordered w-full max-w-xs"
              {...register("title", {
                required: "title is required",
              })}
            />

            <div className="label">
              {errors.title ? (
                <span className="text-red-900">
                  {errors.title.message?.toString()}
                </span>
              ) : (
                <></>
              )}
            </div>
          </label>
        </div>

        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Author</h6>
            <input
              type="text"
              id="author"
              placeholder="Enter author"
              className="input input-bordered w-full max-w-xs"
              {...register("author", {
                required: "Author is required",
              })}
            />

            <div className="label">
              {errors.author ? (
                <span className="text-red-900">
                  {errors.author.message?.toString()}
                </span>
              ) : (
                <></>
              )}
            </div>
          </label>
        </div>

        <div className="flex flex-col justify-center items-center mb-4">
          {/* <h6 className="text-xl text-gray-500">Genre</h6> */}
          {/* <label className="label">
            <span className="label-text">Genre</span>
          </label> */}
          <select
          required
            typeof="text"
            id="genre"
            className="select select-bordered w-full max-w-xs"
            {...register("genre", {
              required: "title is required",
            })}
          >
            <option value="">Select Genre</option>
            {/* <option>Java</option>
            <option>Go</option>
            <option>C</option>
            <option>C#</option>
            <option>C++</option>
            <option>Rust</option>
            <option>JavaScript</option>
            <option>Python</option> */}
            {
                genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))
            }
            {/* {data?.data?.map((genre, index) => (
              <option key={index} className="bg-accent" value={genre.genre}>
                {genre.genre}
              </option>
            ))} */}
          </select>
        </div>

        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Description</h6>
            <input
              type="text"
              id="description"
              placeholder="Enter description"
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: "description is required",
              })}
            />

            <div className="label">
              {errors.description ? (
                <span className="text-red-900">
                  {errors.description.message?.toString()}
                </span>
              ) : (
                <></>
              )}
            </div>
          </label>
        </div>

        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Publication Date</h6>
            <input
              type="date"
              id="date"
              placeholder="Enter date"
              className="input input-bordered w-full max-w-xs"
              {...register("publicationDate", {
                required: "date is required",
              })}
            />

            <div className="label">
              {errors.publicationDate ? (
                <span className="text-red-900">
                  {errors.publicationDate.message?.toString()}
                </span>
              ) : (
                <></>
              )}
            </div>
          </label>
        </div>

        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Image</h6>
            <input
              type="text"
              id="coverImage"
              placeholder="Enter image url"
              className="input input-bordered w-full max-w-xs"
              {...register("coverImage", {
                required: "image is required",
              })}
            />

            <div className="label">
              {errors?.coverImage ? (
                <span className="text-red-900">
                  {errors?.coverImage?.message?.toString()}
                </span>
              ) : (
                <></>
              )}
            </div>
          </label>
        </div>

        <div className="card-actions flex justify-center items-center ">
          <button
            className="btn btn-primary text-white text-xl uppercase width-full"
            // disabled={!genre}
            type="submit"
          >
            Add Book
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBookForm;
