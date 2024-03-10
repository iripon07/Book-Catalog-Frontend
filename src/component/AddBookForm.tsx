import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";
import { IBookValues } from "../types";
import { genres } from "../types/book";

const AddBookForm: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log(user, 'user check');
  const [addBook, { data, isError, isLoading, isSuccess }] =
    useAddBookMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBookValues>();
  const onSubmit = (data: IBookValues) => {
    const bookData = { ...data, createdBy: user?._id };
    addBook(bookData);
  };

  useEffect(() => {
    if (!isLoading && !isError && isSuccess && data.statusCode === 200) {
      toast.success(`Book Add successfully`);
      navigate("/all-books");
      reset();
    } else if (!isLoading && isError) {
      toast.error(`Book not added`);
      reset();
    }
  }, [data, isError, isLoading, isSuccess, navigate, reset]);

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
              autoComplete="off"
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

            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Description</h6>
            <input
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
