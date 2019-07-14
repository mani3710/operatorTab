import React, { Component } from 'react';
import {
    ChannelTableContainer,
    Container,
    TableRowStyle,
    DeleteBtn,
    ActionBtn,
    Multidropdown,
    Asseteslevel,
    Multioption,
    Buttondiv,
    TimeDivText,
    FreeStyleBtn,
    RightButton,
    RightButtonbtm

} from './styles';
import { channelList } from '../MockData';


export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            assetsLiveBtColor: "#2988e5"
        }
    }
    onPressTakeClip(){
        this.setState({assetsLiveBtColor:"#ec407a"})

    }

    render() {
        return (
            <div style={{ padding: 81 }}>
                <div style={{ float: "left" }}>
                    <Container>


                        <ChannelTableContainer>
                            {/* <col width="130" />
                        <col width="80"/> */}

                            {channelList.map((userdata, index) => (
                                <TableRowStyle key={index} id='user' onClick={user => this.User(userdata)}>
                                    <td>{userdata.time}</td>
                                    <td>{userdata.description}</td>
                                    <td>{userdata.address}</td>
                                </TableRowStyle>
                            ))}

                        </ChannelTableContainer>


                    </Container>
                    <div style={{ marginLeft: 11, width: 700,float:"left",marginTop:21 }}>
                        <div>
                            <DeleteBtn>
                                Delete
                   </DeleteBtn>
                        </div>
                        <div style={{ float: "right" }}>
                            <ActionBtn>CUE</ActionBtn>
                            <ActionBtn>HOLD</ActionBtn>
                            <ActionBtn>TAKE</ActionBtn>
                        </div>

                    </div>
                </div>
                <div style={{ float: "left", marginLeft: 21 }}>
                    <strong> Control Point</strong>
                    <select style={{ width: "100%" }}>
                        <option>Hal Studio</option>
                        <option>Hal Studio</option>
                        <option>Hal Studio</option>
                    </select>
                    <Multidropdown multiple>

                        <option style={{fontSize:20,marginTop:15}}>Hal Studio</option>
                        <option style={{fontSize:20,marginTop:15}}>Hal Studio</option>
                        <option style={{fontSize:20,marginTop:15}}>Hal Studio</option>
                    </Multidropdown>
                </div>
                <div style={{ float: "left", marginLeft: 21, marginLeft: 21, width: 221 }}>
                    <TimeDivText>
                        12.12.10.0.0
                    
</TimeDivText>
                    <Asseteslevel>
                        <Buttondiv>
                            Assets/Live 1
                        
</Buttondiv>
                        <Buttondiv>
                            Assets/Live 1
                            
</Buttondiv>
                        <Buttondiv>
                            Assets/Live 1
                            
</Buttondiv>
                        <Buttondiv>
                            Assets/Live 1
                            
</Buttondiv>
                        <Buttondiv>
                            Assets/Live 1
                            
                             </Buttondiv>
                        <FreeStyleBtn>
                            FreeStyle
</FreeStyleBtn>

                    </Asseteslevel>
                    <RightButton
                    onClick={()=>this.onPressTakeClip()}
                    >
Insert and take clip
                </RightButton>
                <RightButtonbtm>
                Insert and take Live
                </RightButtonbtm>
                </div>
               
            </div>

        );
    }
}
