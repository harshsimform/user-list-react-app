interface ProgressBarProp {
  progressPercentage: number;
}

const ProgressBar = ({ progressPercentage }: ProgressBarProp): JSX.Element => {
  return (
    <div className="h-[5px] mt-2 w-full bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full ${progressPercentage} bg-custom-orange`}
      ></div>
    </div>
  );
};

export default ProgressBar;
