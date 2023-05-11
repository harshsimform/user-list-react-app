import ReactPaginate from "react-paginate";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  fetchUsers,
  selectCurrentPage,
  selectTotalPage,
} from "../../redux/UserSlice/UserSlice";
import "./Pagination.css";

const Pagination = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPage = useAppSelector(selectTotalPage);

  const handlePageChange = (selectedItem: { selected: number }) => {
    dispatch(fetchUsers(selectedItem.selected));
  };

  return (
    <>
      <div className="pagination lg:min-w-[38rem] mt-3 mb-10 border-t-2 border-indigo-100">
        <ReactPaginate
          pageCount={totalPage}
          previousLabel={"⟵ Previous"}
          nextLabel={"Next ⟶"}
          breakLabel={"..."}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          forcePage={currentPage}
          onPageChange={handlePageChange}
          pageClassName={
            "text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-500 pt-2 mx-3"
          }
          breakClassName={"hover:text-indigo-700"}
          activeClassName={
            "activeClass text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-700 pt-2"
          }
          previousClassName={
            "text-sm text-indigo-700 font-medium leading-none pt-2 px-2"
          }
          nextClassName={
            "text-sm text-indigo-700 font-medium leading-none pt-2 px-2"
          }
          disabledClassName={"disabledClass pointer-events-none"}
        />
      </div>
    </>
  );
};
export default Pagination;
