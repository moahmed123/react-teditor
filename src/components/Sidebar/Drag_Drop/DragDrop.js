import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import shortid from "shortid";

// fake data generator
const getItems = items => {
    items.forEach(i => (i.id = shortid.generate()));
    return items;
};

const initialItems = [
 
  {
    name: "banner",
    componentProps: {
      code: '<div><span>BANNER00</span></div>'
    }
  },
  {
    name: "banner",
    componentProps: {
      code: '<div><span>BANNER 2222</span></div>'
    }
  }
];

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
//StyleSheet
const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});
//StyleSheet

const withDraggability = Comp => props => {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >

          {/* <Comp {...props} /> */}
          <div className="label">
            <a href="#">
                <img src="../../assets/images/arrow-left.png" />
                <span>promoted product</span> 
            </a>
        </div>
          {/* <div><span>33</span></div> */}
        </div>
      )}
    </Draggable>
  );
};



const Banner = props => {
  const {
    componentProps: { code }
  } = props;
  return <div dangerouslySetInnerHTML={{ __html: code }} />;
};

const withDroppability = Comp => props => (
  <Droppable droppableId={props.id}>
    {(provided, snapshot) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
      >
        <Comp {...props} />
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

const options = {  
  banner: withDraggability(Banner)
};

const DropZone = withDroppability(props => (
  <div>
    {props.items.map((item, index) => {
      const Comp = options[item.name];
      if (Comp) return <Comp {...item} key={index} index={index} />;
      else return null;
    })}
  </div>
));

class DragDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(initialItems)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <DropZone id="MASTER" items={this.state.items} />
      </DragDropContext>
    );
  }
}

// Put the thing into the DOM!
export default DragDrop;

// import React, { Component } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import  {
//   DraggableStyle,
//   DroppableProvided,
//   DroppableStateSnapshot,
//   DraggableProvided,
//   DraggableStateSnapshot,
//   DropResult,
// } from 'react-beautiful-dnd';
// // import { resetServerContext } from "react-beautiful-dnd"
// // resetServerContext()


// class DragDrop extends Component{
//   // Normally you would want to split things out into separate components.
//   // But in this example everything is just done in one place for simplicity
//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <Droppable droppableId='droppable'>
//           {(dropProvided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
//             <div>
//                 <Draggable key={1} draggableId={1}>
//                   {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
//                     <div>
//                       <div>
//                         item 1
//                       </div>
//                       {provided.placeholder}
//                     </div>
//                   )}
//                 </Draggable>
//                 <Draggable key={2} draggableId={2}>
//                   {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
//                     <div>
//                       <div                        
//                         {...provided.dragHandleProps}
//                       >
//                         item 2
//                       </div>
//                       {provided.placeholder}
//                     </div>
//                   )}
//                 </Draggable>            
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     );
//   }
// }

// export default DragDrop;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<QuoteApp />, rootElement);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// class DragDrop extends Component {
//     render() {
//         return (
//             <DragDropContext>
//                 <Droppable droppableId="list">
//                     <Draggable>
//                         <div className="label">
//                             <a href="#">
//                                 <img src="../../assets/images/arrow-left.png" />
//                                 <span>promoted product</span>
//                             </a>
//                         </div>
//                     </Draggable>
//                 </Droppable>
//             </DragDropContext>
//         )
        
//     }
// }
// const mapStateToProps = state => ({
//     initialized: state.app.initialized,
// })

// export default connect(mapStateToProps)(DragDrop)
