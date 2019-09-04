import * as React from 'react';
import styles from './BootstrapWebpart.module.scss';
import { IBootstrapWebpartProps } from './IBootstrapWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class BootstrapWebpart extends React.Component<IBootstrapWebpartProps, {}> {
  public render(): React.ReactElement<IBootstrapWebpartProps> {
    return (
      <div className={ styles.boostrapStyles }>
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Prabhu</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
}
