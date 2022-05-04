import './App.css';
import { useState, useEffect } from 'react';
import Configuration from './components/Process/Configuration';
import { BsPlusCircle } from 'react-icons/bs';

function App() {

  const [profile, setProfile] = useState([]);
  const [filter, setFilter] = useState('');
  const [error, setError] = useState(null);
  const [profileName, setProfileName] = useState("default");

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const result = await fetch(`profile/${profileName}`);
    if (result.status === 200) {
      const data = await result.json();
      data.confs = sortDataByStart(data.confs);
      setProfile(data);
    } else if (result.status === 404) {
      setError('Profilo non trovato');
    } else if (result.status === 500) {
      setError('Errore nel server');
    }
  }

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
      return (conf.start / 3600).toString().toLowerCase().includes(filter.toLowerCase()) || (conf.end / 3600).toString().toLowerCase().includes(filter.toLowerCase());
    })
  }

  const updateConfList = async () => {
    await fetchData();
  }


  return (
    <div className="App">
      {(!error) ? <div className="profile-manage">
        <div className="profile-bar">
          <div className="profile-bar-search">
            <input value={filter} onChange={filerChange} type="text" placeholder="Search" />
          </div>
        </div>
        <div className="profile-list">
          {
            filteredData().map((conf, index) => {
              conf.index = index;
              conf.profileName = profileName;
              return (
                <div className="profile-container">
                  <Configuration callback={updateConfList} configuration={conf} />
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
      </div> : <div className="error">{error}</div>}
    </div>
  );
}

export default App;
