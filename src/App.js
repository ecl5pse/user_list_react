import React ,{Component , Fragment} from 'react';
import  styles from './App.module.css';
import  Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import _  from 'lodash';


const value =  [
  {
    id: 1,
    firstName: 'Brian',
    lastName: 'McCauley',
    profileImage: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',

  },
  {
    id: 2,
    firstName: 'Chad',
    lastName: 'Hayes',
    profileImage: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',

  },

  {
    id: 3,
    firstName: 'Jeff',
    lastName: 'Buck',
    profileImage: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',

  },
  {
    id: 4,
    firstName: 'Kenny',
    lastName: 'Griffin',
    profileImage: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',

  },

  {
    id: 5,
    firstName: 'Tom',
    lastName: 'Glover',
    profileImage: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',

  }

]



class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        items:value.map(data =>({...data, isSelect:false})),

      }
  }

  onCheckHandler = () => {

    this.setState({
                    isSelect: !this.state.isSelect
                  });

    console.table(this.state)
  }


  render() {
    const  {items} = this.state;
    return (
        <Fragment>
          <div className={styles.header}></div>
          {
              items.map(data=> (
                  <div className={styles.container} key={data.id}>
                    <h1 className={styles.name}>{data.firstName}{data.lastName}</h1>
                     <h4 className={styles.level}> Level{data.id}</h4>
                   <img  src={data.profileImage} alt='user image'/>
                    <Icon path={mdiCheck} className={styles.icon } color='red' size='30'  onClick={event => {
                      this.onCheckHandler();}}/>
            </div>
            ))

          }
        </Fragment>
    )
  }
}


export default App;
