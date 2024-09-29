import "./Signup.css";

const Signup = () => {
  return (
    <div className="frame1920wlight-container1">
      <div className="frame1920wlight-frame1920wlight">
        <div className="frame1920wlight-footer">
          <div className="frame1920wlight-section-link">
            <div className="frame1920wlight-img20240906211044webp"></div>
          </div>
        </div>
        <div className="frame1920wlight-container2">
          <div className="frame1920wlight-main">
            <div className="frame1920wlight-section1">
              <div className="frame1920wlight-image"></div>
              <div className="frame1920wlight-overlay"></div>
              <span className="frame1920wlight-text18">
                <span>Therapist Sign up</span>
              </span>
            </div>
            <div className="frame1920wlight-section2">
              <span className="frame1920wlight-text20">
                <span>Fill up all the information required: </span>
              </span>
              <div className="frame1920wlight-section-form">
                <div className="frame1920wlight-label1">
                  <span className="frame1920wlight-text22">
                    <span>Name</span>
                  </span>
                  <span className="frame1920wlight-text24">
                    <span> *</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder
                  className="frame1920wlight-input1"
                />
                <span className="frame1920wlight-text26">
                  <span>Phone Number</span>
                </span>
                <div className="frame1920wlight-input2">
                  <div className="frame1920wlight-container3">
                    <span className="frame1920wlight-text28">
                      <span>+91</span>
                    </span>
                  </div>
                </div>
                <div className="frame1920wlight-label2">
                  <span className="frame1920wlight-text30">
                    <span>
                      Email
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                  <span className="frame1920wlight-text32">*</span>
                </div>
                <input
                  type="text"
                  placeholder
                  className="frame1920wlight-input3"
                />
                <div className="frame1920wlight-label3">
                  <span className="frame1920wlight-text33">
                    <span>Password</span>
                  </span>
                  <span className="frame1920wlight-text35">
                    <span> *</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder
                  className="frame1920wlight-input4"
                />
                <div className="frame1920wlight-label4">
                  <span className="frame1920wlight-text37">
                    <span>Confirm Password</span>
                  </span>
                  <span className="frame1920wlight-text39">
                    <span> *</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder
                  className="frame1920wlight-input5"
                />
                <div className="frame1920wlight-label5">
                  <span className="frame1920wlight-text41">
                    <span>Specialization</span>
                  </span>
                  <span className="frame1920wlight-text43">
                    <span> *</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder
                  className="frame1920wlight-input6"
                />
                <div className="frame1920wlight-label6">
                  <span className="frame1920wlight-text45">
                    <span>Qualifications</span>
                  </span>
                  <span className="frame1920wlight-text47">
                    <span> *</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder
                  className="frame1920wlight-input7"
                />
                <div className="frame1920wlight-label7">
                  <span className="frame1920wlight-text49">
                    <span>Address</span>
                  </span>
                  <span className="frame1920wlight-text51">
                    <span> *</span>
                  </span>
                </div>
                <div className="frame1920wlight-textarea"></div>
                <button className="frame1920wlight-button">
                  <span className="frame1920wlight-text53">
                    <span>Submit</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
