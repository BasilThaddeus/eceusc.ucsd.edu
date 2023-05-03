import * as React from "react";

import members from "./members";
import { Grid, Image } from "semantic-ui-react";
import "./Route.css"

const MemberItem = props => (
  <div class="item">
    <div class="ui small image">
      <img src={props.pic} alt="memberPic" />
    </div>
    <div class="content">
      <div class="header">{props.name}</div>
      <div class="meta">
        <span class="position">{props.position}</span>
      </div>
      <div class="description">
          <div class="ui bulleted list">
            <div class="item">
              {props.major} {props.depth ? <span>({props.depth})</span> : null}
            </div>
            {props.lines.map(line => (
              <div class="item">{line}</div>
            ))}
          </div>
      </div>
    </div>
  </div>
);

//const MembersContainer = () => ();

export default class OpenSource extends React.Component {
  render() {
    return (
      <div className="Contain">
      <div class="ui grid" style={{paddingTop: "127px",backgroundImage: "url('../../public/background.svg')", paddingBottom:"100px"}}>
        
        <div class="ui centered row" style={{backgroundImage: "url('../../public/background.svg')", width: "100%"}}>
          <h1 class="ui centered header" style={{ width: "80%"}}>
            Meet the Team
          </h1>
        </div>

        <div class="ui row">
          <div class="three wide column"></div>

          <div class="ten wide column">
            <div class="ui row">
              <div class="ui stackable two column grid">
                <div class="column">
                  <div class="ui centered header">Executive</div>
                  <div class="ui divider"></div>
                  <div class="ui items">
                    {members
                      .filter(m => m.isExec | m.isPrez)
                      .map(m => (
                        <MemberItem {...m} />
                      ))}
                  </div>
                </div>
                <div class="column">
                  <div class="ui centered header">General</div>
                  <div class="ui divider"></div>
                  <div class="ui items">
                    {members
                      .filter(m => !m.isExec & !m.isPrez)
                      .map(m => (
                        <MemberItem {...m} />
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div class="three wide column"></div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
