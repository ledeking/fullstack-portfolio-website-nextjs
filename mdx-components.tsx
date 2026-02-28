import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        {...props}
        alt={props.alt || ''}
        width={800}
        height={600}
        className="rounded-lg"
      />
    ),
    ...components,
  };
}
