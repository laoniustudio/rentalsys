export interface VehicleIdInfo {
  id: string;
  unit: string;
  vin: string;
  license_no: string;
  vehicle_class: string;
}

export interface GeneralInfo {
  ids: string; // VehicleId's pk
  vehicle_status: string;
  location: string;
  odometer: string;
  est: boolean;
  fuel_level: string;
  year: string;
  make: string;
  model_code: string;
  model: string;
  trim_line: string;
  ext_color_code: string;
  ext_color: string;
  image: string;
  capacity: string;
  doors: string;
  smoking: boolean;
  int_color_code: string;
  int_color: string;
  engine: string;
  transmission: string;
  drivetrain: string;
  description: string;
  tank_size: string;
  fuel_economy: string;
  fuel_charge_distance: string;
  license_state: string;
  license_expire: string;
  license_amount: string;
  reg_no: string;
  vlf_amt: string;
  first_reg: string;
  license_date_posted: string;
  ignition: string;
  trunk: string;
  misc: string;
  due_back_location: string;
  due_back_date: string;
  due_back_ra: string;
  last_move_date: string;
  last_move_time: string;
  last_move_master_mru: string;
  last_move_mru_flag: boolean;
}

export interface ServiceInfo {
    ids: string; // VehicleId's pk
    po_no: string;
    owning_location: string;
    in_service_date: string;
    invoice_date: string;
    delivery_date: string;
    in_service_odometer: string;
    acquisition_price: string;
    expected_delivery_location: string;
    progarm: string;
    excise_tax: string;
    expected_delivery_date: string;
    buy_back: boolean;
    owning_area: string;
    warranty_tem: string;
    expected_in_service_date: string;
    co2_value: string;
    trackding_device: string;
    delivery_location: string;
    insepection_date: string;
    comments: string;
    out_fleet_date: string;
    date_sold: string;
    sales_price: string;
    sold_to: string;
    sold_post_date: string;
    internet_sale: boolean;
}

export interface VehicleAllInfo extends VehicleIdInfo {
    vehicle_info: GeneralInfo;
    vehicle_service: ServiceInfo;
}
