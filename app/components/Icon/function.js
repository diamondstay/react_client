import React from 'react';
import { wifi, tv, washer, airConditioner, shampoo, towel, toothpaste, soap, dryer, toiletPaper, napkins, bottle,
  electricStove, gasStove, microwave, fridge, bbq, swimmingPool, naturalSurround, beach, balcony, smartTV, internet,
  cradle, noSmoking, window, cushion, golf,
  cuisine, entertainment, famousPlaces, headOffice, medical, shopping, sports, transportation, urban } from 'components/Icon';

export const getIcon = (str) => {
  switch(str) {
    case "WIFI free":
    case "lst-icon-hotel-wifi": {
      return wifi;
    }
    case "TV":
    case "Smart TV":
    case "lst-icon-tv": {
      return tv;
    }
    case "Máy giặt":
    case "lst-icon-washer": {
      return washer;
    }
    case "Điều hòa":
    case "lst-icon-air-conditioning": {
      return airConditioner;
    }
    case "Dầu gội":
    case "lst-icon-shampoo": {
      return shampoo;
    }
    case "Khăn tắm":
    case "lst-icon-towels": {
      return towel;
    }
    case "Kem đánh răng":
    case "lst-icon-uniF12D": {
      return toothpaste;
    }
    case "Xà phòng":
    case "lst-icon-uniF126": {
      return soap;
    }
    case "Máy sấy tóc":
    case "lst-icon-hair-dryer": {
      return dryer;
    }
    case "lst-icon-toilet-paper-1": {
      return toiletPaper;
    }
    case "lst-icon-tissues": {
      return napkins;
    }
    case "lst-icon-complimentary-bottled-water": {
      return bottle;
    }
    case "Bếp điện":
    case "lst-icon-stove-electric": {
      return electricStove;
    }
    case "Bếp gas":
    case "lst-icon-stove-gas": {
      return gasStove;
    }
    case "Lò vi sóng":
    case "lst-icon-microwave": {
      return microwave;
    }
    case "Tủ lạnh":
    case "lst-icon-refrigerator": {
      return fridge;
    }
    case "BBQ":
    case "lst-icon-bbq-facilities": {
      return bbq;
    }
    case "lst-icon-mountain-view": {
      return naturalSurround;
    }
    case "Hướng biển":
    case "lst-icon-beach": {
      return beach;
    }
    case "Bể bơi":
    case "icon_ private_pool": {
      return swimmingPool;
    }
    case "lst-icon-balcony-terrace": {
      return balcony;
    }
    case "lst-icon-smart-tv": {
      return smartTV;
    }
    case "lst-icon-family-room": {
      return cradle;
    }
    case "lst-icon-non-smoking-room": {
      return noSmoking;
    }
    case "Mạng internet":
    case "icon_internet": {
      return internet;
    }
    case "Cửa sổ":
    case "icon_windows": {
      return window;
    }
    case "Đệm bổ sung":
    case "lst-icon-room-promotion": {
      return cushion;
    }
    case "lst-icon-golf-course-on-site": {
      return golf;
    }

    case "cuisine": {
      return cuisine;
    }
    case "entertainment": {
      return entertainment;
    }
    case "famous_places": {
      return famousPlaces;
    }
    case "head_office": {
      return headOffice;
    }
    case "medical": {
      return medical;
    }
    case "shopping": {
      return shopping;
    }
    case "sports": {
      return sports;
    }
    case "transportation": {
      return transportation;
    }
    case "urban_area": {
      return urban;
    }
    default: {
      console.log("No icons");
      break;
    }
  }
};
