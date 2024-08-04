import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => <a {...props} target="_blank" />,
    ...components,
  };
}
