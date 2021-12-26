export interface PlaybackState {
  device: Device;
  repeat_state: string;
  shuffle_state: string;
  context: Context;
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: Item;
  currently_playing_type: string;
  actions: Actions;
}
export interface Device {
  id: string;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: string;
  volume_percent: number;
}
export interface Context {
  type: string;
  href: string;
  external_urls: ExternalUrls;
  uri: string;
}
export interface ExternalUrls {
  spotify: string;
}
export interface Item {
  album: Album;
  artists?: (ArtistsEntity)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface Album {
  album_type: string;
  total_tracks: number;
  available_markets?: (string)[] | null;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images?: (ImagesEntity)[] | null;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  album_group: string;
  artists?: (ArtistsEntity1)[] | null;
}
export interface ImagesEntity {
  url: string;
  height: number;
  width: number;
}
export interface Restrictions {
  reason: string;
}
export interface ArtistsEntity1 {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
export interface ArtistsEntity {
  external_urls: ExternalUrls;
  followers: Followers;
  genres?: (string)[] | null;
  href: string;
  id: string;
  images?: (ImagesEntity)[] | null;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
export interface Followers {
  href: string;
  total: number;
}
export interface ExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}
export interface LinkedFrom {
  album: Album;
  artists?: (ArtistsEntity)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom1;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface LinkedFrom1 {
  album: Album;
  artists?: (ArtistsEntity)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom2;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface LinkedFrom2 {
  album: Album;
  artists?: (ArtistsEntity)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom3;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface LinkedFrom3 {
  album: Album;
  artists?: (ArtistsEntity)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom4;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface LinkedFrom4 {
  album: Album;
  artists?: (ArtistsEntity)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom5;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface LinkedFrom5 {
  album: Album;
  artists?: (ArtistsEntity)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom6;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface LinkedFrom6 {
  album: Album;
  artists?: (ArtistsEntity)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom7;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface LinkedFrom7 {
  album: Album;
  artists?: (ArtistsEntity)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom8;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface LinkedFrom8 {
  album: Album1;
  artists?: (ArtistsEntity2)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom9;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface Album1 {
  album_type: string;
  total_tracks: number;
  available_markets?: (string)[] | null;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images?: (ImagesEntity)[] | null;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  album_group: string;
  artists?: (ArtistsEntity3)[] | null;
}
export interface ArtistsEntity3 {
  external_urls: ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
export interface ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds {
}
export interface ArtistsEntity2 {
  external_urls: ExternalUrls;
  followers: Followers;
  genres?: (string)[] | null;
  href: string;
  id: string;
  images?: (ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds)[] | null;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
export interface LinkedFrom9 {
  album: Album2;
  artists?: (ArtistsEntity4)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom10;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface Album2 {
  album_type: string;
  total_tracks: number;
  available_markets?: (string)[] | null;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images?: (ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds)[] | null;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  album_group: string;
  artists?: (ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds)[] | null;
}
export interface ArtistsEntity4 {
  external_urls: ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds;
  followers: ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds;
  genres?: (string)[] | null;
  href: string;
  id: string;
  images?: (ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds)[] | null;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
export interface LinkedFrom10 {
  album: Album3;
  artists?: (ArtistsEntity5)[] | null;
  available_markets?: (string)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom11;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface Album3 {
  album_type: string;
  total_tracks: number;
  available_markets?: (string)[] | null;
  external_urls: ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds;
  href: string;
  id: string;
  images?: (ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds)[] | null;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds;
  type: string;
  uri: string;
  album_group: string;
  artists?: (ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds)[] | null;
}
export interface ArtistsEntity5 {
  genres?: (null)[] | null;
  images?: (null)[] | null;
}
export interface LinkedFrom11 {
  album: Album4;
  artists?: (ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds)[] | null;
  available_markets?: (null)[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds;
  external_urls: ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom12;
  restrictions: ExternalUrlsOrImagesEntityOrArtistsEntityOrFollowersOrRestrictionsOrExternalIds;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
export interface Album4 {
  available_markets?: (null)[] | null;
  images?: (null)[] | null;
  artists?: (null)[] | null;
}
export interface LinkedFrom12 {
  artists?: (null)[] | null;
  available_markets?: (null)[] | null;
}
export interface Actions {
  interrupting_playback: boolean;
  pausing: boolean;
  resuming: boolean;
  seeking: boolean;
  skipping_next: boolean;
  skipping_prev: boolean;
  toggling_repeat_context: boolean;
  toggling_shuffle: boolean;
  toggling_repeat_track: boolean;
  transferring_playback: boolean;
}
