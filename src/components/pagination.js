import { useDispatch, useSelector } from "react-redux";
import { SetActivePage } from "../slices/PaginationSlice";
const PaginateSquare = ({ active, p }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(SetActivePage(p));
  };
  return (
    <li>
      <button
        onClick={handleClick}
        href="#"
        className={`${
          active ? "bg-blue-600 text-white" : ""
        } block h-8 w-8 rounded border border-gray-100 text-center leading-8`}
      >
        {p}
      </button>
    </li>
  );
};

const Pagination = () => {
  const pageNumbers = useSelector((state) => state.pagination.pageNumbers);
  const activePage = useSelector((state) => state.pagination.activePage);
  return (
    <ol className="flex flex-wrap justify-center gap-1 text-xs font-medium">
      {[...Array(pageNumbers)].map((v, i) => (
        <PaginateSquare key={i} p={i + 1} active={activePage === i + 1} />
      ))}
    </ol>
  );
};

export default Pagination;
