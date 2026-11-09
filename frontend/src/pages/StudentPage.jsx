import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () => {
  const students = [
    { id: 1, srcode: "00-19268", name: "Klein Moretti", program: "BSIT" },
    { id: 2, srcode: "11-19268", name: "Audrey Hall", program: "BSIT" },
    { id: 3, srcode: "12-19268", name: "Alger Wilson", program: "BSIT" },
  ];
  return (
    <>
      <HeaderContainer />
      <FormContainer />
      <ListContainer data={students} />
    </>
  );
};

export default StudentPage;
