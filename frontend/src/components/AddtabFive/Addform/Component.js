
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, } from 'react';
import { useRef } from 'react';
// import "../../styles/component.css";

const TabFive = () => {

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      // Handle file upload here
    }
  };

  return (

    <>
      <div className='add_tab5'>
        <form action="#" method='POST'>

          <div className='add_pro'>
            <div className="addprofile_img" onClick={handleClick}>
              <div className="addinner_circle">
                <img src="img/profile.jpg" className='addprofile5' />
                <i className="ri-edit-box-fill addicon5"></i>
              </div>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <div className='row'>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald2" className="form-label user_label">Feald 2</label>
                  <input type="text" className="form-control" id="feald2" placeholder="Type Here" name="feald2" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald3" className="form-label user_label">Feald 3</label>
                  <input type="text" className="form-control" id="feald3" placeholder="Type Here" name="feald3" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald4" className="form-label user_label">Feald 4</label>
                  <input type="text" className="form-control" id="Feald4" placeholder="Type Here" name="Feald4" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald5" className="form-label user_label">Feald 5</label>
                  <input type="file" className="form-control" id="Feald5" placeholder="Type Here" name="Feald5" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald6" className="form-label user_label">Feald 6</label>
                  <input type="text" className="form-control" id="feald6" placeholder="Type Here" name="feald6" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald7" className="form-label user_label">Feald 7</label>
                  <input type="number" className="form-control" id="Feald7" placeholder="Type Here" name="Feald7" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald8" className="form-label user_label">Feald 8</label>
                  <input type="text" className="form-control" id="Feald8" placeholder="Type Here" name="Feald8" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald9" className="form-label user_label">Feald 9</label>
                  {/* <input type="text"  id="feald9"  placeholder="Type Here" name="feald9" /> */}
                  <select name="cars" id="cars" className="form-control">
                    <option value="volvo">Select one</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald10" className="form-label user_label">Feald 10</label>
                  <input type="number" className="form-control" id="feald10" placeholder="Type Here" name="feald10" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald11" className="form-label user_label">Feald 11</label>
                  <input type="text" className="form-control" id="feald11" placeholder="Type Here" name="feald11" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald12" className="form-label user_label">Feald 12</label>
                  <input type="number" className="form-control" id="feald12" placeholder="Type Here" name="feald12" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald13" className="form-label user_label">Feald 13</label>
                  <input type="number" className="form-control" id="feald13" placeholder="Type Here" name="feald13" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald14" className="form-label user_label">Feald 14</label>
                  <input type="file" className="form-control" id="feald14" placeholder="Type Here" name="feald14" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald15" className="form-label user_label">Feald 15</label>
                  <input type="text" className="form-control" id="feald15" placeholder="Type Here" name="feald15" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald16" className="form-label user_label">Feald 16</label>
                  <input type="text" className="form-control" id="feald16" placeholder="Type Here" name="feald16" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald17" className="form-label user_label">Feald 17</label>
                  <input type="text" className="form-control" id="feald17" placeholder="Type Here" name="feald17" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald18" className="form-label user_label">Feald 18</label>
                  <input type="text" className="form-control" id="feald18" placeholder="Type Here" name="feald18" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald19" className="form-label user_label">Feald 19</label>
                  <input type="file" className="form-control" id="feald19" placeholder="Type Here" name="feald19" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald20" className="form-label user_label">Feald 20</label>
                  <input type="text" className="form-control" id="feald20" placeholder="Type Here" name="feald20" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald21" className="form-label user_label">Feald 21</label>
                  <input type="text" className="form-control" id="feald21" placeholder="Type Here" name="feald21" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald22" className="form-label user_label">Feald 22</label>
                  <input type="text" className="form-control" id="feald22" placeholder="Type Here" name="feald22" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald23" className="form-label user_label">Feald 23</label>
                  <input type="text" className="form-control" id="feald23" placeholder="Type Here" name="feald23" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald24" className="form-label user_label">Feald 24</label>
                  <input type="text" className="form-control" id="feald24" placeholder="Type Here" name="feald24" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald25" className="form-label user_label">Feald 25</label>
                  <input type="text" className="form-control" id="feald25" placeholder="Type Here" name="feald25" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald26" className="form-label user_label">Feald 26</label>
                  <input type="text" className="form-control" id="feald26" placeholder="Type Here" name="feald26" />
                </div>
              </div>
            </div>
              <button type="submit" class="addform_bot1">Save</button>
          </div>
        </form>
      </div>

    </>
  );
}

export default TabFive;
