import * as React from 'react';
import type { IHelloWorldProps } from './IHelloWorldProps';
import styles from './HelloWorld.module.scss';
import { WebPartTitle } from '@pnp/spfx-controls-react';

import axios from 'axios';

interface IHelloWorldState {
  persons: Array<{ id: number; name: string, email: string }>; // Define the state type for clarity
}


export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {
  constructor(props: IHelloWorldProps) {
    super(props);
    this.state = {
      persons: []
    };
  }

  componentDidMount(): void {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


  public render(): React.ReactElement<IHelloWorldProps> {

    return (
      <section>

        {/* <h2 className={styles.HeadTitle}>valuable Users</h2> */}
        <div className={styles.helloWorld}>
          <WebPartTitle displayMode={this.props.displayMode} title={this.props.title} updateProperty={this.props.updateProperty}
          />
          {
            this.state.persons.map((item) => (
              <div className={styles.holder} key={item.id}>
                <h2>
                  {item.name}
                </h2>
                <ul>
                  <li>
                    {item.email}
                  </li>
                </ul>
              </div>
            ))
          }
        </div>

      </section>
    );
  }
}
