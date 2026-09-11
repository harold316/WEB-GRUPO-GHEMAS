import Link from "next/link";
import { classNames } from "@/lib/utils";

const variants = {
  whatsapp:
    "bg-whatsapp text-white shadow-soft hover:bg-whatsapp-dark focus-visible:outline-whatsapp",
  primary:
    "bg-brand-button text-white shadow-soft hover:opacity-90 focus-visible:outline-brand",
  secondary:
    "bg-surface text-brand-dark border border-brand/25 hover:border-brand/50 hover:bg-mint focus-visible:outline-brand",
  ghost:
    "bg-transparent text-brand-dark hover:bg-mint focus-visible:outline-brand",
  inverse:
    "bg-white text-[#0b5f59] shadow-soft hover:bg-[#e8f6f1] focus-visible:outline-white",
} as const;

type Variant = keyof typeof variants;

type Common = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const classes = classNames(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-wide transition duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    props.className,
  );

  if (props.href) {
    const { href, external, className: _c, children, variant: _v, ...rest } = props;
    if (external) {
      return (
        <a
          {...rest}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { className: _c, children, variant: _v, href: _h, type, ...rest } =
    props as ButtonAsButton;
  const buttonType: "button" | "submit" | "reset" = type ?? "button";
  return (
    <button type={buttonType} className={classes} {...rest}>
      {children}
    </button>
  );
}
