import ProgressBar from "./ProgressBar";
import { User } from "./UserList";

interface Props {
  hoveredUser: User;
}

const HoveredUserDetails = ({ hoveredUser }: Props): JSX.Element => {
  const {
    first_name,
    last_name,
    email,
    avatar,
    active,
    plan,
    clicks_reviewed,
    monthly_click,
  } = hoveredUser;

  return (
    <div className="ml-10 max-w-[350px] h-[500px] mt-20 hidden xl:block rounded-[50px] shadow-lg">
      <div className="mt-16 flex flex-col items-center">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          <img
            className="mt-5 object-cover w-35 h-35 rounded-full"
            src={avatar}
            alt={first_name}
          />
        </div>
        <div className="flex">
          <h1 className="mt-5 font-bold text-lg">
            {first_name} {last_name}
          </h1>
          {active ? (
            <span className="relative top-[26px] left-1 h-[7px] w-[7px] rounded-full bg-green-400"></span>
          ) : (
            <span className="relative top-[26px] left-1 h-[7px] w-[7px] rounded-full bg-orange-400"></span>
          )}
        </div>
        <div className="flex">
          <h1 className="mt-2 text-base font-normal text-gray-600">{email}</h1>
        </div>
        <div className="mt-2 flex-col items-center">
          <p className="text-xl font-bold text-navy-700">Your Plan: {plan}</p>
          {active ? (
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
          <ProgressBar progressPercentage={80} />
        </div>
        <div className="mt-4 flex justify-center w-[250px] divide-gray-200 divide-x-[3px]">
          <div className="text-left flex-1">
            <h1 className="mt-2 text-[30px] font-bold text-navy-700">
              {parseInt(clicks_reviewed).toLocaleString()}
            </h1>
            <p className="text-base text-[15px] text-gray-600">
              Clicks Reviewed
            </p>
          </div>
          <div className="text-left flex-1">
            <h1 className="mt-2 ml-4 text-[30px] font-bold text-navy-700">
              {parseInt(monthly_click).toLocaleString()}
            </h1>
            <p className="ml-4 text-base text-[15px] text-gray-600">
              Monthly Clicks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoveredUserDetails;
