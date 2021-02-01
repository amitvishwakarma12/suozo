import React, { useState } from 'react';
import './drawingPanel.css';
import logo from "./img/sozo.jpg"
import Screen1 from "./img/screen1.svg";
import Screen2 from "./img/screen2.svg";
import Screen3 from "./img/screen3.svg";
import SortName from "./img/sort_name.svg";
import TeamsImg from "./img/team_user.svg";
import RectShape from "./img/rect_shape.svg";
import CircleShape from "./img/circle_shape.svg";
import DiamondShape from './img/diamond_shape.svg';
import TriangleShape from './img/triangle_shape.svg';
import StarShape from './img/star_shape.svg';
import SquareShape from "./img/square_shape.svg";
import PolygonShape from "./img/polygon_shape.svg";
import {Dropdown,DropdownButton} from "react-bootstrap";
import Rectangle from './Shapes/canvas.js';
// import useUndo from 'use-undo';

// const useHistory = (initialState) => {
//   const [index,setIndex] = useState(0);
// const [history,setHistory] = useState(initialState);
// const setState = (action) => {
//   const newState = typeof action ===  "function" ?  action(history[index]) :  action;
//   setHistory(isRect => [...isRect, newState]);
//   setIndex(isRect => isRect + 1);
// };
// const undoCanvas = () => index > 0 && setIndex(isRect => isRect - 1);
// const redoCanvas = () => index < history.length -1 && setIndex(isRect => isRect + 1);
//   return [history[index],setState,undoCanvas,redoCanvas];
// };

const Drawing_panel = () => {
  const [isRect,setIsRect] = useState(false);
  function showRect(){
    setIsRect(true)
    // console.log(isRect)
    // setIsRect(isRect=> [...isRect,isRect]);
  }
  const [isCircle,setIsCircle] = useState(false);
  function showCircle(){
    setIsCircle(true)
  }
  const [isDiamond,setIsDiamond] = useState(false);
  function showDiamond(){
    setIsDiamond(true)
  }
  const [isTriangle,setIsTriangle] = useState(false);
  function showTriangle(){
    setIsTriangle(true)
  }
  const [isStar,setIsStar] = useState(false);
  function showStar(){
    setIsStar(true)
  }
  const [isSquare,setIsSquare] = useState(false);
  function showSquare(){
    setIsSquare(true)
  }
  const [isPolygon,setIsPolygon] = useState(false);
  function showPolygon(){
    setIsPolygon(true)
  }
const colorlist = ['#FFF1AA', '#F8AD96', '#EF5F9E','#F7C5DA','#EAE15F','#C094C1','#D5D2E2','#E2E2E2','#B8DECD','#58C2BF','#31BDDF','#AACDE9'];
const [isSelect,setIsSelect] = useState(null);
    return (
        <React.Fragment>
        <div style={{width: 1310}}>
  <header>
    <div className="row" style={{margin: 20}}>
      <div  className="col-md-3 rename_document_col">
        <img src={logo} width={20} />
        <span style={{textAlign: 'center', marginLeft: 10}}><b>Rename Document</b> 
          <i className="far fa-save" style={{marginLeft: 30, color: '#00C07F', marginTop: 10, fontSize: 20}} />

          <Dropdown style={{display: 'contents'}}>
            <Dropdown.Toggle style={{display: 'contents'}}>
            <i className="fas fa-align-left float-right" style={{marginRight: 20, color: '#202225', marginTop: 10, fontSize: 20}} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="canvas_option_list">
                <Dropdown.Item href="#/action-1">New Canvas</Dropdown.Item>               
                 <Dropdown.Item href="#/action-2">Insert<i className="fas fa-play float-right" /></Dropdown.Item>
                <Dropdown.Item href="#/action-3">Export<i className="fas fa-play float-right" /></Dropdown.Item>
                <Dropdown.Item href="#/action-4">Duplicate</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Convert to Template</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Print</Dropdown.Item>
                <Dropdown.Item href="#/action-7">Show Grid</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Help<i className="fas fa-play float-right" /></Dropdown.Item> 
                <Dropdown.Item href="#/action-9">Account Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-10">Log Out</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </span>
      </div>
      <div className="col-md-7 text-center">
        <button className="alert text-center text-light" role="alert"> Succesfully Saved !</button>
      </div>
      <div className="col-md-2 icon_btn">
        <div className="header_panel">
          <a href><i className="far fa-search" /></a>
          <a href><i className="far fa-paper-plane" /></a>
          <Dropdown style={{display: 'contents'}}>
            <Dropdown.Toggle id="dropdown-basic">
            <i className="far fa-comment-alt-lines" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="comment_box_list">
                <Dropdown.Header>
                    <div className="row">
                    <div className="col-md-8"> 
                        <h5 style={{margin: 10}}>Comments</h5>
                    </div>
                    <div className="col-md-4 close_comment">
                        <i className="far fa-times" />
                    </div>
                    </div>
                </Dropdown.Header>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Item href="#/action-1">
                <ul className="list-group" style={{margin: 10}}>
                   <li className="list-group-item" style={{backgroundColor: '#F9FCFF', borderRadius: 9, border: 'none', marginBottom: 15}}>
                        <div className="row comment_list">
                             <div className="col-md-2" style={{paddingRight: 0}}><i className="fas fa-user" style={{color: '#137EF9'}} /></div>
                             <div className="col-md-4" style={{paddingRight: 0, paddingLeft: 0}}><h6 style={{marginTop: 5}}><strong>John Doe</strong></h6></div>
                            <div className="col-md-6" style={{paddingLeft: 0, fontSize: 12}}><p style={{marginTop: 6, marginLeft: 40, marginBottom: 0}}>3 Dec, 20 - 02:30 Am</p></div>
                             </div>
                              <div>
                              <p style={{color: '#7B7B7B', fontSize: 15}}>Lorem Ipsum is simply dummy text of the <br/>printing and typesetting industry.</p>
                              </div>
                     </li>
                     <li className="list-group-item" style={{backgroundColor: '#F9FCFF', borderRadius: 9, border: 'none'}}>
                          <div className="row comment_list">
                              <div className="col-md-2" style={{paddingRight: 0}}><i className="fas fa-user" style={{color: '#137EF9'}} /></div>
                              <div className="col-md-4" style={{paddingRight: 0, paddingLeft: 0}}><h6 style={{marginTop: 5}}><strong>John Doe</strong></h6></div>
                              <div className="col-md-6" style={{paddingLeft: 0, fontSize: 12}}><p style={{marginTop: 6, marginLeft: 40, marginBottom: 0}}>3 Dec, 20 - 02:30 Am</p></div>
                              </div>
                              <div>
                              <p style={{color: '#7B7B7B', fontSize: 15}}>Lorem Ipsum is simply dummy text of the <br/>printing and typesetting industry.</p>
                              </div>
                       </li>
                  </ul>
                    <div className="add_comment">
                        <input type="text" placeholder="Add Comment Here..." />
                        <button>Add</button>
                    </div>
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          
          <div className style={{display: 'contents'}}>
          <Dropdown style={{display: 'contents'}}>
            <Dropdown.Toggle id="dropdown-basic">
            <i className="far fa-user-plus" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="teams_drop">
                <Dropdown.Header>
                <div className="row">
                <div className="col-md-8"> 
                  <h5 style={{margin: 10}}>Teams</h5>
                </div>
                <div className="col-md-4 close_comment">
                  <i className="far fa-times" />
                </div>
              </div>
                </Dropdown.Header>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Item href="#/action-1" className="teams_drop">
                <img src={TeamsImg} />
                <label>No Added Yet!</label>
                <button><i className="fas fa-user-plus" style={{marginRight: 10, fontSize: 15, color: "#FFFFFF"}} />Add People</button>
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          </div>
          <a href><i className="far fa-file-alt" /></a>
        </div>
      </div>
    </div>
  </header>
  <div className="row">
    <div className="col-md-1">
      <div className="sidebar">
        <ul className="list-group draw_icon">
          <li className="active"> <i className="fas fa-location-arrow" /></li>
          <li><i className="fal fa-text" /></li>
          <li>
          <div className="color_menu">
            {['right'].map((direction) => (
            <DropdownButton
                key={direction}
                id={`dropdown-button-drop`}
                drop={direction}
                title={<i className="far fa-sticky-note" /> }
            >
                <Dropdown.Item className="color_list" eventKey="1"> 
                {colorlist.map((color,index) =>(<div key={index} className="card">
                  <div style={{background: color}} className="color-pick" onClick={() => setIsSelect(color)} />
                  </div>))}
                  </Dropdown.Item>
                
                <Dropdown.Item className="color_link" eventKey="4"> 
                <div>
                  <a href=""><h6 style={{margin: '5px 10px'}}><u>Add New</u></h6></a>
                </div>
                </Dropdown.Item>
               
            </DropdownButton>
            ))}
            </div>
          </li>
          <li>
          <div className="shape_menu">
            {['right'].map((direction) => (
            <DropdownButton
                key={direction}
                id={`dropdown-button-drop`}
                drop={direction}
                title={<i className="fal fa-rectangle-wide" /> }
            >
                <Dropdown.Item className="shape_img" eventKey="1"><img src={RectShape} id="rectangle" onClick={showRect}/></Dropdown.Item>
                <Dropdown.Item className="shape_img" eventKey="2"><img src={CircleShape} id="circle" onClick={showCircle}/></Dropdown.Item>
                <Dropdown.Item className="shape_img" eventKey="3"><img src={DiamondShape} id="diamond" onClick={showDiamond}/></Dropdown.Item>
                <Dropdown.Item className="shape_img" eventKey="4"><img src={TriangleShape} id="triangle" onClick={showTriangle}/></Dropdown.Item>
                <Dropdown.Item className="shape_img" eventKey="4"><img src={StarShape} id="star" onClick={showStar}/></Dropdown.Item>
                <Dropdown.Item className="shape_img" eventKey="4"><img src={SquareShape} id="square" onClick={showSquare}/></Dropdown.Item>
                <Dropdown.Item className="shape_img" eventKey="4"><img src={PolygonShape} id="polygon" onClick={showPolygon}/></Dropdown.Item>
               
            </DropdownButton>
            ))}
            </div>
          </li>
          <li><i className="far fa-long-arrow-right" /></li>
          <li><i className="fal fa-edit" /></li><li>
          </li></ul> 
      </div>
      <div className="sidebar_sub_menu">
        <ul className="list-group draw_icon">
          <li>
          <div className="container_menu">
            {['right'].map((direction) => (
            <DropdownButton
                key={direction}
                id={`dropdown-button-drop`}
                drop={direction}
                title={ <i className="far fa-th-large" />}
            >
                <Dropdown.Header><h5 style={{marginLeft: 10}}>Containers</h5></Dropdown.Header>
                <Dropdown.Divider style={{width: 250, marginLeft: 10}}></Dropdown.Divider>
                <Dropdown.Item className="conatiner_img" eventKey="1">  <img src={Screen1} /></Dropdown.Item>
                <Dropdown.Item className="conatiner_img" eventKey="2"><img src={Screen2} /></Dropdown.Item>
                <Dropdown.Item className="conatiner_img" eventKey="3"><img src={Screen3} /></Dropdown.Item>
                <Dropdown.Item className="sort_category" eventKey="4" style={{padding: 0}}>
                  <div className="row sort" style={{marginLeft: 0, marginRight: 0}}>
                  <div className="col-md-3" style={{padding: 0}}>
                    <img src={SortName} />
                  </div>
                  <div className="col-md-9" style={{padding: 0}}>
                    <label style={{fontSize: 18, marginBottom: 0, marginTop: 5}}><b>Sort</b></label>
                    <p style={{fontSize: 13, color: '#8A8A8A'}}>Organize sticky Notes Categories</p>
                  </div>
                </div>
                </Dropdown.Item>
            </DropdownButton>
            ))}
            </div> 
          </li>
          <li><i className="far fa-list" /></li>
        </ul>
      </div>
    </div>
    <div className="col-md-11" id="container">   
   {<Rectangle rect={isRect} circle={isCircle} diamond={isDiamond} triangle={isTriangle} stars={isStar} square={isSquare} hexagon={isPolygon} colorSet = {isSelect} />}
   

    </div>
  </div>
  <footer style={{display: 'flex', float: 'right', marginBottom: 40}}>
    <ul className="list-group list-group-horizontal backward_forward_btn">
      <li className="list-group-item"><i className="fas fa-undo"/></li>
      <li className="list-group-item"><i className="far fa-redo-alt"/></li>
      <li className="list-group-item"><i className="far fa-history" /></li>
      <li className="list-group-item"><i className="fas fa-expand-wide" /></li>
      <li className="list-group-item"> <i className="far fa-map-marker-alt" /></li>
    </ul>
    <ul className="list-group list-group-horizontal max_min_size">
      <li className="list-group-item"><i className="fas fa-minus" style={{color: '#137EF9'}} /></li>
      <li className="list-group-item"><label>100%</label></li>
      <li className="list-group-item"><i className="far fa-plus" style={{color: '#137EF9'}} /></li>
    </ul>
  </footer>  
</div>
</React.Fragment>
    );
}


export default Drawing_panel;