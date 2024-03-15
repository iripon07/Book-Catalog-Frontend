import { useParams } from "react-router-dom"
import EditBookForm from "../component/EditBookForm"


const UpdateBook = () => {
    const {id} = useParams<{id:string}>()
  return (
    <div>
      {id ? <EditBookForm id={id} /> : <div>No ID found</div>}
    </div>
  )
}

export default UpdateBook