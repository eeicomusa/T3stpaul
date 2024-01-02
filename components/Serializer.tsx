// Define an interface for the block component props
interface BlockProps {
  style: string;
  children: React.ReactNode;
}

export const components = {
  types: {
    block: (props: BlockProps) => {
      const { style: blockStyle, children } = props;

      switch (blockStyle) {
        case 'h1':
          return <h1>{children}</h1>;
        case 'h2':
          return <h2>{children}</h2>;
        // Add other cases for different block styles
        default:
          return <p>{children}</p>;
      }
    },
    // Other components...
  },
  marks: {
    strong: (props: { children: React.ReactNode }) => <strong>{props.children}</strong>,
    em: (props: { children: React.ReactNode }) => <em>{props.children}</em>,
    // Other mark components...
  },
  // Other components if needed...
};
