import "./Pagination.scss";

const Pagination = ({ slideIndexY }) => {
  return (
    <div className="pagination-wrapper">
      {[0, 1, 2].map((slideNumber) => (
        <div
        key={slideNumber}
          className="pagination-dot"
          style={{ background: slideNumber === slideIndexY ? "#f78b1f" : "#f9f9f9" }}
        ></div>
      ))}
    </div>
  );
};

export default Pagination;
