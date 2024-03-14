import { useCallback, useEffect, useState } from "react";
import Button from "./Buttons/Button";
import Modal from "./modal/modal";
import useInput from "./Hooks/useInput";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await responce.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // useEffect(() => {
  //     async function fetchUsers(){
  //         setLoading(true);
  //         const responce =  await fetch('https://jsonplaceholder.typicode.com/users');
  //         const users = await responce.json();
  //         setUsers(users);
  //         setLoading(false);
  //       }

  //     fetchUsers();
  // },[])

  // function openModal(){
  //     setModal(true)
  // }

  return (
    <section>
      <h3>Effects</h3>
      <Button
        style={{ marginBottom: "1rem" }}
        onClick={() => {
          setModal(true);
        }}
      >
        Открыть инфо
      </Button>
      <Modal open={modal}>
        <h3>Hello modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas
          numquam, id enim impedit aspernatur consequuntur sint odio quia, aut
          totam ipsam sed animi dignissimos adipisci corrupti aliquam earum.
          Nam.
        </p>
        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>

      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type={"text"} className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
