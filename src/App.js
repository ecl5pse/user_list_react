import React ,{Component , Fragment} from 'react';
import  styles from './App.module.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = [
      {
        id: 1,
        firstName: 'Brian',
        lastName: 'McCauley',
        profileImage: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        isCheck:true

      },
      {
        id: 2,
        firstName: 'Chad',
        lastName: 'Hayes',
        profileImage: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        isCheck:true
      },

      {
        id: 3,
        firstName: 'Jeff',
        lastName: 'Buck',
        profileImage: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        isCheck:true
      },
      {
        id: 4,
        firstName: 'Kenny',
        lastName: 'Griffin',
        profileImage: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        isCheck:true
      },

      {
        id: 5,
        firstName: 'Tom',
        lastName: 'Glover',
        profileImage: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        isCheck:true
      }

    ]
  }






  render() {
    return (
        <Fragment>
          <div className={styles.header}></div>
          {
            this.state.map((state) => (
                <div className={styles.container} key={state.id}>
                  <h1 className={styles.name}> {state.firstName}{state.lastName}</h1>
                  <h4 className={styles.level}> Level{state.id}</h4>
                  <img src={state.profileImage} alt='profile image'/>
                  <div className={styles.checkbox}></div>
                </div>
            ))

          }
        </Fragment>
    )
  }
}


export default App;
