import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { deleteContact } from "../actions";
import { useDispatch } from "react-redux";
export default function Table() {
  const contacts = useSelector((state) => state.contact.contacts);
  console.log(contacts);

  const dispatch = useDispatch();
  return (
    <div className="Contact">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>
                <Avatar
                  className="mr-2"
                  name={contact.name}
                  size="45"
                  round={true}
                />
                {contact.name}
              </td>
              <td>{contact.username}</td>
              <td>{contact.email}</td>
              <td>
                <Link to={"/edit/" + contact.id}>Edit</Link>
              </td>
              <td
                className="material-icons text-danger"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
