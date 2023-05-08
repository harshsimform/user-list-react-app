import { useSelector } from "react-redux";
import { User } from "../../interface/User";
import { HoverUserState } from "../../redux/HoverUserSlice/HoverUserSlice";
import "./UserCardMedia.css";

const UserCard = (): JSX.Element => {
  const hoveredUser: User | null = useSelector(
    (state: { hoverData: HoverUserState }) => state.hoverData.hoveredUser
  );

  // if hoverData is null then show nothing
  if (!hoveredUser) {
    return <></>;
  }

  // if hoverData contains hovered User Details then display that
  return (
    hoveredUser && (
      <div className="fixed-card fixed z-50 right-[18rem] w-[350px] h-[500px] top-10 mt-5 mr-5 bg-white rounded-[50px] shadow-md px-6 py-4">
        <div className="flex flex-col items-center">
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
              <span className="relative top-[26px] left-1 h-[8px] w-[8px] rounded-full bg-green-400"></span>
            ) : (
              <span className="relative top-[26px] left-1 h-[8px] w-[8px] rounded-full bg-orange-400"></span>
            )}
          </div>
          <div className="flex">
            <h1 className="mt-2 text-base font-normal text-gray-600">
              {hoveredUser.email}
            </h1>
          </div>
          <div className="mt-2 flex-col items-center">
            <p className="text-xl font-bold text-navy-700">
              Your Plan: {hoveredUser.plan}
            </p>
            {hoveredUser.active ? (
              <button className="mt-3 bg-custom-orange text-white font-bold py-2 px-4 w-full rounded-md">
                Active User
              </button>
            ) : (
              <button className="mt-3 bg-red-500 text-white font-bold py-2 px-4 w-full rounded-md">
                Inactive User
              </button>
            )}
          </div>
          <div className="mt-5 w-[250px] flex-col justify-start">
            <h4 className="text-xl font-bold text-navy-700">Plan Uses</h4>
            <div className="w-full mt-2 h-[5px] bg-orange-100 rounded-full">
              <div
                style={{ width: `${hoveredUser.progress_percentage}%` }}
                className={`h-full text-center text-xs text-white bg-custom-orange rounded-full ${hoveredUser.progress_percentage}`}
              ></div>
            </div>
          </div>
          <div className="mt-4 flex justify-center w-[250px] divide-gray-200 divide-x-[3px]">
            <div className="text-left flex-1">
              <h1 className="mt-2 text-[30px] font-bold text-navy-700">
                {parseInt(hoveredUser.clicks_reviewed).toLocaleString()}
              </h1>
              <p className="text-base text-[15px] text-gray-600">
                Clicks Reviewed
              </p>
            </div>
            <div className="text-left flex-1">
              <h1 className="mt-2 ml-4 text-[30px] font-bold text-navy-700">
                {parseInt(hoveredUser.monthly_click).toLocaleString()}
              </h1>
              <p className="ml-4 text-base text-[15px] text-gray-600">
                Monthly Clicks
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
