export const components = {
  types: {
    block: (props) => {
      // Destructure the style from props and rename it to blockStyle
      const { style: blockStyle, children } = props;

      // Use a switch statement or similar logic to render different block styles
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
    // Define components for other types if needed
  },
  marks: {
    strong: (props) => <strong>{props.children}</strong>,
    em: (props) => <em>{props.children}</em>,
    // Add other mark types if needed
  },
  // Define components for list, listItem, etc. if needed
};
