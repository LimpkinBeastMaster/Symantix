import React from 'react';
import SessionEntry from './SessionEntry.jsx';

export default class SessionsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testEntries: [
        {
          id: 25,
          title: 'Pikachu',
          subject: 'Jack Zhang',
          description: 'A short description describing this session',
          date: 'June 15, 2016',
          duration: '0:03:58'
        },
        {
          id: 3,
          title: 'Longer Title',
          subject: 'Chris Haug',
          description: 'Short content',
          date: 'June 15, 2016',
          duration: '0:00:25'
        },
        {
          id: 17,
          title: 'My recording session!',
          subject: 'Marcus Phillips',
          description: 'A long description describing this session A long description describing this session',
          date: 'June 15, 2016',
          duration: '0:00:25'
        },
        {
          id: 20,
          title: 'Hack Reactor Interview',
          subject: 'A person',
          description: 'A short description describing this session',
          date: 'June 15, 2016',
          duration: '0:03:58'
        },
        {
          id: 14,
          title: 'Test',
          subject: 'Kani Muni',
          description: 'Some content',
          date: 'June 15, 2016',
          duration: '17:44:06'
        }
      ]
    }
  }

  render() {
    return (
      <div className="view sessions-view">
        <h4 className="sessions-view-title">All Recorded Sessions</h4>
        {this.state.testEntries.map(entry => <SessionEntry key={entry.id} entry={entry}/>)}
      </div>
    )
  }
}