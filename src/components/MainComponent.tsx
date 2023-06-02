import UserCard from "./UserCard/UserCard";
import UserList from "./UserList/UserList";

const MainComponent = (): JSX.Element => {
  return (
    <div className="bg-white flex justify-center">
      <UserList />
      <div className="w-4/12">
        <UserCard />
      </div>
    </div>
  );
};

export default MainComponent;
