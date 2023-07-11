import axios from 'axios';
import { useEffect, useState } from "react";
import AddedFlight from './AddedFlight';
import AddState from './AddState';

const AddFlight = () => {
  const LoginId=localStorage.getItem("LoginId")
  const [Sate1, SetState] = useState([]);
  const [Distric1, SetDistric] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    State: '',
    From: '',
    To: '',
    Date: '',
    Time: '',
    SeatAvailable: ["1,23,45"],
    BusinessClass:['1,2,4'],
    AdminId: LoginId,
    Amount: 0
  });
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stateResponse = await axios.get('http://localhost:3000/api/GetState');
        console.log(stateResponse.data);
        SetState(stateResponse.data);

        const districtResponse = await axios.get('http://localhost:3000/api/GetDistrict');
        console.log(districtResponse.data);
        SetDistric(districtResponse.data);

        setIsLoading(false); // Set loading state to false after fetching data
      } 
     
      catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/AddFlight', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setFormData({
      name: '',
      State: '',
      From: '',
      To: '',
      Date: '',
      Time: '',
      SeatAvailable: [],
      AdminId: LoginId,
      Amount: ''
    });
  };

  return (
    <>
      <div>
        <center>
          {isLoading ? ( // Check if data is loading
            <p>Loading...</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                <h1 style={{ front: "arial" }}>Flight Name</h1>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <h1 style={{ front: "arial" }}>State From</h1>
                <select
                  name="State"
                  value={formData.State}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a state</option>
                  {Sate1.map((state, index) => (
                    <option key={index} value={state.State}>
                      {state.State}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <h1>From</h1>
                {/* <input
                  type="text"
                  name="From"
                  value={formData.From}
                  onChange={handleChange}
                  required
                /> */}
                <select
                  name="From"
                  value={formData.From}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a state</option>
                  {Distric1.map((state, index) => (
                    <option key={index} value={state.Distric
                    }>
                      {state.Distric}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <h1>To</h1>
                {/* <input
                  type="text"
                  name="To"
                  value={formData.To}
                  onChange={handleChange}
                  required
                /> */}
                 <select
                  name="To"
                  value={formData.To}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a state</option>
                  {Distric1.map((state, index) => (
                    <option key={index} value={state.Distric
                    }>
                      {state.Distric}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <h1>Date</h1>
                <input
                  type="date"
                  name="Date"
                  value={formData.Date}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <h1>Time</h1>
                <input
                  type="Time"
                  name="Time"
                  value={formData.Time}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>

              </label>
              <label>
                <h1>SeatAvailable</h1>
                <input
                  type="number"
                  name="Amount"
                  value={formData.Amount}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit">Submit</button>
            </form>
          )}
        </center>
      </div>
      <div>
        <AddedFlight />
      </div>
    </>
  );
}

export default AddFlight;
