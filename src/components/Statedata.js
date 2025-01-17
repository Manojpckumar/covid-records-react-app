import React from 'react'

import { Accordion, Card, Button } from 'react-bootstrap';

import axios from 'axios';
export default class Statedata extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateData: {}
    };
  }

  componentDidMount() {
    axios.get("https://data.covid19india.org/state_district_wise.json")
      .then(response => {
        this.setState({ stateData: response.data })
      });
  }

  render() {

    let keys = Object.keys(this.state.stateData);

    return (
      <div className='row'>
        <div className='col-md-12'>
          <Accordion>

            {
              keys.map((item, key) => {

                let districts = this.state.stateData[item].districtData;
                let district_keys = Object.keys(districts);

                let total_active = 0;
                let total_confirmed = 0;
                let total_death = 0;
                let total_recover = 0;

                let district_list = [];

                for(let x in districts)
                {
                 total_active += districts[x].active; 
                 total_confirmed += districts[x].confirmed; 
                 total_death += districts[x].deceased; 
                 total_recover += districts[x].recovered; 
                  let ob = districts[x];
                  ob["district_name"] = x;
                 district_list.push(ob);
                }

                console.log(district_list);


                return (<Accordion.Item eventKey={key}>
                  <Accordion.Header> {item} - Total Cases : {total_confirmed} - Active : {total_active} - Recovered : {total_recover} - Total Death : {total_death} </Accordion.Header>
                  <Accordion.Body>
                    <table className='table table-bordered table-stripped'>
                      <thead>
                        <tr>
                          <td>District</td>
                          <td>Confirmed</td>
                          <td>Active</td>
                          <td>Recovered</td>
                          <td>Death</td>
                        </tr>
                      </thead>
                      <tbody>
                       
                          {
                            district_list.map((item,key)=>{
                              return (
                                <tr>
                                  <td>{item.district_name}</td>
                                  <td>{item.confirmed}</td>
                                  <td>{item.active}</td>
                                  <td>{item.recovered}</td>
                                  <td>{item.deceased}</td>
                                </tr>
                              )
                            })
                          }
                       
                      </tbody>
                    </table>
                  </Accordion.Body>
                </Accordion.Item>);
              })
            }




          </Accordion>
        </div>
      </div>
    )
  }
}
