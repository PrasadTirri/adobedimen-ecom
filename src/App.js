import "./App.scss";
import logo from "./aimages/Flipkart_logo.png";
import downarrow from "./aimages/arrow_drop_down_black_24dp@2x.png";
import support from "./aimages/help_outline-24px (3)@2x.png";
import notification from "./aimages/Group 8570@2x.png";
import user from "./aimages/Ellipse 488@2x.png";
import dashboard from "./aimages/dashboard_black_24dp@2x.png";
import mprocess from "./aimages/work_history_black_24dp@2x.png";
import sconfig from "./aimages/tune_black_24dp@2x.png";
import mreports from "./aimages/auto_graph_black_24dp@2x.png";
import more from "./aimages/read_more_black_24dp@2x.png";
import arrowleft from "./aimages/arrowleft.png";
import oracle from "./aimages/Oracle-Logo-For-Website@2x.png";
import bulkupload from "./aimages/upload_black_24dp@2x.png";
import saved from "./aimages/save_black_24dp@2x.png";
import uparrow from "./aimages/Group 10162@2x.png";
import checkboximg from "./aimages/check_box_black_24dp-3@2x.png";
import toggle1 from "./aimages/Group 10073@2x.png";
import toggle2 from "./aimages/Group 10074@2x.png";
import arrowdown from "./aimages/Group 10163@2x.png";

function App() {
  return (
    <div className="dashboard">
      {/* <div className="header">
        <div className="image-container">
          <img className="logo" src={logo} alt="fblogo" />
        </div>
        <div className="header-headings">
          <div>
            <p className="htext">Pay Cycle:31-May-2021 to 31-June-2021</p>
            <div className="amazon">
              <p className="h2text">Amazon India Pvt Ltd</p>
              <img className="downarrow" src={downarrow} alt="downarrow" />
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img className="support" src={support} alt="help" />
              <p className="htext">SUPPORT</p>
            </div>
            <div className="icon">
              <img className="support" src={notification} alt="notifys" />
              <p className="htext">NOTIFICATIONS</p>
            </div>
            <div className="icon">
              <p className="userName">R</p>
              <img className="usericon" src={user} alt="accName" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="header">
        <div className="image-container">
          <img className="logo" src={logo} alt="fblogo" />
        </div>

        <div className="header-info">
          <div className="company-details">
            <p>Pay Cycle: 31 May-2021 to 31-june-2021</p>
            <div className="AMAZON-TEXT">
              <h5>Amazon India Pvt Ltd.</h5>
              <img className="downarr" src={downarrow} />
            </div>
          </div>
          <div className="header-icons">
            <div className="icon-with-text">
              <img src={support} />
              <p>SUPPORT</p>
            </div>
            <div className="icon-with-text">
              <img src={notification} />
              <p>NOTIFICATIONS</p>
            </div>
            <div className="profile-icon">
              <img src={user} />
              <p>R</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="sidebar">
          <div className="sbar1">
            <div className="icon">
              <img className="support" src={dashboard} alt="dashboard" />
              <p className="icon-text">DashBoard</p>
            </div>

            <div className="icon">
              <img className="support" src={mprocess} alt="mprocess" />
              <p className="icon-text">Monthly Process</p>
            </div>
            <div className="icon">
              <img className="support" src={sconfig} alt="scoinfig" />
              <p className="icon-text">Super Configura.</p>
            </div>
            <div className="icon">
              <img className="support" src={mreports} alt="mreports" />
              <p className="icon-text">Master Reports</p>
            </div>
            <div className="icon">
              <img className="support" src={more} alt="more" />
              <p className="icon-text">More</p>
            </div>
          </div>
          <div className="sbar2">
            <div className="org">
              <p className="sb2menu ">Services Offered</p>
              <p className="sb2menu selected">Org Setup</p>
            </div>
            <img className="arrleft" src={arrowleft} alt="arrowleft" />
          </div>
        </div>
        <div className="content">
          <div className="content-top">Org Setup</div>
          <div className="content-middle">
            <div className="content-middle-one">
              <span className="cm-heading">Details</span>
              <span className="para">
                Page to configure all the company details
              </span>
            </div>
            <div className="content-middle-two">
              <div className="bulk-container">
                <img className="bulk-image" src={bulkupload} alt="bulkupload" />
                <p className="bulk-text">Bulk Upload</p>
              </div>
              <div className="save-container">
                <img className="save-image" src={saved} alt="save" />
                <p className="save-text">Save</p>
              </div>
              <div className="arrow-container">
                <img className="uparrow-image" src={uparrow} alt="uparrow" />
              </div>
            </div>
          </div>
          <div className="content-end">
            <div className="ce-top">
              <div>
                <img className="oracleImage" src={oracle} alt="oracle" />
              </div>
              <div className="preferences">
                <p className="pref-heading">Organisation Logo</p>
                <p className="pref-line1">
                  Lorem Ipsum is simply dummy text of printing and{" "}
                </p>
                <p className="pref-line2">
                  Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of 1
                  MB
                </p>
              </div>
            </div>
            <div className="ce-end">
              <label>
                Org Id
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter Org Id"
                />
              </label>
              <label>
                City Name
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter City Name"
                />
              </label>
              <label>
                Org Name
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter Org Name"
                />
              </label>
              <label>
                Team Name
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter Team Name "
                />
              </label>
              <label>
                No. of Integrations <br />
                <select className="input-select">
                  <option>Select</option>
                  <option></option>
                </select>
              </label>
              <label>
                Team Count
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter Team Count"
                />
              </label>
              <label>
                Similar Month
                <br />
                <select className="input-select">
                  <option>Select</option>
                  <option></option>
                </select>
              </label>
              <label>
                Go Live Count <br />
                <select className="input-select">
                  <option>Select</option>
                  <option></option>
                </select>
              </label>
              <label>
                Integration Months <br />
                <select className="input-select">
                  <option>Select</option>
                  <option></option>
                </select>
              </label>
              <label>
                TAT for Integration <br />
                <select className="input-select">
                  <option>Select</option>
                  <option></option>
                </select>
              </label>
              <label>
                AI Cycle <br />
                <select className="input-select">
                  <option>Select</option>
                  <option></option>
                </select>
              </label>
              <label>
                Integration Date
                <input
                  className="input-field"
                  type="date"
                  placeholder="Select"
                />
              </label>
              <label>
                ERP Date (Agreed)
                <input
                  className="input-field"
                  type="date"
                  placeholder="Select"
                />
              </label>
              <label>
                ISP Date (Agreed)
                <input
                  className="input-field"
                  type="date"
                  placeholder="Select"
                />
              </label>
              <label>
                Active AI Time
                <input
                  className="input-field"
                  type="date"
                  placeholder="Select"
                />
              </label>
              <label>
                Active AI QC Time
                <input
                  className="input-field"
                  type="date"
                  placeholder="Select"
                />
              </label>
              <label className="checkboxlabel">
                <img className="cb-img" src={checkboximg} alt="cbimg" />
                <span className="checkbox-text">Monthly Cycles</span>
              </label>
            </div>
            <span className="toggleCon ">
              <div className="togglefield">
                <p className="erpname">ERP Module (N/Y)</p>
                <img className="toggle" src={toggle1} alt="erp" />
              </div>
              <div className="togglefield2">
                <p className="Ainame">AI Format (N/Y) (N/Y)</p>
                <img className="toggle" src={toggle2} alt="aiformat" />
              </div>
            </span>
            <div className="last-content-top"></div>
            <div>
              <div className="last-content">
                <span>
                  <p className="lastcon-head">Lock Setup</p>
                  <p className="lastcon-text">
                    Lorem Ipsum is simply dummy text of printing and typesetting
                    Industry.
                  </p>
                </span>
                <img className="arrowdown" src={arrowdown} alt="lock" />
              </div>
              <div className="last-content">
                <span>
                  <p className="lastcon-head">Integration Info</p>
                  <p className="lastcon-text">
                    Lorem Ipsum is simply dummy text of printing and typesetting
                    Industry.
                  </p>
                </span>
                <img className="arrowdown" src={arrowdown} alt="Iinfo" />
              </div>
              <div className="last-content">
                <span>
                  <p className="lastcon-head">AI Info</p>
                  <p className="lastcon-text">
                    Lorem Ipsum is simply dummy text of printing and typesetting
                    Industry.
                  </p>
                </span>
                <img className="arrowdown" src={arrowdown} alt="AIinfo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
