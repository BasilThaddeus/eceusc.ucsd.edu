import * as React from 'react';
import {Grid, Item, Image, Header} from 'semantic-ui-react';

export const hideEmail = (email) => {
  return email.split('').map(c=>c.charCodeAt(0)+1).map(c=>String.fromCharCode(c)).join('')
}
export const getEmail = (hiddenEmail) =>
  hiddenEmail
    .split('')
    .map(c=>String.fromCharCode(c.charCodeAt(0) - 1))
    .join('')

export const Container = (props) =>  (
  <Grid>
    <Grid.Row centered>
      <Header as="h1">
        {props.header}
        <Header.Subheader style={{textTransform: 'none'}}>
          {props.subheader}
        </Header.Subheader>
      </Header>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={10}>
        {props.content}
        {(props.content2) ? props.content2 : null}
        {props.contacts ? (
          <div style={{marginTop: 60}}>
            <Header as='h3'>Questions or ideas?</Header>
            <Item.Group>
              {props.contacts.map(c=>(
                <Item>
                <Item.Image size='tiny' src={c.pic} circular/>
          
                <Item.Content>
                  <Item.Header as='a'>{c.name}</Item.Header>
                  <Item.Meta>{c.position}</Item.Meta>
                  <Item.Description>
                    <a
                    href={`mailto:${getEmail(c.email)}`}
                    style={{fontSize:'.8rem'}}>
                      {getEmail(c.email)}
                    </a>
                  </Item.Description>
                </Item.Content>
              </Item>
              ))}
            </Item.Group>
          </div>
        ): null}
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid.Row>
    
  </Grid>
)