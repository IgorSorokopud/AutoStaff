import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuMain, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import './style.css';
import animate from 'css-animation';

class Menu extends Component {

  render() {
    function handleSelect(info) {
  console.log(info);
  console.log(`selected ${info.key}`);
}

    const commonMenu = (<MenuMain onSelect={handleSelect}>
    <SubMenu title={<span>Город</span>} key="1">
      <MenuItem key="1-1">Киев</MenuItem>
      <MenuItem key="1-2">Житомир</MenuItem>
      <MenuItem key="1-3">Хмльницкий</MenuItem>
      <MenuItem key="1-4">Кривой Рог</MenuItem>
      <MenuItem key="1-5">Бердичев</MenuItem>
      <MenuItem key="1-6">Днепр</MenuItem>
      <MenuItem key="1-7">Львов</MenuItem>
    </SubMenu>
    <SubMenu title={<span>Исполнители</span>} key="2">
      <MenuItem key="2-1">2-1</MenuItem>
      <MenuItem key="2-2">2-2</MenuItem>
    </SubMenu>
    <SubMenu title={<span>Заказы</span>} key="3">
      <MenuItem key="3-1">2-1</MenuItem>
      <MenuItem key="3-2">2-2</MenuItem>
    </SubMenu>
    <SubMenu title={<span>Вид работы</span>} key="4">
    {this.props.service.map(function(service, index){
      return(<MenuItem key={index}>{service}</MenuItem>)})}
    </SubMenu>
  </MenuMain>);

  const horizontalMenu = React.cloneElement(commonMenu, {
    mode: 'horizontal',
    openAnimation: 'slide-up',
  });

    return (
        <div className="menu">{horizontalMenu}</div>
    );
  }
}

export default connect(
  state => ({
    service: state.startData.services
  }),
  dispatch => ({})
)(Menu);
