type MetadataLabelProps = {
  children: React.ReactNode;
  as?: "p" | "span";
};

export function MetadataLabel({ children, as = "p" }: MetadataLabelProps) {
  const Component = as;

  return <Component className="meta-label">{children}</Component>;
}
