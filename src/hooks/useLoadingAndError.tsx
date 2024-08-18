import type { ReactElement } from "react";
import Spinner from "@app/components/Spinner";

type LoadingAndErrorProps = {
  isLoading: boolean;
  error: Error | null;
};

const useLoadingAndError = ({
  isLoading,
  error,
}: LoadingAndErrorProps): ReactElement | null => {
  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;
  return null;
};

export default useLoadingAndError;
