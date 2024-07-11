
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
                  <label for="feald28" className="form-label user_label">Feald 28</label>
                  <input type="text" className="form-control" id="feald28" placeholder="Type Here" name="feald28" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald29" className="form-label user_label">Feald 29</label>
                  <input type="text" className="form-control" id="feald29" placeholder="Type Here" name="feald29" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald30" className="form-label user_label">Feald 30</label>
                  <input type="number" className="form-control" id="Feald30" placeholder="Type Here" name="Feald30" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald31" className="form-label user_label">Feald 31</label>
                  {/* <input type="text"  id="feald9"  placeholder="Type Here" name="feald9" /> */}
                  <select name="cars" id="cars" className="form-select">
                    <option value="volvo">Select one</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald32" className="form-label user_label">Feald 32</label>
                  <input type="text" className="form-control" id="feald32" placeholder="Type Here" name="feald32" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald33" className="form-label user_label">Feald 33</label>
                  <input type="text" className="form-control" id="Feald33" placeholder="Type Here" name="Feald33" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald34" className="form-label user_label">Feald 34</label>
                  {/* <input type="text"  id="feald9"  placeholder="Type Here" name="feald9" /> */}
                  <select name="cars" id="feald34" className="form-select">
                    <option value="volvo">Select one</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald35" className="form-label user_label">Feald 35</label>
                  <input type="text" className="form-control" id="Feald35" placeholder="Type Here" name="Feald35" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald36" className="form-label user_label">Feald 36</label>
                  <input type="number" className="form-control" id="feald36" placeholder="Type Here" name="feald36" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald37" className="form-label user_label">Feald 37</label>
                  <input type="text" className="form-control" id="feald37" placeholder="Type Here" name="feald37" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald38" className="form-label user_label">Feald 38</label>
                  <input type="number" className="form-control" id="feald38" placeholder="Type Here" name="feald38" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald39" className="form-label user_label">Feald 39</label>
                  <input type="number" className="form-control" id="feald39" placeholder="Type Here" name="feald39" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald40" className="form-label user_label">Feald 40</label>
                  {/* <input type="text"  id="feald9"  placeholder="Type Here" name="feald9" /> */}
                  <select name="cars" id="feald40" className="form-select">
                    <option value="volvo">Select one</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald41" className="form-label user_label">Feald 41</label>
                  <input type="date" className="form-control" id="feald41" placeholder="Type Here" name="feald41" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald42" className="form-label user_label">Feald 42</label>
                  <input type="date" className="form-control" id="feald42" placeholder="Type Here" name="feald42" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald43" className="form-label user_label">Feald 43</label>
                  <input type="text" className="form-control" id="feald43" placeholder="Type Here" name="feald43" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald44" className="form-label user_label">Feald 44</label>
                  <input type="number" className="form-control" id="feald44" placeholder="Type Here" name="feald44" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald45" className="form-label user_label">Feald 45</label>
                  <input type="text" className="form-control" id="feald45" placeholder="Type Here" name="feald45" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald46" className="form-label user_label">Feald 46</label>
                  <input type="text" className="form-control" id="feald46" placeholder="Type Here" name="feald46" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald47" className="form-label user_label">Feald 47</label>
                  <input type="file" className="form-control" id="feald47" placeholder="Type Here" name="feald47" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald48" className="form-label user_label">Feald 48</label>
                  <input type="file" className="form-control" id="feald48" placeholder="Type Here" name="feald48" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label for="feald49" className="form-label user_label">Feald 49</label>
                  <input type="file" className="form-control" id="feald49" placeholder="Type Here" name="feald49" />
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
