interface ExternalLinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  opensNewTabLabel: string;
}

export function ExternalLink({
  children,
  className,
  href,
  opensNewTabLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> ({opensNewTabLabel})</span>
    </a>
  );
}
