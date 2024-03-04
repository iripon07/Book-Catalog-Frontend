
const book = {
  title: "Himu",
  author: "Humayun Ahmed",
  description:
    "Himu (Bengali: হিমু) is a popular fictional character created by the popular Bangladeshi writer Humayun Ahmed who appears in a disjunct series of novels. Himu lives like a vagabond or a gypsy. He does not have job and, therefore, no source of income.",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627028538i/58612471.jpg",
    genre:'Novel',
    publicationDate:'10/1/1199',

};

const BookCard = () => {
  return (
    <div className="card w-100 shadow-xl">
      <figure>
        <img
          src={book.coverImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{book.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

export default BookCard