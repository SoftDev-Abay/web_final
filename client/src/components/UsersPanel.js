import { React, useState, useEffect } from "react";
import AddUserModal from "./AddUserModal";

const UsersPanel = () => {
  const [visibleAddUserModal, setVisibleAddUserModal] = useState(false);

  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const responce = await fetch("http://localhost:5000/users");
      const json_responce = await responce.json();
      setUsers(json_responce);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const responce = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });
      const json_responce = await responce.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <div class=" spacer" id="usersTable"></div>
      <div class="container-fluid mt-5 mb-5" style={{ height: "80vh" }}>
        <div class="container d-flex justify-content-between">
          <h1 class="text-start">Users</h1>
          <button
            type="button"
            class="col-3 btn btn-success"
            onClick={() => {
              setVisibleAddUserModal(true);
            }}
            id="btnAdduser"
          >
            ✏️ Add a User
          </button>
        </div>

        <div class="container ml-3 mr-3 mt-5">
          <table class="table table-striped table-hover" id="tblusers">
            <thead>
              <tr>
                <th scope="col-1">User ID</th>
                <th scope="col-4">Email </th>
                <th scope="col-4">Password </th>
                <th scope="col-2">Admin </th>
                <th scope="col-1">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr>
                  <td scope="col-1">{user.user_id}</td>
                  <td scope="col-4">{user.email}</td>
                  <td scope="col-4">{user.password}</td>
                  <td scope="col-2">{user.admin ? "true" : "false"}</td>
                  <td scope="col-1">
                    <button
                      type="button"
                      className="btn btn-danger "
                      onClick={() => deleteUser(user.user_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {
        /* <!--Add user Modal--> */
        visibleAddUserModal && (
          <AddUserModal
            show={visibleAddUserModal}
            setShow={setVisibleAddUserModal}
          />
        )
      }
    </>
  );
};

export default UsersPanel;
