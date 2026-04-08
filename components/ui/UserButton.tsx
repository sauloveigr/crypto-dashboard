import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface UserButtonProps {
  name: string;
  email?: string;
  role?: string;
  avatarSrc?: string;
  onClick?: () => void;
  showDetails?: boolean;
  className?: string;
}

export function UserButton({
  name,
  email,
  role,
  avatarSrc,
  onClick,
  showDetails = true,
  className,
}: UserButtonProps) {
  return (
    <Button
      variant="user"
      onClick={onClick}
      className={cn("gap-2.5", className)}
      aria-label="User menu"
    >
      <Avatar size="md" src={avatarSrc} alt={name} />
      {showDetails && (
        <div className="hidden md:block text-left">
          <p className="text-xs font-medium leading-none">{name}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {role || email}
          </p>
        </div>
      )}
    </Button>
  );
}
