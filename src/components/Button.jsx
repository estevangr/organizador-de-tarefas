import { cn } from "../libs/utils";

function Button({ className, ...props }) {
  return (
    <button
      {...props}
      className={cn("bg-blue-500 p-2 rounded-md text-white", className)}
    >
      {props.children}
    </button>
  );
}
export default Button;
