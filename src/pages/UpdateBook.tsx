import { useParams } from "react-router-dom"
import EditBookForm from "../component/EditBookForm"


const UpdateBook = () => {
    const {id} = useParams()
  return (
    <div>
        <EditBookForm id={id}/>
    </div>
  )
}

export default UpdateBook