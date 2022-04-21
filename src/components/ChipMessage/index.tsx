interface ChipMessageProps {
  message: string;
  success: boolean;
}

export const ChipMessage = (props: ChipMessageProps): JSX.Element => {
  const {message, success} = props;

  return (
    <div className={success ? 'chipContainerSuccess' : 'chipContainerError'}>
      <p>{message}</p>
    </div>
  );
};