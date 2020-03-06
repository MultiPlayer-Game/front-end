import React, { Component } from "react";
import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";
import { useDispatch, useSelector } from 'react-redux';
import Moving from '../clientMovement/Moving'
import styled from "styled-components";
import store from "../../store"
import lineSeries from "react-vis/dist/plot/series/line-series";

const StyledMap = styled.div`
    margin: 0 auto;
    width: 65%;
    height: 500px;
    flex: 1;
    padding: 3rem 3rem 3rem 3rem;
    position: relative;
    background-color: black;
`;

const Map = (props) => {
    const state = useSelector(state => state.game);
   
    
    
        // Create arrays to hold point coordinates and links
        

        const coordinates = [];
      
        const links = [];
        const line = []
       
        const room_data = props.roomData;
        room_data.map( room =>{
       
            coordinates.push( {x:room.x, y:room.y})
            for (let [key, value] of Object.entries(room)) {
                
                if (key === "e_to" || key ==="n_to"|| key === "w_to" || key ==="s_to"){
                    if(value !== 0){
                    
                        room_data.map(item =>{
                            
                            if (item.id === value){
                                links.push(item.id)
                                
                            }
                        })
                    }
                    
                }
                
                
              }
                
             
           
        })
        links.sort()
        links.map(item =>{
            room_data.map( x =>{
                if(x.id ===item) {
                    line.push({x:x.x, y:x.y})
                }
            })
        })
        console.log(line)
       

        // const currentRoom = store.getState().player.position;
       
        
        // Loop through each room in the room_data object
        // for (let room in room_data) {
        //     // Set data equal to the first element (x, y coordinates)
        //     // in each room of the room_data object
        //     // let data = (room_data.x, room_data.y);
            
        //     // coordinates.push(data);
        //     // for (let adjacentRoom in room_data) {
        //     //     links.push([
        //     //         room_data[room][0],
        //     //         room_data[room_data[room][1][adjacentRoom]][0]
        //     //     ]);
               
        //     // }
        //     console.log(room)
        // }


        return (
            <StyledMap>
                <FlexibleXYPlot width={500} height={500}>
                    

                    <MarkSeries
                        strokeWidth={3}
                        opacity="1"
                        size="3"
                        color="#F39C12"
                        data={coordinates}
                        style={{ cursor: "pointer" }}
                    />

                    <MarkSeries
                        strokeWidth={3}
                        opacity="1"
                        size="3"
                        color="#1ABC9C"
                        data={[{ "x": state.position[0], "y": state.position[1] }]}
                        style={{ cursor: "pointer" }}
                    />

                    
                        
                        <LineSeries
                            strokeWidth="2"
                            color="#F39C12"
                            data={line}
                            // key={Math.random() * 100}
                        />
                
                </FlexibleXYPlot>
                <Moving />
            </StyledMap>
        );
    
}

export default Map;