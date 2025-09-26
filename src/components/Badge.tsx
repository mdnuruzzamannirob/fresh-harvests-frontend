import { cn } from "@/lib/utils";

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "bg-green/10 border border-green/15 font-semibold text-green w-fit py-1 px-3 max-sm:text-xs rounded-full",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Badge;
