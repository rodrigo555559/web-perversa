import leopardPattern from "@/assets/leopard-pattern.jpg";

const LeopardDivider = () => {
  return (
    <div className="relative h-2 overflow-hidden opacity-40">
      <img
        src={leopardPattern}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
    </div>
  );
};

export default LeopardDivider;
