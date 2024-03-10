import { useForm } from "react-hook-form";

interface IBookValues {
    title:string,
    author:string,
    genre:string,
    publicationDate:Date,
    description:string,
    coverImage:string

}

const AddBookForm:React.FC = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<IBookValues>();
    const onSubmit = (data:IBookValues)=>{
        console.log(data, 'Book data check');
        reset()
    }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Title</h6>
            <input
              type="text"
              id="title"
              placeholder="Enter your title"
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
              placeholder="Enter your author"
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

        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Genre</h6>
            <input
              type="text"
              id="genre"
              placeholder="Enter your genre"
              className="input input-bordered w-full max-w-xs"
              {...register("genre", {
                required: "genre is required",
              })}
            />

            <div className="label">
              {errors.genre ? (
                <span className="text-red-900">
                  {errors.genre.message?.toString()}
                </span>
              ) : (
                <></>
              )}
            </div>
          </label>
        </div>
        <div className="flex justify-center items-center mb-4">
          <label className="form-control w-full max-w-xs">
            <h6 className="text-xl text-gray-500">Description</h6>
            <input
              type="text"
              id="description"
              placeholder="Enter your description"
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
              placeholder="Enter your date"
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
          <button className="btn btn-primary text-white text-xl uppercase width-full">
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddBookForm