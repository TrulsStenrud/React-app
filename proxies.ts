// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class SearchResponseSampleProxy {
  public readonly tracks: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy;
  public readonly artists: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy;
  public readonly albums: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy;
  public readonly playlists: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy;
  public readonly shows: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy;
  public readonly episodes: TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy;
  public static Parse(d: string): SearchResponseSampleProxy {
    return SearchResponseSampleProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SearchResponseSampleProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.tracks = TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy.Create(d.tracks, field + ".tracks");
    d.artists = TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy.Create(d.artists, field + ".artists");
    d.albums = TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy.Create(d.albums, field + ".albums");
    d.playlists = TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy.Create(d.playlists, field + ".playlists");
    d.shows = TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy.Create(d.shows, field + ".shows");
    d.episodes = TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy.Create(d.episodes, field + ".episodes");
    return new SearchResponseSampleProxy(d);
  }
  private constructor(d: any) {
    this.tracks = d.tracks;
    this.artists = d.artists;
    this.albums = d.albums;
    this.playlists = d.playlists;
    this.shows = d.shows;
    this.episodes = d.episodes;
  }
}

export class TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy {
  public readonly href: string;
  public readonly items: ItemsEntityProxy[] | null;
  public readonly limit: number;
  public readonly next: string;
  public readonly offset: number;
  public readonly previous: string;
  public readonly total: number;
  public static Parse(d: string): TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy {
    return TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.href, false, field + ".href");
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        d.items[i] = ItemsEntityProxy.Create(d.items[i], field + ".items" + "[" + i + "]");
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    checkNumber(d.limit, false, field + ".limit");
    checkString(d.next, false, field + ".next");
    checkNumber(d.offset, false, field + ".offset");
    checkString(d.previous, false, field + ".previous");
    checkNumber(d.total, false, field + ".total");
    return new TracksOrArtistsOrAlbumsOrPlaylistsOrShowsOrEpisodesProxy(d);
  }
  private constructor(d: any) {
    this.href = d.href;
    this.items = d.items;
    this.limit = d.limit;
    this.next = d.next;
    this.offset = d.offset;
    this.previous = d.previous;
    this.total = d.total;
  }
}

export class ItemsEntityProxy {
  public static Parse(d: string): ItemsEntityProxy {
    return ItemsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    return new ItemsEntityProxy(d);
  }
  private constructor(d: any) {
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
