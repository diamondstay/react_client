import React from 'react';
import './index.scss';
import { NavLink, withRouter } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import ItemFilter from '../../components/ItemFilter/index';
import Room from '../../components/Room/index';
// import queryString from 'query-string';

function SearchResultPage(props) {
  // const { location } = props;
  // console.log(queryString.parse(location.search).keyword);
  // console.log(queryString.parse(location.search).user);
  // console.log(location.search);

  // const slug = 'da-nang';
  // const id = 2;
  // const keywor = '2nguoi';
  // const user = 10;
  const filterButton = [
    {
      lable: 'Địa điểm',
      name: 'loaction',
      id: 1,
      options: [
        { name: 'Sài gòn', id: 12 },
        { name: 'Đà Nẵng', id: 11 },
        { name: 'Vũng Tàu', id: 9 },
      ],
    },
    {
      lable: 'Gía cả',
      name: 'price',
      id: 2,
      options: [
        { name: '100.000 - 200.000', id: 126 },
        { name: '300.000 - 400.000', id: 117 },
        { name: '500.000 - 600.000', id: 19 },
      ],
    },
    {
      lable: 'Tiện ích',
      name: 'utils',
      id: 3,
      options: [
        { name: 'Có điều hòa', id: 123 },
        { name: 'Có máy giặt', id: 114 },
        { name: 'Có ghế tình yêu', id: 89 },
      ],
    },
    {
      lable: 'Loại căn hộ',
      name: 'bedrooms',
      id: 4,
      options: [
        { name: 'Chung cư', id: 134 },
        { name: 'Biệt thự', id: 111 },
        { name: 'Nhà riêng', id: 112 },
      ],
    },
  ];
  const getOption = value => {
    console.log(value);
  };
  return (
    <Container>
      {/* Filter by */}
      {/* <NavLink to={`/location/${slug}.${id}?keywor=${keywor}&user=${user}`}>
        linh chuyen page va filter
      </NavLink> */}
      <div className="filter-by">
        {filterButton.map(item => (
          <ItemFilter item={item} key={item.id} getOption={getOption} />
        ))}
      </div>

      {/* Phần kết quả - rooms */}
      <div className="list-room">
        <div className="page-title"> Có 12 homestay Vũng Tàu</div>
        <Row>
          <Room />
        </Row>
        {/* Phân trang */}
        <span className="btn-seeMore">Xem thêm</span>
      </div>
    </Container>
  );
}
export default withRouter(SearchResultPage);
