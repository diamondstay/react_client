import React, { useState } from 'react';
import TypeFilter from './TypeFilter';
import ConveniencesFilter from './ConveniencesFilter';
import LocationFilter from './LocationFilter';
import PriceFilter from './PriceFilter';
function index() {
  return (
    <div className="filter-by">
      <TypeFilter />
      <ConveniencesFilter />
      <LocationFilter />
      <PriceFilter />
    </div>
  );
}
export default index;
