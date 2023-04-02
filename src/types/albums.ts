export type AlbumType = {
  album_type: "album" | "single" | "compilation";
  total_tracks: number;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions: {
    reason: "market" | "product" | "explicit";
  };
  type: "album";
  uri: string;
  copyrights: {
    text: string;
    type: string;
  }[];
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  genres: string[];
  label: string;
  popularity: number;
  artists: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string | null;
      total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: [
      {
        url: string;
        height: number;
        width: number;
      }
    ];
    name: string;
    popularity: number;
    type: "artist";
    uri: string;
  }[];
  tracks: {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: {
      artists: [
        {
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          name: string;
          type: "artist";
          uri: string;
        }
      ];
      available_markets: string[];
      disc_number: number;
      duration_ms: number;
      explicit: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      is_playable: boolean;
      linked_from: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        type: "track";
        uri: string;
      };
      restrictions: {
        reason: string;
      };
      name: string;
      preview_url: string;
      track_number: number;
      type: "track";
      uri: string;
      is_local: boolean;
    }[];
  };
};
