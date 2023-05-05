import React, { useState } from "react";
import Active from "../assets/lock.svg";
import Lock from "../assets/trash.svg";
import userRecord from "./userRecord.json";
import ProgressBar from "./ProgressBar";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  active: boolean;
  owner: boolean;
  role: string;
}

const UserList = (): JSX.Element => {
  const [hoveredUser, setHoveredUser] = useState<User | null>(null);

  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="w-full lg:w-5/12">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-left text-lg p-4 font-bold">Name</th>
                <th className="text-left text-lg p-4 font-bold">Status</th>
                <th className="text-left text-lg p-4 font-bold">Access</th>
                <th className="text-left text-lg p-4 font-bold"></th>
              </tr>
            </thead>
            {userRecord.map((user: User) => (
              <tbody key={user.id}>
                <tr>
                  <td
                    className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap cursor-pointer"
                    key={user.id}
                    onMouseEnter={() => setHoveredUser(user)}
                    onMouseLeave={() => {
                      if (hoveredUser === user) {
                        setHoveredUser(null);
                      }
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
                    <td className="p-4">
                      <div className="relative w-full lg:max-w-sm">
                        <select className="group w-[130px] p-2.5 inline-flex items-center bg-gray-50 text-base font-normal hover:text-gray-600 border rounded-md shadow-sm outline-none">
                          <option>Inactive</option>
                          <option>Active</option>
                        </select>
                      </div>
                    </td>
                  )}
                  {user.owner ? (
                    <td className="p-4 font-medium">Owner</td>
                  ) : (
                    <td className="p-4">
                      <div className="relative w-full lg:max-w-sm">
                        <select className="group w-[130px] p-2.5 inline-flex items-center bg-gray-50 text-base font-normal hover:text-gray-600 border rounded-md shadow-sm outline-none">
                          <option>{user.role}</option>
                        </select>
                      </div>
                    </td>
                  )}
                  <td>
                    {user.active ? (
                      <img src={Active} alt={user.first_name} />
                    ) : (
                      <img src={Lock} alt={user.first_name} />
                    )}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="w-3/12 ">
          {hoveredUser && (
            <div className="ml-10 max-w-[350px] h-[500px] mt-20 hidden xl:block rounded-[50px] shadow-lg">
              <div className="mt-16 flex flex-col items-center">
                <div className="text-xl font-bold text-navy-700 dark:text-white">
                  <img
                    className="mt-5 object-cover w-35 h-35 rounded-full"
                    src={hoveredUser.avatar}
                    alt={hoveredUser.first_name}
                  />
                </div>
                <div className="flex">
                  <h1 className="mt-5 font-bold text-lg">
                    {hoveredUser.first_name} {hoveredUser.last_name}
                  </h1>
                  {hoveredUser.active ? (
                    <span className="relative top-[26px] left-1 h-[7px] w-[7px] rounded-full bg-green-400"></span>
                  ) : (
                    <span className="relative top-[26px] left-1 h-[7px] w-[7px] rounded-full bg-orange-400"></span>
                  )}
                </div>
                <div className="flex">
                  <h1 className="mt-2 text-base font-normal text-gray-600">
                    {hoveredUser.email}
                  </h1>
                </div>
                <div className="mt-2 flex-col items-center">
                  <p className="text-xl font-bold text-navy-700">
                    Your Plan: Standard
                  </p>
                  <button className="mt-3 bg-custom-orange text-white font-bold py-2 px-4 w-full rounded-md">
                    Active User
                  </button>
                </div>
                <div className="mt-5 w-[250px] flex-col justify-start">
                  <h4 className="text-xl font-bold text-navy-700">Plan Uses</h4>
                  <ProgressBar progressPercentage={80} />
                </div>
                <div className="mt-4 flex justify-center w-[250px] divide-gray-200 divide-x-[3px]">
                  <div className="text-left flex-1">
                    <h1 className="mt-2 text-[30px] font-bold text-navy-700">
                      2,450
                    </h1>
                    <p className="text-base text-[15px] text-gray-600">
                      Clicks Reviewed
                    </p>
                  </div>
                  <div className="text-left flex-1">
                    <h1 className="mt-2 ml-4 text-[30px] font-bold text-navy-700">
                      5000
                    </h1>
                    <p className="ml-4 text-base text-[15px] text-gray-600">
                      Monthly Clicks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserList;
