interface ChipMessageProps {
  message: string;
}

export const ChipMessage = (props: ChipMessageProps): JSX.Element => {
  const {message} = props;
  
  return (
    <div>
      <p className="chipContainerSuccess">{message}</p>
    </div>
  );
};