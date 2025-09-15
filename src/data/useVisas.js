import { useQuery } from '@tanstack/react-query';
import { getVisasApi } from '../services/apiVisas';

export function useVisas() {
  const {
    data,
    isLoading: isLoadingVisas,
    isError: isErrorVisas,
  } = useQuery({
    queryKey: ['visas'],
    queryFn: getVisasApi,
  });

  return {
    visas: data?.data?.visas,
    isLoadingVisas,
    isErrorVisas,
  };
}
