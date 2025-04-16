import React from "react";

export default function CustomButton ({ 
                                        children, 
                                        startIcon,
                                        customHover = "hover:bg-black",
                                        ...rest 
                                      }) {
  return (
    <button
        {...rest}
        className= {`w-full bg-gray-900 text-gray-200 flex items-center justify-center rounded-lg shadow-md border-none px-4 py-2 font-semibold transition-all duration-500 ${customHover ? customHover : "hover:bg-black"}`}
    >
        {startIcon && <div className="mr-2 h-full flex items-center">{startIcon}</div>}

        {children}
    </button>
  );
};


