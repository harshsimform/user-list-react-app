import Active from "../../assets/lock.svg";
import Lock from "../../assets/trash.svg";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { addUser, removeUser } from "../../redux/HoverUserSlice/HoverUserSlice";

const UserList = (): JSX.Element => {
  const users = useAppSelector((state) => state.data.users);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="w-full lg:w-5/12 md:w-4/12">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left text-lg p-4 font-bold">Name</th>
              <th className="text-left text-lg p-4 font-bold">Status</th>
              <th className="text-left text-lg p-4 font-bold">Access</th>
              <th className="text-left text-lg p-4 font-bold"></th>
            </tr>
          </thead>
          {users.map((user) => (
            <tbody key={user.id}>
              <tr className="hover:bg-slate-50">
                <td
                  className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap cursor-pointer"
                  key={user.id}
                  onMouseEnter={() => dispatch(addUser(user))}
                  onMouseLeave={() => {
                    dispatch(removeUser());
                  }}
                >
                  <div className="flex items-center gap-x-2">
                    <img
                      className="object-cover w-10 h-10 rounded-full"
                      src={user.avatar}
                      alt={user.first_name}
                    />
                    <div>
                      <h2 className="text-[15px] font-medium text-gray-800 dark:text-white ">
                        {user.first_name} {user.last_name}
                      </h2>
                      <p className="text-[13px] font-normal text-gray-600 dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                {user.active ? (
                  <td className="p-4 text-green-700 text-lg font-bold">
                    Active
                  </td>
                ) : (
                  <td className="p-4 hover:text-gray-600">
                    <div className="relative w-[140px] flex items-center">
                      <svg
                        className="absolute w-5 h-5 right-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <select className="group w-[130px] p-2.5 appearance-none inline-flex items-center bg-gray-50 text-base font-normal border rounded-md shadow-sm outline-none">
                        <option>Inactive</option>
                        <option>Active</option>
                      </select>
                    </div>
                  </td>
                )}
                {user.owner ? (
                  <td className="p-4 font-medium">Owner</td>
                ) : (
                  <td className="p-4 hover:text-gray-600">
                    <div className="relative w-[140px] flex items-center">
                      <svg
                        className="absolute w-5 h-5 right-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <select className="group w-[130px] p-2.5 appearance-none inline-flex items-center bg-gray-50 text-base font-normal border rounded-md shadow-sm outline-none">
                        <option>{user.role}</option>
                      </select>
                    </div>
                  </td>
                )}
                <td>
                  {user.active ? (
                    <img
                      className="cursor-pointer ml-5"
                      src={Active}
                      alt="Active"
                    />
                  ) : (
                    <img
                      className="cursor-pointer ml-5"
                      src={Lock}
                      alt="Lock"
                    />
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default UserList;
