const ListComponent = ({ data }) => {
  return (
    <>
      <section id="listContainer">
        {data.map((student) => (
          <article key={student.id} className="list-item">
            <h1>{student.name}</h1>
            <p>{student.program}</p>
            <small>{student.srcode}</small>
            <button>Delete</button>
          </article>
        ))}
      </section>
    </>
  );
};

export default ListComponent;
