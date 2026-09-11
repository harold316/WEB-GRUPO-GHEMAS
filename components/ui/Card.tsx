import { classNames } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "rounded-3xl border border-line bg-surface p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand/25 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
