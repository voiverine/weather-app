export type Station = {
  altitude: number;
  external_id: string;
  id: string;
  ID?: string; //when a station is added via POST, backend returns ID in uppercase
  latitude: number;
  longitude: number;
  name: string;
};
