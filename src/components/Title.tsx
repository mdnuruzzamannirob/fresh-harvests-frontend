import { cn } from "@/lib/utils";
import Badge from "./Badge";

type TTitleProps = {
  title: string;
  description: string;
  badge: string;
  className?: string;
};

const Title = ({ title, description, badge, className }: TTitleProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center space-y-5",
        className
      )}
    >
      <Badge>{badge}</Badge>

      <h2 className="max-sm:text-[7vw] text-4xl font-medium font-rubik">
        {title}
      </h2>
      <p className="text-gray-100 max-w-md text-sm">{description}</p>
    </div>
  );
};

export default Title;
