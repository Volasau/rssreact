interface PaginationProps {
  page: number;
  totalPages: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  selectedLimit: number;
}

function Pagination({
  page,
  totalPages,
  handlePreviousPage,
  handleNextPage,
  selectedLimit,
}: PaginationProps) {
  return (
    <div className="pagination">
      <div className="btn__pagination">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1 || selectedLimit === 60}
          className="btn__pagin"
        >
          Prev
        </button>
        <div className="btn__page">{selectedLimit === 60 ? 1 : page}</div>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages || selectedLimit === 60}
          className="btn__pagin"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
