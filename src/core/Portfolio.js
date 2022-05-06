import React from "react";

export default function Portfolio({ projects }) {
  const cardDeck = {
    display: "flex",
    flexDirection: "row",
  }
  const styles = {
    
  };
  const listGroup = {
    backgroundColor: "#000000",
    color: "white",
  };
  return (
    <div clasName='row row-cols-2 row-cols-md-2'>
      <div className='col mb-4' style={cardDeck}>
        
          {projects.map((project) => (
            <div className='card' style={{flex: '1'}}>
          <img src={project.image} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.url} className="btn btn-primary">Go somewhere</a>
            <a href={project.github} className="btn btn-primary">Github</a>
          </div>

        </div>
          ))}
         
        </div>
      </div>
  // <div className="container-fluid" style={styles}>
    
  //     <h1 style= {{justifyContent: 'center'}}>My Portfolio</h1>
  //     <div className="row row-cols-1 row-cols-md-2">
  //       <div className="col-mb-4">
  //     <div className="card" style={cardDeck}>
  //       {projects.map((project) => (
  //         <div className="card" style={listGroup}>
  //           <img src={project.image} className="card-img-top" alt="..."></img>
  //           <div className="card-body">
  //             <h5 className="card-title">{project.name}</h5>
  //             <p className="card-text">{project.description}</p>
  //             <a href={project.url} className="btn btn-primary">
  //               Live Link
  //             </a>
  //             <a href={project.github} className="btn btn-primary">
  //               Github
  //             </a>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  //   </div>
  //   </div>
  );
}
