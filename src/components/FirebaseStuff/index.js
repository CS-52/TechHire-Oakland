import React from 'react';
import * as firebase from 'firebase';

export default class FirebaseStuff extends React.Component {
  constructor() {
    super();
    this.state = {
      schools: {},
      pathways:{}
    };
  }

  componentDidMount() {
    const schoolsRef = firebase.database().ref("schools");
    const pathwaysRef = firebase.database().ref("pathways");

    schoolsRef.on("value", snapshot => {
      let items = snapshot.val();
      //console.log(snapshot.val());
      const schools = {};
      for( let item in items) {
        const school = {
          contact : items[item].contact,
          cost : items[item].cost,
          imgPath: items[item].imgPath,
          location: items[item].location,
          website : items[item].website
        };
        schools[item] = school;
      }
      this.setState({ schools: schools});
    });

    pathwaysRef.on("value", snapshot => {
      let items = snapshot.val();
      //console.log(snapshot.val());
      const pathways = {};
      for( let item in items) {
        const pathway = {
          beginner: items[item].beginner,
          intermediate: items[item].intermediate,
          advanced: items[item].advanced
        };
        pathways[item] = pathway;
      }
      this.setState({ pathways: pathways});
    });
  }

  render() {
    return(
      <div> Ok... </div>
    );
  }


}
