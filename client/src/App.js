import './App.css';
import { useState, useEffect } from 'react';
import Configuration from './components/Process/Configuration';
import { BsPlusCircle } from 'react-icons/bs';

function App() {

  const [profile, setProfile] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('profile/default');
      const data = await result.json();
      data.confs = sortDataByStart(data.confs);
      setProfile(data);
    }
    fetchData()
  }, [])

  const filerChange = (event) => {
    setFilter(event.target.value);
  }

  const sortDataByStart = (data) => {
    return data.sort((a, b) => {
      return a.start - b.start;
    });
  }

  const filteredData = () => {
    if (!profile.confs)
      return [];
    if (filter === '') {
      return profile.confs;
    }
    return profile.confs.filter(conf => {
      return (conf.start/3600).toString().toLowerCase().includes(filter.toLowerCase()) || (conf.end/3600).toString().toLowerCase().includes(filter.toLowerCase());
    })
  }


  return (
    <div className="App">
      <div className="profile-manage">
        <div className="profile-bar">
          <div className="profile-bar-search">
            <input value={filter} onChange={filerChange} type="text" placeholder="Search" />
          </div>
        </div>
        <div className="profile-list">
          {
            filteredData().map((conf, index) => {
              console.log(conf);
              return (
                <div className="profile-container">
                  <Configuration configuration={conf} />
                </div>
              )
            })
          }
        </div>
        <div className="profile-bar">
          <div className="profile-bar-button">
            <button className='add-icon' ><BsPlusCircle /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
