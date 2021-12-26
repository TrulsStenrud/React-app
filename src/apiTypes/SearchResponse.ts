export interface SearchResponseSample {
  tracks: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodes;
  artists: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodes;
  albums: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodes;
  playlists: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodes;
  shows: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodes;
  episodes: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodes;
}
export interface TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodes {
  href: string;
  items?: (ItemsEntity)[] | null;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
export interface ItemsEntity {
}
