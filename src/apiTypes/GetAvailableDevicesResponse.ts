export interface GetAvailableDevicesResponse {
  devices?: (DevicesEntity)[] | null;
}
export interface DevicesEntity {
  id: string;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: string;
  volume_percent: number;
}
