
const book = {
  title: "Himu",
  author: "Humayun Ahmed",
  description:
    "Himu (Bengali: হিমু) is a popular fictional character created by the popular Bangladeshi writer Humayun Ahmed who appears in a disjunct series of novels. Himu lives like a vagabond or a gypsy. He does not have job and, therefore, no source of income in a disjunct series of novels. Himu lives like a vagabond or a gypsy. He does not have job and, therefore, no source of income.",
  coverImage:
    "https://rukminim2.flixcart.com/image/850/1000/ju5u1zk0/regionalbooks/s/t/t/pather-panchali-original-imaffcfj4vryat6a.jpeg?q=20&crop=false",
  genre: "Novel",
  publicationDate: "10/1/1199",
};

const BookCard = () => {

   const words = book.description.split(" ");
   const limitedDescription =
     words.length > 50 ? `${words.slice(0, 30).join(" ")}...` : book.description;
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card w-full shadow-xl">
          <figure className="p-2">
            <img
              className="rounded-lg"
              style={{
                width: "100%",
                maxHeight: "300px",
              }}
              src={book.coverImage}
              alt={book.title}
            />
          </figure>
          <div className="pl-4 pr-1">
            <h2 className="text-2xl font-semibold text-green-600">
              {book.title}
            </h2>
            <h1 className="text-lg font-semibold text-gray-600">
              Author:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.author}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Genre:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.genre}
              </span>
            </h1>
            <p className="text-sm text-gray-400">{limitedDescription}</p>
          </div>
          <div className="flex justify-center my-2">
            {/* <hr className="h-4 w-11/12" /> */}
            <div className="border-t w-11/12 border-gray-300 my-4"></div>
          </div>
          <div>
            <button className="bg-green-300 w-full hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              See Details
            </button>
          </div>
        </div>
        <div className="card w-full shadow-xl">
          <figure className="p-2">
            <img
              className="rounded-lg"
              style={{
                width: "100%",
                maxHeight: "300px",
              }}
              src={book.coverImage}
              alt={book.title}
            />
          </figure>
          <div className="pl-4 pr-1">
            <h2 className="text-2xl font-semibold text-green-600">
              {book.title}
            </h2>
            <h1 className="text-lg font-semibold text-gray-600">
              Author:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.author}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Genre:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.genre}
              </span>
            </h1>
            <p className="text-sm text-gray-400">{limitedDescription}</p>
          </div>
          <div className="flex justify-center my-2">
            {/* <hr className="h-4 w-11/12" /> */}
            <div className="border-t w-11/12 border-gray-300 my-4"></div>
          </div>
          <div>
            <button className="bg-green-300 w-full hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              See Details
            </button>
          </div>
        </div>
        <div className="card w-full shadow-xl">
          <figure className="p-2">
            <img
              className="rounded-lg"
              style={{
                width: "100%",
                maxHeight: "300px",
              }}
              src={book.coverImage}
              alt={book.title}
            />
          </figure>
          <div className="pl-4 pr-1">
            <h2 className="text-2xl font-semibold text-green-600">
              {book.title}
            </h2>
            <h1 className="text-lg font-semibold text-gray-600">
              Author:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.author}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Genre:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.genre}
              </span>
            </h1>
            <p className="text-sm text-gray-400">{limitedDescription}</p>
          </div>
          <div className="flex justify-center my-2">
            {/* <hr className="h-4 w-11/12" /> */}
            <div className="border-t w-11/12 border-gray-300 my-4"></div>
          </div>
          <div>
            <button className="bg-green-300 w-full hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              See Details
            </button>
          </div>
        </div>
        <div className="card w-full shadow-xl">
          <figure className="p-2">
            <img
              className="rounded-lg"
              style={{
                width: "100%",
                maxHeight: "300px",
              }}
              src={book.coverImage}
              alt={book.title}
            />
          </figure>
          <div className="pl-4 pr-1">
            <h2 className="text-2xl font-semibold text-green-600">
              {book.title}
            </h2>
            <h1 className="text-lg font-semibold text-gray-600">
              Author:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.author}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Genre:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.genre}
              </span>
            </h1>
            <p className="text-sm text-gray-400">{limitedDescription}</p>
          </div>
          <div className="flex justify-center my-2">
            {/* <hr className="h-4 w-11/12" /> */}
            <div className="border-t w-11/12 border-gray-300 my-4"></div>
          </div>
          <div>
            <button className="bg-green-300 w-full hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              See Details
            </button>
          </div>
        </div>
        <div className="card w-full shadow-xl">
          <figure className="p-2">
            <img
              className="rounded-lg"
              style={{
                width: "100%",
                maxHeight: "300px",
              }}
              src={book.coverImage}
              alt={book.title}
            />
          </figure>
          <div className="pl-4 pr-1">
            <h2 className="text-2xl font-semibold text-green-600">
              {book.title}
            </h2>
            <h1 className="text-lg font-semibold text-gray-600">
              Author:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.author}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Genre:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.genre}
              </span>
            </h1>
            <p className="text-sm text-gray-400">{limitedDescription}</p>
          </div>
          <div className="flex justify-center my-2">
            {/* <hr className="h-4 w-11/12" /> */}
            <div className="border-t w-11/12 border-gray-300 my-4"></div>
          </div>
          <div>
            <button className="bg-green-300 w-full hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              See Details
            </button>
          </div>
        </div>
        <div className="card w-full shadow-xl">
          <figure className="p-2">
            <img
              className="rounded-lg"
              style={{
                width: "100%",
                maxHeight: "300px",
              }}
              src={book.coverImage}
              alt={book.title}
            />
          </figure>
          <div className="pl-4 pr-1">
            <h2 className="text-2xl font-semibold text-green-600">
              {book.title}
            </h2>
            <h1 className="text-lg font-semibold text-gray-600">
              Author:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.author}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Genre:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.genre}
              </span>
            </h1>
            <p className="text-sm text-gray-400">{limitedDescription}</p>
          </div>
          <div className="flex justify-center my-2">
            {/* <hr className="h-4 w-11/12" /> */}
            <div className="border-t w-11/12 border-gray-300 my-4"></div>
          </div>
          <div>
            <button className="bg-green-300 w-full hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              See Details
            </button>
          </div>
        </div>
        <div className="card w-full shadow-xl">
          <figure className="p-2">
            <img
              className="rounded-lg"
              style={{
                width: "100%",
                maxHeight: "300px",
              }}
              src={book.coverImage}
              alt={book.title}
            />
          </figure>
          <div className="pl-4 pr-1">
            <h2 className="text-2xl font-semibold text-green-600">
              {book.title}
            </h2>
            <h1 className="text-lg font-semibold text-gray-600">
              Author:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.author}
              </span>
            </h1>
            <h1 className="text-md font-semibold text-gray-500">
              Genre:{" "}
              <span className="text-sm font-sans text-gray-400">
                {book.genre}
              </span>
            </h1>
            <p className="text-sm text-gray-400">{limitedDescription}</p>
          </div>
          <div className="flex justify-center my-2">
            {/* <hr className="h-4 w-11/12" /> */}
            <div className="border-t w-11/12 border-gray-300 my-4"></div>
          </div>
          <div>
            <button className="bg-green-300 w-full hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard