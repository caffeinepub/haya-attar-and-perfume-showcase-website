import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Perfume, ContactInfo, SocialLink } from '../backend';

export function useGetAllPerfumes() {
  const { actor, isFetching } = useActor();

  return useQuery<Perfume[]>({
    queryKey: ['perfumes'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPerfumes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactInfo | null>({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getContactInfo();
      } catch (error) {
        // Contact info might not be set yet
        return null;
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllSocialLinks() {
  const { actor, isFetching } = useActor();

  return useQuery<SocialLink[]>({
    queryKey: ['socialLinks'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSocialLinks();
    },
    enabled: !!actor && !isFetching,
  });
}

