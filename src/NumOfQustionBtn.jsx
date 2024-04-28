const NumOfQuestionBtn = (props) => {
  const { number, setNumOfQuestions } = props;
  return (
    <button
      onClick={(e) => {
        setNumOfQuestions(parseInt(e.target.textContent));
      }}
      className="w-full grid p-2 place-items-center bg-gray-100 hover:bg-indigo-600 hover:text-white duration-200 rounded-sm">
      {number}
    </button>
  );
};

export default NumOfQuestionBtn;
