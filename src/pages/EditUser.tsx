import { ArrowLeftOutlined } from "@ant-design/icons";
import { useParams, useNavigate, Link } from "react-router-dom";
import EditUserForm from "../components/EditUserForm";

function EditUser() {
  const { userId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h4>
        <Link to="/users">
          <ArrowLeftOutlined style={{ marginRight: "8px" }} /> Back to Users
        </Link>
      </h4>
      <h2>Edit User</h2>
      <EditUserForm userId={userId} navigate={navigate} />
    </div>
  );
}

export default EditUser;
