const FormComponent = () => {
  return (
    <>
      <section id="formContainer">
        <form id="studentForm">
          <div className="input-field">
            <label htmlFor="name">Student Name</label>
            <input type="text" name="name" id="name"></input>
          </div>
          <div className="input-field">
            <label htmlFor="program">Student Program</label>
            <input type="text" name="program" id="program"></input>
          </div>
          <div>
            <button>Add Student</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormComponent;
