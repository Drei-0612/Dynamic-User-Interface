import { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";



const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const getStudents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/student/", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Unable to fetch students (${response.status})`);
        }
        setStudents(await response.json());
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      }
    };

    getStudents();
    return () => controller.abort();
  }, []);

  return (
    <>
      <HeaderContainer />
      <FormContainer />
      {error && <p role="alert">Hindi ma-load ang mga estudyante: {error}</p>}
      <ListContainer data={students} />
    </>
  );
};

export default StudentPage;