import React from 'react';
import Box from  "./Box/Box"

class App extends React.Component {
 state = {
   boxes:[
       {id:1,items:[{name:"item 1",id:1,left:true},{name:"item 2",id:2,left:true}]},
       {id:2,items:[{name:"item 3",id:3,left:false}]}
     ]
 };
    changePosition = (item) => {
        this.setState({boxes:this.state.boxes.map(e => {
                if(e.items.some(e => e.id === item.id)){
                    return {id:e.id,items:e.items.filter(e => e.id !== item.id)}
                }else{
                    e.items.push(item);
                    return {id:e.id,items:e.items}
                }
            })})
    };
  render(){
    return (
          <div style={{display:"flex",width:400,height:400,flexDirection:"start"}}>
              {
                  this.state.boxes.map(e => (
                       <Box key={e.id} box={e} changePosition={this.changePosition}/>
                  ))
              }
          </div>
     );
  }

}

export default App;
