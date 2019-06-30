import React, { Component } from 'react'

import Header from './Header';
import Footer from './Footer';

import getDummyPhoto from '../logic/getPhoto';
import createDummyPhoto from '../logic/createPhoto';

import { PHOTO_TYPE } from '../constants/string';

import '../style/PhotoList.css';

export default class PhotoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      photoList: [],
    };
  }
  componentWillMount(){
    createDummyPhoto();
    let dummy = [];
    dummy.unshift(getDummyPhoto('dummyPhoto1'));
    dummy.unshift(getDummyPhoto('dummyPhoto2'));
    dummy.unshift(getDummyPhoto('dummyPhoto3'));
    this.setState({photoList: dummy});
  }
  renderPhotoList = () => {
    const node = this.state.photoList.map((photo, i) => {
      console.log(photo);      
      return (
        <div key={`photo-${i}`} className='photo-wrapper'>        
          <div className='photo-avatar'>{photo.photo_member[0]}</div>
          <div className='photo-data'>
            <div className='photo-data-name'>
            <h2>{photo.photo_member.toUpperCase()}</h2>
            <h3>{photo.photo_costume}</h3>
            </div>
            <div className='photo-data-type'>
              <h3>{PHOTO_TYPE[photo.photo_type]}</h3>
            </div>
            <div className='photo-data-number'>
              <h3>{photo.photo_number}</h3>
            </div>
            
          </div>
        </div>
      )
    })
    return node;
  }
  
  render() {
    
    return (
      <div className='photo-list-view'>
        <Header />
        <div className='photo-list'>
          {this.renderPhotoList()}
        </div>
        <Footer />
      </div>
    )
  }
}