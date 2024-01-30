const Path = (props: any) => (
    <path
      strokeWidth="3"
      stroke="#ffe8d6"
      strokeLinecap="round"
      {...props}
    />
  );
  
  export const MenuToggle = ({ toggle }: any) => (
    <button 
        className="absolute flex items-center justify-center outline-0 border-0 cursor-pointer top-[18px] right-[15px] w-[50px] h-[50px] rounded-full bg-[#5c6f4d] opacity-95"
        onClick={toggle}
    >
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  );