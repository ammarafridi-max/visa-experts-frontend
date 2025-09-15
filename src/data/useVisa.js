import { useQuery } from '@tanstack/react-query';
import { getVisaApi } from '../services/apiVisas';

export function useVisa(slug) {
  const {
    data,
    isLoading: isLoadingVisa,
    isError: isErrorVisa,
  } = useQuery({
    queryKey: ['visa', slug],
    queryFn: () => getVisaApi(slug),
    enabled: !!slug,
  });

  return {
    visaDetails: data?.data?.visa,
    isLoadingVisa,
    isErrorVisa,
  };
}
