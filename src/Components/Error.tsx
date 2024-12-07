const Error = ({ error }: { error: string }) => {
  return (
    <div className="my-8 mx-5" role="error">
      Error: {error}
    </div>
  );
};

export default Error;
