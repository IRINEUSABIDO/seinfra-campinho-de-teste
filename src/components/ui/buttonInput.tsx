interface Props {
  placeholder?: string;
}

export const Button_Input = ({ placeholder }: Props) => {
  return (
    <>
      <div className="flex flex-col">
        <div className=" focus-within:border-header-light-blue border-[#50b9c0] rounded-3xl bg-white border-2  flex items-center w-[90vw] sm:w-[600px]">
          <input
            placeholder={placeholder}
            className=" w-full max-w-[600px] px-4 py-4 text-header-blue font-inter font-bold cursor-pointer outline-0 "
          />
        </div>
      </div>
    </>
  );
};
