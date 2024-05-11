import { useState } from 'react';
import './filterbox.css';
import { FaFilter } from 'react-icons/fa';

const Filterbox = () => {

    const [mobileFilter, setMobileFilter] = useState(false);

    return (
        <div className='FilterBox'>
            <div className="FilterBoxInner">
                <h2>Master Price</h2>
                <div className="threeButton">
                    <button>Round Trip</button>
                    <button autoFocus>One Way</button>
                    <button>Multi City</button>
                </div>
                <div className='searchBox'>
                    <button className='mobileFilterButton' onClick={() => setMobileFilter(prev => !prev)}> <span><FaFilter /></span> Filter</button>
                    <div className={`searchBoxTop ${mobileFilter ? 'showInMobile' : ''}`}>
                        <input type="text" placeholder='LHR' />
                        <input type="text" placeholder='CDG' />
                        <input type="date" name="" id="" />
                        <select name="day" id="daySelect">
                            <option value="">Day -</option>
                            <option value="1">- 1</option>
                            <option value="2">- 2</option>
                            <option value="3">- 3</option>
                            <option value="4">- 4</option>
                            <option value="5">- 5</option>
                            <option value="6">- 6</option>
                            <option value="7">- 7</option>
                            <option value="8">- 8</option>
                            <option value="9">- 9</option>
                            <option value="10">- 10</option>
                            <option value="11">- 11</option>
                            <option value="12">- 12</option>
                            <option value="13">- 13</option>
                            <option value="14">- 14</option>
                            <option value="15">- 15</option>
                            <option value="16">- 16</option>
                            <option value="17">- 17</option>
                            <option value="18">- 18</option>
                            <option value="19">- 19</option>
                            <option value="20">- 20</option>
                        </select>
                        <select name="day" id="daySelect">
                            <option>Day +</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                        <select name="timzone" id="">
                            <option value="anytime">Any Time</option>
                            <option value="morning">Morning</option>
                            <option value="evening">Evening</option>
                            <option value="night">Night</option>
                        </select>
                        <span>+</span>
                        <select name="" id="">
                            <option value="adt">ADT</option>
                            <option value="est">EST</option>
                            <option value="edt">EDT</option>
                            <option value="gmt">GMT</option>
                        </select>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <span>+</span>
                    </div>
                    <div className="searchBoxBottom">
                        <div>
                            <input type="checkbox" name="" id="extraoption" />
                            <label htmlFor="extraoption">Extra Option</label>
                        </div>
                        <div>
                            <label >Environment</label>
                            <input type="radio" name="same" id="dummy" />
                            <label htmlFor="dummy">Dummy</label>
                            <input type="radio" name="same" id="pdt" />
                            <label htmlFor="pdt">PDT</label>
                        </div>
                        <div>
                            <button className='searchButton'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filterbox